import React from 'react';
import { withRouter } from 'react-router';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.logInAsGuest = this.logInAsGuest.bind(this);
  }
  logInAsGuest() {
    const guestObject = {
      userName: 'guest'
    };
    this.props.setCurrentUser(guestObject);
    this.props.history.push(`/dashboard/guest`);
  }
  render() {
    return (
      <div className="landing__page container-fluid h-100 w-100 p3 d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-2 m-3">Tracker</h1>
        <button className="btn btn-light m-2">Log in</button>
        <button className="btn btn-light m-2" onClick={this.logInAsGuest}>Guest</button>
      </div>
    );
  }
}

export default withRouter(LandingPage);
