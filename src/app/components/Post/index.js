import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostPicture = styled.picture`
  display: inline-block;
  flex: 0 0 18%;
  margin: 1%;
  img {
    width: 100%;
  }
`;

class Post extends React.Component {
  render() {
    return (
      <PostPicture>
        <img src={this.props.post.imageUrl} />
        <figcaption>
          {this.props.post.description}
        </figcaption>
      </PostPicture>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
