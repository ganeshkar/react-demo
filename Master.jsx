import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import DocumentTitle from 'react-document-title';

import Header from './Header.jsx';


export default class Master extends React.Component {
  render() {
    return (
        <div>
          <Header />
          { this.props.children }
        </div>
    );
  }
}