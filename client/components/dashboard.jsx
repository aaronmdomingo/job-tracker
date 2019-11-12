import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
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
    this.deleteJob = this.deleteJob.bind(this);
  }
  componentDidMount() {
    this.getJobs();
    this.scrollToBottom();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.jobArray.length < this.state.jobArray.length) {
      this.scrollToBottom();
    }
  }
  getJobs() {
    fetch(`/api/jobs.php?userName=${this.props.currentUser.userName}`)
      .then(result => result.json())
      .then(result => {
        this.setState({ jobArray: result });
      });
  }
  scrollToBottom() {
    animateScroll.scrollToBottom({ duration: 1000, containerId: 'message--container' });
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
  deleteJob(jobObj) {
    fetch(`/api/jobs.php`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(jobObj) })
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
        <div className="dashboard__table h-50 w-100" id="message--container">
          <Jobtable jobArray={jobArray} deleteJob={this.deleteJob}/>
        </div>
        <JobForm currentUser={this.props.currentUser} addJob={this.addJob}/>
      </div>
    );
  }
}

export default withRouter(DashBoard);
