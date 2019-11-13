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
    this.props.showDeleteModal();
    this.props.setJobId({
      id: this.props.id,
      company: this.props.company
    });
    this.setState({ inEdit: false });
  }
  handleUpdate() {
    const job = {
      id: this.props.id,
      userName: this.props.userName,
      company: this.props.company,
      position: this.props.position,
      status: this.props.status,
      comments: this.props.comments,
      date: this.props.date
    };
    this.props.initiateUpdate(job);
    this.setState({ inEdit: false });
  }
  render() {
    const { inEdit } = this.state;
    const date = this.props.date.split('-');
    const filteredDate = `${date[1]}/${date[2]}/${date[0]}`;

    let button = inEdit
      ? <th scope="col" className="h-100 d-flex flex-column justify-content-around align-items-center">
        <button onClick={this.handleUpdate} className="btn__update btn-mini btn-primary">Update</button>
        <button onClick={this.handleDelete} className="btn-mini btn-danger">Delete</button>
      </th>
      : <th scope="col" className="h-100 d-flex flex-column justify-content-around align-items-center">
        <button onClick={this.handleEdit} className="btn-mini btn-light">Edit</button>
      </th>;

    return (
      <tr className="table__input">
        <th className="table__result text-center align-middle"> { this.props.company } </th>
        <td className="table__result text-center align-middle position"> { this.props.position } </td>
        <td className="table__result text-center align-middle"> {this.props.status} </td>
        <td className="table__result align-middle"> { this.props.comments } </td>
        <td className="table__result text-center align-middle date"> {filteredDate} </td>
        { button }
      </tr>
    );
  }
}

export default Job;
