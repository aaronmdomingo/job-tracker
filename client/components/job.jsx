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
        <th scope="col" className="w-25"> { this.props.name } </th>
        <th scope="col" className="w-25"> { this.props.course } </th>
        <th scope="col" className="w-25"> { this.props.grade } </th>
        <th scope="col" className="h-100 d-flex flex-column justify-content-around align-items-center">
          <button onClick = { this.handleUpdate } className="btn-mini btn-primary">Update</button>
          <button onClick = { this.handleDelete } className="btn-mini btn-danger">Delete</button>
        </th>
      </tr>
    );
  }
}

export default Job;
