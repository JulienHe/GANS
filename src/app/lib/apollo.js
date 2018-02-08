import {withData} from 'next-apollo';
import {HttpLink} from 'apollo-link-http';
import {WebSocketLink} from 'apollo-link-ws';
import {split} from 'apollo-client-preset';
import {getMainDefinition} from 'apollo-utilities';

const GRAPHQL_ENDPOINT = ' https://api.graph.cool/simple/v1/cjdd0efxp3les0146142pum8n'; // Replace with your own simple endpoint
const SUBSCRIPTIONS_ENDPOINT = 'wss://subscriptions.ap-northeast-1.graph.cool/v1/cjdd0efxp3les0146142pum8n'; // Replace with your own subscriptions endpoint

// If you forget ❤️
if (!GRAPHQL_ENDPOINT) {
  throw Error('Provide a GraphQL endpoint.');
}

if (!SUBSCRIPTIONS_ENDPOINT) {
  throw Error('Provide a GraphQL Subscriptions endpoint.');
}

export default withData(headers => {
  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
    // this goes here directly (there's actually no "opts" config)
    credentials: 'same-origin',
    // resend the headers on the server side, to be truly isomorphic (makes authentication possible)
    headers
  });

  return {
    link: process.browser
      ? split(
        ({query}) => {
          const {kind, operation} = getMainDefinition(query);

          return 'OperationDefinition' === kind && 'subscription' === operation;
        },
        // that's all you need to make subscriptions work :)
        new WebSocketLink({
          uri: SUBSCRIPTIONS_ENDPOINT,
          options: {
            reconnect: true
          },
        }),
        httpLink
      )
      : httpLink
  };
});
