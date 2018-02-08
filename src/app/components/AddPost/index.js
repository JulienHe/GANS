import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

// Project
import { Modal } from 'components/Modal';

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
      <Modal>
        <div>
          <div>
            <input
              value={this.state.imageUrl}
              placeholder='Image Url'
              onChange={e => this.setState({imageUrl: e.target.value})}
            />
            <input
              value={this.state.description}
              placeholder='Description'
              onChange={e => this.setState({description: e.target.value})}
            />
            {this.state.description &&
              this.state.imageUrl &&
              <button
                onClick={this.handlePost}
              >
                Post
              </button>}
          </div>
        </div>
      </Modal>
    );
  }

}

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($description: String!, $imageUrl: String!) {
    createPost(description: $description, imageUrl: $imageUrl) {
      id
      description
      imageUrl
    }
  }
`;

AddImages.propTypes = {
  createPostMutation: PropTypes.func,
};

const AddPost = graphql(CREATE_POST_MUTATION, {
  name: 'createPostMutation',
})(AddImages);

export default AddPost;
