import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
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

class PostList extends React.Component {

  render() {
    if (this.props.allPostsQuery.loading) {
      return (
        <div>
          <div>
            Loading...
          </div>
        </div>
      );
    }

    return (
      <section>
        <AddPost />
        <ListPicture>
          {this.props.allPostsQuery.allPosts && this.props.allPostsQuery.allPosts.map(post => (
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

const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    allPosts(orderBy: createdAt_DESC) {
      id
      imageUrl
      description
    }
  }
`;

PostList.propTypes = {
  allPostsQuery: PropTypes.obj,
};

const PostListPage = graphql(ALL_POSTS_QUERY, {
  name: 'allPostsQuery',
  options: {
    fetchPolicy: 'network-only',
  },
})(PostList);

export default PostListPage;
