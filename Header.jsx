import React from 'react';
import { Link } from 'react-router';


export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <span><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></span>
            <span> </span>
            <Link to="/register" activeClassName="active">Register</Link>
          </div>
        </div>
      </nav>
    );
  }
}