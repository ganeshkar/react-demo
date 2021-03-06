import React from 'react';
import DocumentTitle from 'react-document-title';


export default class Register extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Registration`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <hr />
              <h3>Registration</h3>
              <hr />
              <span>Register Here....!!</span>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}