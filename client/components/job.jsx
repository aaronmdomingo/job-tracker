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
    const jobToBeDeleted = { id: this.props.id };
    this.props.deleteJob(jobToBeDeleted);
  }
  handleUpdate() {
    const job = {
      id: this.props.id,
      userName: this.props.userName,
      company: this.props.company,
      status: this.props.status,
      comments: this.props.comments,
      date: this.props.date
    };
    this.props.initiateUpdate(job);
  }
  render() {
    const { inEdit } = this.state;

    let button = inEdit
      ? <th scope="col" className="h-100 d-flex flex-column justify-content-around align-items-center">
        <button onClick={this.handleUpdate} className="btn-mini btn-primary">Update</button>
        <button onClick={this.handleDelete} className="btn-mini btn-danger">Delete</button>
      </th>
      : <th scope="col" className="h-100 d-flex flex-column justify-content-around align-items-center">
        <button onClick={this.handleEdit} className="btn-mini btn-light">Edit</button>
      </th>;

    return (
      <tr className="table__input">
        <th className="w-25 text-center align-middle"> { this.props.company } </th>
        <td className="w-25 text-center align-middle"> { this.props.status } </td>
        <td className="w-25"> { this.props.comments } </td>
        { button }
      </tr>
    );
  }
}

export default Job;
