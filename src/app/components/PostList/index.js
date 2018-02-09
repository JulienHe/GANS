import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Post from 'components/Post';
import AddPost from 'components/AddPost';

const ListPicture = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
`;

const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    allPosts(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
    }
  }
`;

const POST_SUBSCRIPTION = gql`
  subscription createPost {
    Post(filter: {mutation_in: [CREATED]}) {
      node {
        id
        imageUrl
        description
      }
    }
  }
`;

class PostList extends Component {
  componentWillMount() {
    this.props.allPostsQuery.subscribeToMore({
      document: POST_SUBSCRIPTION,
      updateQuery: (prev, {subscriptionData}) => {
        if (!subscriptionData.data) {
          return prev;
        }
        const newPost = subscriptionData.data.Post.node;
        if (!prev.allPosts.find((post) => post.id === newPost.id)) {
          let updatePost = Object.assign({}, prev, { allPosts :[newPost, ...prev.allPosts ] });
          return updatePost;
        } else {
          return prev;
        }
      },
    });
  }

  render() {
    // Receive data
    const allPostsQuery = this.props.allPostsQuery;

    if (allPostsQuery.loading) {
      return (
        <div>
          <div>
            Loading...
          </div>
        </div>
      );
    }

    if (allPostsQuery.error) {
      return <p>{allPostsQuery.error.message}</p>;
    }

    if (allPostsQuery.allPosts === null){
      return <p>Oups, nothing here</p>;
    }

    return (
      <section>
        <AddPost />
        <ListPicture>
          {allPostsQuery.allPosts && allPostsQuery.allPosts.map(post => (
            <Post
              key={post.id}
              post={post}
            />
          ))}
        </ListPicture>
      </section>
    );
  }
}

PostList.propTypes = {
  allPostsQuery: PropTypes.obj,
};

export default compose(
  graphql(ALL_POSTS_QUERY, { name: 'allPostsQuery' }),
  graphql(POST_SUBSCRIPTION, { name: 'postSubscription' }),
)(PostList);
