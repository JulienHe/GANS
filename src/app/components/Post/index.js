import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContent = styled.div`
  position: relative;
  flex: 1 0 0%;
  width: 100%;
  display: block;
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }
`;

const PostContentFigure = styled.figure`
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  img {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const PostContentHover = styled.div`
  background-color: #000000cc;
  display: flex;
  flex-direction: column;
  height: 100%;
  opacity: 0;
  padding: 16px;
  position: absolute;
  transition: .3s ease opacity;
  width: 100%;
  top: 0;
  text-align: center;
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

const PostContentFigcaption = styled.figcaption`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;

  font-size: 2.4rem;
  display: flex;
  color: white;
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
          <PostContentHover>
            <PostContentFigcaption>
              <p>{this.props.post.description}</p>
            </PostContentFigcaption>
            <PostContentDeleteButton
              onClick={this.deletePost}
            >Delete</PostContentDeleteButton>
          </PostContentHover>
        </PostContentFigure>
      </PostContent>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  onDeletePost: PropTypes.func,
};

export default Post;
