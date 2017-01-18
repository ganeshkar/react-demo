import React from 'react';
import DocumentTitle from 'react-document-title';


export default class Index extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Index`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <hr />
              <h3>Index</h3>
              <hr />
              <span>Welcome!!!!</span>
            </div>
          </div>
        </div>
      </DocumentTitle>
    );
  }
}