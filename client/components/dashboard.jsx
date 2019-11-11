import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Header from './header';
import Jobtable from './jobtable';
import JobForm from './jobform';

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
        <Header logOutUser={this.props.logOutUser}/>
        <h3 className="w-75 d-flex justify-content-center align-items-center border-bottom border-dark">{this.props.currentUser.userName}</h3>
        <Jobtable jobArray={jobArray}/>
        <JobForm/>
      </div>
    );
  }
}

export default withRouter(DashBoard);
