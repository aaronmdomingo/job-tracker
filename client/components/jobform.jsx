import React from 'react';
import { withRouter } from 'react-router-dom';

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: '',
      position: '',
      status: '',
      comments: '',
      userName: '',
      date: '',
      jobID: '',
      inEdit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentJob !== prevProps.currentJob) {
      this.setState({
        company: this.props.currentJob.company,
        position: this.props.currentJob.position,
        status: this.props.currentJob.status,
        comments: this.props.currentJob.comments,
        userName: this.props.currentJob.userName,
        date: this.props.currentJob.date,
        jobID: this.props.currentJob.id,
        inEdit: true
      });
    }
  }

  handleChange(event) {
    let eventTarget = event.target.name;

    switch (eventTarget) {
      case 'company':
        this.setState({ company: event.target.value });
        break;
      case 'position':
        this.setState({ position: event.target.value });
        break;
      case 'status':
        this.setState({ status: event.target.value });
        break;
      case 'comments':
        this.setState({ comments: event.target.value });
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newEntry = {
      userName: this.props.currentUser.userName,
      company: this.state.company,
      position: this.state.position,
      status: this.state.status,
      comments: this.state.comments
    };
    this.props.addJob(newEntry);
    this.handleCancel();
  }

  submitUpdate(event) {
    event.preventDefault();
    const updatedJob = {
      company: this.state.company,
      position: this.state.position,
      status: this.state.status,
      comments: this.state.comments,
      userName: this.state.userName,
      date: this.state.date,
      id: this.state.jobID
    };
    this.props.updateJob(updatedJob);
    this.handleCancel();
  }

  handleCancel() {
    this.setState({
      company: '',
      position: '',
      status: '',
      comments: '',
      inEdit: false
    });
  }

  render() {
    let { company, position, status, comments, inEdit } = this.state;
    let buttonName, clickMethod, buttonClass;

    if (!inEdit) {
      buttonName = 'Submit';
      clickMethod = this.handleSubmit;
      buttonClass = 'btn btn-light';
    } else {
      buttonName = 'Update';
      clickMethod = this.submitUpdate;
      buttonClass = 'btn btn-primary';
    }

    return (
      <form onSubmit={ clickMethod } className = "w-100 d-flex flex-column justify-content-around">
        <div className="form-group d-flex align-items-center justify-content-around">
          <i className="icon text-white fas fa-building w-25 p-2 d-flex justify-content-center align-items-center"></i>
          <input value={ company } name="company" onChange={ this.handleChange } type="text" className="form-control" placeholder="Company Name" autoComplete="off" maxLength="20" required />
        </div>
        <div className="form-group d-flex align-items-center justify-content-around">
          <i className="icon text-white fas fa-user w-25 p-2 d-flex justify-content-center align-items-center"></i>
          <input value={position} name="position" onChange={this.handleChange} type="text" className="form-control" placeholder="Position" autoComplete="off" maxLength="20" required />
        </div>
        <div className="form-group d-flex align-items-center justify-content-around">
          <i className="icon text-white fas fa-folder w-25 p-2 d-flex justify-content-center align-items-center"></i>
          <select value={ status }className="form-control text-center" name="status" onChange={this.handleChange} required>
            <option value="">Current Status</option>
            <option value="Applied / In Progress">Applied / In Progress</option>
            <option value="Followed Up">Followed Up</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Offer</option>
            <option value="Withdrawn">Withdrawn</option>
            <option value="Denied">Denied</option>
          </select>
        </div>
        <div className="form-group d-flex align-items-center justify-content-around">
          <i className="icon text-white fas fa-comment w-25 p-2 d-flex justify-content-center align-items-center"></i>
          <input value={ comments } name="comments" onChange={ this.handleChange } className="form-control" placeholder="Comments" autoComplete="off" maxLength="100" required />
        </div>
        <div className="d-flex align-items-center justify-content-around">
          <button type="submit" className={buttonClass}>{ buttonName }</button>
          <button type="reset" className="btn btn-secondary" onClick={ this.handleCancel }>Cancel</button>
        </div>
      </form>
    );
  }
}

export default withRouter(JobForm);
