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
    this.addJob = this.addJob.bind(this);
  }
  componentDidMount() {
    this.getJobs();
  }
  getJobs() {
    fetch(`/api/jobs.php?userName=${this.props.currentUser.userName}`)
      .then(result => result.json())
      .then(result => {
        this.setState({ jobArray: result });
      });
  }
  addJob(jobObj) {
    fetch(`/api/jobs.php`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(jobObj) })
      .then(result => result.json())
      .then(result => {
        if (result.success) {
          this.getJobs();
        }
      })
      .catch(error => alert(error));
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
        <div className="dashboard__table h-50 w-100">
          <Jobtable jobArray={jobArray} />
        </div>
        <JobForm currentUser={this.props.currentUser} addJob={this.addJob}/>
      </div>
    );
  }
}

export default withRouter(DashBoard);
