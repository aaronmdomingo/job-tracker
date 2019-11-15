import React from 'react';
import { withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.logOutUser = this.logOutUser.bind(this);
    this.goHome = this.goHome.bind(this);
  }
  logOutUser() {
    this.props.logOutUser();
    this.props.history.push('/');
  }
  goHome() {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className= "dashboard__header container-fluid p-0 d-flex justify-content-between align-items-center">
        <h2 className="display-4 header__title m-0" onClick={this.goHome}>Tracker</h2>
        <button className="btn btn-light" onClick={this.logOutUser}>Log out</button>
      </div>
    );
  }
}

export default withRouter(Header);
