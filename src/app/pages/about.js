import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import App from 'components/App';
import {
  Container,
  Title,
  Text,
} from 'components/Helpers/General';

export class About extends PureComponent {
  render() {
    // This is an example to show how Next-routes can work.
    const id = this.props.url.query.id ? `ID: ${this.props.url.query.id}` : 'No id found, sorry';

    return (
      <App>
        <Container>
          <Title>About</Title>
          <Text>{id}</Text>
        </Container>
      </App>
    );
  }
}

About.propTypes = {
  url: PropTypes.object,
};

export default About;
