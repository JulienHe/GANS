import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { split } from 'apollo-client-preset';
import { getMainDefinition } from 'apollo-utilities';
import fetch from 'isomorphic-unfetch';

const GRAPHQL_ENDPOINT = 'https://api.graph.cool/simple/v1/cjdd0efxp3les0146142pum8n'; // Replace with your own simple endpoint
const SUBSCRIPTIONS_ENDPOINT = 'wss://subscriptions.ap-northeast-1.graph.cool/v1/cjdd0efxp3les0146142pum8n'; // Replace with your own subscriptions endpoint
let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

// If you forget ❤️
if (!GRAPHQL_ENDPOINT) {
  throw Error('Provide a GraphQL endpoint.');
}

if (!SUBSCRIPTIONS_ENDPOINT) {
  throw Error('Provide a GraphQL Subscriptions endpoint.');
}

// Your GraphQL endpoint
const httpLink = new HttpLink({
  uri: GRAPHQL_ENDPOINT,
  credentials: 'same-origin'
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = process.browser ? split( //only create the split in the browser
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  new SubscriptionClient(SUBSCRIPTIONS_ENDPOINT, { reconnect: true} ),
  httpLink,
) : httpLink;


function create(headers, initialState) {
  return new ApolloClient({
    initialState,
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: link,
    cache: new InMemoryCache()
  });
}

export default function initApollo(headers, initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(headers ,initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(headers, initialState);
  }

  return apolloClient;
}
