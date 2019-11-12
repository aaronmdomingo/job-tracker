import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from './landing-page';
import DashBoard from './dashboard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      currentUser: null
    };
    this.setCurrentUser = this.setCurrentUser.bind(this);
    this.logInUser = this.logInUser.bind(this);
    this.logOutUser = this.logOutUser.bind(this);
  }
  setCurrentUser(userObj) {
    this.setState({
      currentUser: userObj
    });
  }
  logInUser() {
    this.setState({ isLoggedIn: true });
  }
  logOutUser() {
    this.setState({ isLoggedIn: false });
  }
  render() {
    return (
      <Router>
        <div className="container-fluid">
        </div>
        <Switch>
          <Route exact path='/'>
            <LandingPage setCurrentUser={this.setCurrentUser} logInUser={this.logInUser} isLoggedIn={this.state.isLoggedIn} logOutUser={this.logOutUser} currentUser={this.state.currentUser}/>
          </Route>
          <Route path='/dashboard/:user'>
            <DashBoard isLoggedIn={this.state.isLoggedIn} currentUser={this.state.currentUser} logOutUser={this.logOutUser}/>
          </Route>
          <Route>
            <LandingPage setCurrentUser={this.setCurrentUser} logInUser={this.logInUser} isLoggedIn={this.state.isLoggedIn} logOutUser={this.logOutUser} currentUser={this.state.currentUser} />;
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
