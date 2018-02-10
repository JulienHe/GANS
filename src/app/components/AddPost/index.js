import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import styled from 'styled-components';

// Local
import { CREATE_POST_MUTATION } from './query';

const AddPostForm = styled.div`
  font-size: 16px;
  margin: 0 auto;
  max-width: 400px;
  padding: 8px;
  width: 100%;
`;

const AddPostInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: 1px solid #ececec;
`;

const AddPostSubmit = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #f33267;
  color: white;
  border: 0;
  border-radius: 4px;
`;

class AddImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      imageUrl: '',
    };
  }

  handlePost = async () => {
    const {description, imageUrl} = this.state;
    await this.props.createPostMutation({variables: {description, imageUrl}});
    this.setState({
      description: '',
      imageUrl: '',
    });
  }

  render() {
    return (
      <AddPostForm>
        <div>
          <div>
            <AddPostInput
              value={this.state.imageUrl}
              placeholder='Image Url'
              onChange={e => this.setState({imageUrl: e.target.value})}
            />
            <AddPostInput
              value={this.state.description}
              placeholder='Description'
              onChange={e => this.setState({description: e.target.value})}
            />
            {this.state.description &&
              this.state.imageUrl &&
              <AddPostSubmit
                onClick={this.handlePost}
              >
                Post
              </AddPostSubmit>}
          </div>
        </div>
      </AddPostForm>
    );
  }

}



AddImages.propTypes = {
  createPostMutation: PropTypes.func,
};

const AddPost = graphql(CREATE_POST_MUTATION, {
  name: 'createPostMutation',
})(AddImages);

export default AddPost;
