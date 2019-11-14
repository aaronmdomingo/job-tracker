import React from 'react';
import { withRouter } from 'react-router';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.logInAsGuest = this.logInAsGuest.bind(this);
    this.goToDashboard = this.goToDashboard.bind(this);
    this.goToLogIn = this.goToLogIn.bind(this);
    this.logInStatus = null;
    this.currentUser = null;
  }
  logInAsGuest() {
    const guestObject = {
      userName: 'Guest'
    };
    this.props.setCurrentUser(guestObject);
    this.props.logInUser();
    this.props.history.push(`/dashboard/guest`);
  }
  goToDashboard() {
    this.props.history.push(`/dashboard/${this.currentUser.userName || this.props.currentUser.userName}`);
  }
  goToLogIn() {
    this.props.history.push('/login');
  }
  render() {
    let topButton, bottomButton;
    this.logInStatus = JSON.parse(localStorage.getItem('logInStatus'));
    this.currentUser = JSON.parse(localStorage.getItem('userName'));
    const logOutUser = () => this.props.logOutUser();

    if (this.logInStatus) {
      topButton = <button className="btn btn-light m-2" onClick={this.goToDashboard}>Dashboard</button>;
      bottomButton = <button className="btn btn-light m-2" onClick={logOutUser}>Log out</button>;
    } else {
      topButton = <button className="btn btn-light m-2" onClick={this.goToLogIn}>Log in</button>;
      bottomButton = <button className="btn btn-light m-2" onClick={this.logInAsGuest}>Guest</button>;
    }
    return (
      <div className="landing__page container-fluid h-100 w-100 p3 d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-2 m-3">Tracker</h1>
        {topButton}
        {bottomButton}
      </div>
    );
  }
}

export default withRouter(LandingPage);
