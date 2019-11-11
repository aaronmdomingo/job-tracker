import React from 'react';
import { withRouter } from 'react-router-dom';

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: '',
      inEdit: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.submitUpdate = this.submitUpdate.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentStudent !== prevProps.currentStudent) {
      this.setState({
        name: this.props.currentStudent.name,
        course: this.props.currentStudent.course,
        grade: this.props.currentStudent.grade,
        inEdit: true
      });
    }
  }

  handleChange(event) {
    let eventTarget = event.target.placeholder;

    switch (eventTarget) {
      case 'Name':
        this.setState({ name: event.target.value });
        break;
      case 'Course':
        this.setState({ course: event.target.value });
        break;
      case 'Grade':
        this.setState({ grade: event.target.value });
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const newEntry = {
      name: this.state.name,
      course: this.state.course,
      grade: parseInt(this.state.grade)
    };
    this.props.onSubmit(newEntry);
    this.handleCancel();
  }

  submitUpdate(event) {
    event.preventDefault();
    const newEntry = {
      name: this.state.name,
      course: this.state.course,
      grade: parseInt(this.state.grade),
      id: this.props.currentStudent.id
    };
    this.props.onUpdate(newEntry);
    this.handleCancel();
  }

  handleCancel() {
    this.setState({
      name: '',
      course: '',
      grade: '',
      inEdit: false
    });
  }

  render() {
    let { name, course, grade, inEdit } = this.state;
    let buttonName, clickMethod, buttonClass;

    if (!inEdit) {
      buttonName = 'Submit';
      clickMethod = this.handleSubmit;
      buttonClass = 'btn btn-light';
    } else {
      buttonName = 'Update';
      clickMethod = this.submitUpdate;
      buttonClass = 'btn btn-success';
    }

    return (
      <form onSubmit={ clickMethod } className = "h-25 w-100 d-flex flex-column justify-content-center">
        <div className="form-group d-flex align-items-center justify-content-around">
          <i className="icon text-white fas fa-building w-25 p-2 d-flex justify-content-center align-items-center"></i>
          <input value={ name } onChange={ this.handleChange } type="text" className="form-control job__input" placeholder="Company Name" required />
        </div>
        <div className="form-group d-flex align-items-center justify-content-around">
          <i className="icon text-white fas fa-folder w-25 p-2 d-flex justify-content-center align-items-center"></i>
          <input value={ course } onChange={ this.handleChange } type="text" className="form-control job__input" placeholder="Status" required />
        </div>
        <div className="form-group d-flex align-items-center justify-content-around">
          <i className="icon text-white fas fa-comment w-25 p-2 d-flex justify-content-center align-items-center"></i>
          <input value={ grade } onChange={ this.handleChange } type="number" className="form-control job__input" placeholder="Comments" min="0" max="100" required />
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
