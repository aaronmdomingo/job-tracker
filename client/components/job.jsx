import React from 'react';

class Job extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inEdit: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleEdit() {
    this.setState({ inEdit: true });
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
    const { inEdit } = this.state;

    let button = inEdit
      ? <th scope="col" className="h-100 d-flex flex-column justify-content-between align-items-center">
        <button onClick={this.handleUpdate} className="btn-mini btn-primary">Update</button>
        <button onClick={this.handleDelete} className="btn-mini btn-danger">Delete</button>
      </th>
      : <th scope="col" className="h-100 d-flex flex-column justify-content-around align-items-center">
        <button onClick={this.handleEdit} className="btn-mini btn-light">Edit</button>
      </th>;

    return (
      <tr className="table__input">
        <th className="w-25"> { this.props.name } </th>
        <th className="w-25"> { this.props.course } </th>
        <th className="w-25"> { this.props.grade } </th>
        { button }
      </tr>
    );
  }
}

export default Job;
