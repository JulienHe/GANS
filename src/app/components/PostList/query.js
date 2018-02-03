import gql from 'graphql-tag';

export const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    allPosts(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePostMutation($id: ID!){
    deletePost(id: $id) {
      id
    }
  }
`;

export const CHANGED_POST_SUBSCRIPTION = gql`
  subscription changedPost {
    Post(
      filter: {
        mutation_in: [CREATED, UPDATED, DELETED]
      }
    ) {
      mutation
      node {
        id
        description
        imageUrl
      }
      updatedFields
      previousValues {
        id
        description
        imageUrl
      }
    }
  }
`;
