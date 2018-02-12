import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';

import Post from 'components/Post';
import AddPost from 'components/AddPost';

// local
import {
  ALL_POSTS_QUERY,
  DELETE_POST,
  CHANGED_POST_SUBSCRIPTION,
} from './query';

const ListPicture = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 935px;
  margin: 0 auto;
`;

const ListPictureBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  margin-bottom: 24px;
`;

class PostList extends Component {
  componentWillMount() {
    this.ChangedPostSubscription = this.props.allPostsQuery.subscribeToMore({
      document: CHANGED_POST_SUBSCRIPTION,
      updateQuery: (prev, {subscriptionData}) => {
        // If we have nothing 😢
        if (!subscriptionData.data) {
          return prev;
        }

        // Retrieve information
        const postFromSubscription = subscriptionData.data.Post;
        const typeOfmutation = postFromSubscription.mutation;

        // Check which mutation is and run correct script
        // POST DELETED
        if (typeOfmutation === 'DELETED') {
          // Get ID to remove
          const idToRemove = postFromSubscription.previousValues.id;
          if (prev.allPosts.find((post) => post.id === idToRemove)) {
            return Object.assign({}, prev, { allPosts: prev.allPosts.filter((post) => post.id !== idToRemove) });
          } else {
            return prev;
          }

        // NEW POST CREATED
        } else if (typeOfmutation === 'CREATED') {
          const newPost = postFromSubscription.node;
          if (!prev.allPosts.find((post) => post.id === newPost.id)) {
            return Object.assign({}, prev, { allPosts :[newPost, ...prev.allPosts ] });
          } else {
            return prev;
          }

        // If No Mutation
        } else {
          return prev;
        }
      },
      onError: (err) => console.error(err), // eslint-disable-line no-console
    });
  }

  deletePost = async (id) => {
    await this.props.deletePostQuery({
      variables: {id}
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
          {allPostsQuery.allPosts && allPostsQuery.allPosts
            .map(post => (
              <Post
                key={post.id}
                post={post}
                onDeletePost={(id) => this.deletePost(id)}
              />
            ))
            .reduce((postGroups, post, i) => (
              i % 3 === 0 ? postGroups.push([post]) : postGroups[postGroups.length - 1].push(post),
              postGroups
            ),[])
            .map((postGroup, i) => (
              <ListPictureBlock key={i}>{postGroup}</ListPictureBlock>
            ))
          }
        </ListPicture>
      </section>
    );
  }
}

PostList.propTypes = {
  allPostsQuery: PropTypes.object,
  deletePostQuery: PropTypes.func,
  deletePost: PropTypes.func,
};

export default compose(
  graphql(ALL_POSTS_QUERY, { name: 'allPostsQuery' }),
  graphql(DELETE_POST, { name: 'deletePostQuery' }),
  graphql(CHANGED_POST_SUBSCRIPTION, { name: 'changedPost' }),
)(PostList);
