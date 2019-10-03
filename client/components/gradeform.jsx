import React from 'react';

class GradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      course: '',
      grade: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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

  handleCancel() {
    this.setState({
      name: '',
      course: '',
      grade: ''
    });
  }

  render() {
    const { name, course, grade } = this.state;
    return (
      <form onSubmit={ this.handleSubmit } className = "w-25 ml-2 d-flex flex-column justify-content-start">
        <div className="form-group d-flex align-items-center">
          <i className="fa fa-user w-25 p-2"></i>
          <input value={ name } onChange={ this.handleChange } type="text" className="form-control" placeholder="Name" required />
        </div>
        <div className="form-group d-flex align-items-center">
          <i className="fa fa-book w-25 p-2"></i>
          <input value={ course } onChange={ this.handleChange } type="text" className="form-control" placeholder="Course" required />
        </div>
        <div className="form-group d-flex align-items-center">
          <i className="fa fa-graduation-cap w-25 p-2"></i>
          <input value={ grade } onChange={ this.handleChange } type="number" className="form-control" placeholder="Grade" min="0" max="100" required />
        </div>
        <div className="d-flex justify-content-around">
          <button type="submit" className="btn btn-primary">Submit</button>
          <button type="reset" className="btn btn-secondary" onClick={ this.handleCancel }>Cancel</button>
        </div>
      </form>
    );
  }
}

export default GradeForm;
