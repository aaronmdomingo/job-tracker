import React from 'react';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logOutUser = this.logOutUser.bind(this);
  }
  logOutUser() {
    this.props.logOutUser();
    this.props.history.push('/');
  }
  render() {
    return (
      <div className= "container-fluid p-0 d-flex justify-content-between align-items-center">
        <h1>Tracker</h1>
        <button className="btn btn-light" onClick={this.logOutUser}>Log out</button>
      </div>
    );
  }
}

export default withRouter(Header);
