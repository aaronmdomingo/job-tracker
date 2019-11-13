import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { animateScroll } from 'react-scroll';
import Header from './header';
import Jobtable from './jobtable';
import JobForm from './jobform';
import DeleteModal from './delete-modal';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobArray: [],
      currentJob: null,
      jobId: null,
      showDeleteModal: false,
      isEmpty: false
    };
    this.addJob = this.addJob.bind(this);
    this.deleteJob = this.deleteJob.bind(this);
    this.updateJob = this.updateJob.bind(this);
    this.initiateUpdate = this.initiateUpdate.bind(this);
    this.setJobId = this.setJobId.bind(this);
    this.showDeleteModal = this.showDeleteModal.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
  }
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.getJobs();
      this.scrollToBottom();
    }
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
        if (!result.length) {
          this.setState({ isEmpty: true });
        } else {
          this.setState({ isEmpty: false });
          this.setState({ jobArray: result });
        }
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
  updateJob(jobObj) {
    fetch(`/api/jobs.php`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(jobObj) })
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
  initiateUpdate(jobObj) {
    this.setState({ currentJob: jobObj });
  }
  setJobId(id) {
    this.setState({ jobId: id });
  }
  showDeleteModal() {
    this.setState({ showDeleteModal: true });
  }
  hideDeleteModal() {
    this.setState({ showDeleteModal: false });
  }
  render() {
    const { jobArray, currentJob, showDeleteModal, jobId, isEmpty } = this.state;

    let modalElement = showDeleteModal ? <DeleteModal jobId={jobId} hideDeleteModal={this.hideDeleteModal} deleteJob={this.deleteJob} /> : '';
    let tableElement = isEmpty
      ? <div className="no__job rounded w-100 h-100 d-flex align-items-center justify-content-center fadeIn">
        <h3> Currently no jobs listed </h3>
      </div>
      : <Jobtable jobArray={jobArray} initiateUpdate={this.initiateUpdate} showDeleteModal={this.showDeleteModal} setJobId={this.setJobId} />;

    if (this.props.isLoggedIn) {
      return (
        <div className="dashboard__page container-fluid h-100 d-flex flex-column justify-content-around align-items-center">
          <Header logOutUser={this.props.logOutUser} />
          <h3 className="dashboard__user w-75 d-flex justify-content-center align-items-center border-bottom border-dark">{this.props.currentUser.userName}</h3>
          <div className="dashboard__table w-100 rounded" id="message--container">
            {tableElement}
          </div>
          <JobForm currentUser={this.props.currentUser} addJob={this.addJob} updateJob={this.updateJob} currentJob={currentJob} />
          {modalElement}
        </div>
      );
    } else {
      return (
        <Redirect to='/' />
      );
    }
  }
}

export default withRouter(DashBoard);
