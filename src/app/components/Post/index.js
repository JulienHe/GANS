import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContent = styled.div`
  display: inline-block;
  margin: 8px;
`;

const PostContentFigure = styled.figure`
  height: 320px;
  width: 320px;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

class Post extends React.Component {
  render() {
    return (
      <PostContent>
        <PostContentFigure>
          <img src={this.props.post.imageUrl} />
        </PostContentFigure>
        <figcaption>
          {this.props.post.description}
        </figcaption>
      </PostContent>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
};

export default Post;
