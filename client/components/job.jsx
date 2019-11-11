import React from 'react';

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }
  handleDelete() {
    const studentID = this.props.studentID;
    this.props.onDelete(studentID);
  }
  handleUpdate() {
    const student = {
      name: this.props.name,
      course: this.props.course,
      grade: this.props.grade,
      id: this.props.studentID
    };
    this.props.onUpdate(student);
  }
  render() {
    return (
      <tr>
        <th scope="col"> { this.props.name } </th>
        <th scope="col"> { this.props.course } </th>
        <th scope="col"> { this.props.grade } </th>
        <th scope="col" className="d-flex justify-content-around">
          <button onClick = { this.handleUpdate } className="btn btn-primary">Update</button>
          <button onClick = { this.handleDelete } className="btn btn-danger">Delete</button>
        </th>
      </tr>
    );
  }
}

export default Job;
