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

const PostContentDelete = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: .3s ease opacity;
  padding: 16px;
  &:hover {
    opacity: 1;
  }
`;

const PostContentDeleteButton = styled.button`
  background-color: #fc2e57;
  border: 0;
  color: white;
  font-size: 14px;
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 3px;
  cursor: pointer;
  transition: background .3s ease;
  &:hover {
    background-color: #ff4066;
  }
`;

const PostContentFigcaption = styled.p`
  font-size: 1.6rem;
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
          <PostContentDelete>
            <PostContentDeleteButton
              onClick={this.deletePost}
            >Delete</PostContentDeleteButton>
          </PostContentDelete>
        </PostContentFigure>
        <PostContentFigcaption>
          {this.props.post.description}
        </PostContentFigcaption>
      </PostContent>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  onDeletePost: PropTypes.func,
};

export default Post;
