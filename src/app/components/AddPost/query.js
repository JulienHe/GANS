import gql from 'graphql-tag';

export const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($description: String!, $imageUrl: String!) {
    createPost(description: $description, imageUrl: $imageUrl) {
      id
      description
      imageUrl
    }
  }
`;
