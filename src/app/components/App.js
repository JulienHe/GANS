import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const App = ({ children }) => (
  <main>
    <Header />
    {children}
  </main>
);

App.propTypes = {
  children: PropTypes.array,
};

export default App;
