import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Header from './header';
import Jobtable from './jobtable';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobArray: []
    };
  }
  componentDidMount() {
  }
  render() {
    const { jobArray } = this.state;
    if (!this.props.isLoggedIn) {
      return <Redirect path='/'> </Redirect>;
    }

    return (
      <div className="dashboard__page container-fluid h-100 d-flex flex-column justify-content-around align-items-center">
        <Header />
        <h3 className="w-100 d-flex justify-content-center align-items-center mb-4"> {this.props.currentUser.userName} </h3>
        <Jobtable jobArray={jobArray}/>
      </div>
    );
  }
}

export default withRouter(DashBoard);
