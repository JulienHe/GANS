import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContent = styled.div`
  display: inline-block;
  margin: 8px;
  position: relative;
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

const PostContentDelete = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`;

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.deletePost = this.deletePost.bind(this);
  }

  deletePost() {
    this.props.onDeletePost(this.props.post.id);
  }

  render() {
    return (
      <PostContent>
        <PostContentFigure>
          <img src={this.props.post.imageUrl} />
        </PostContentFigure>
        <figcaption>
          {this.props.post.description}
        </figcaption>
        <PostContentDelete
          onClick={this.deletePost}
        >Delete</PostContentDelete>
      </PostContent>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  onDeletePost: PropTypes.func,
};

export default Post;
