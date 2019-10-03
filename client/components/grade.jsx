import React from 'react';

class Grade extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    const studentID = this.props.studentID;
    this.props.onDelete(studentID);
  }
  render() {
    return (
      <tr>
        <th scope="col"> { this.props.name }</th>
        <th scope="col"> { this.props.course }</th>
        <th scope="col"> { this.props.grade }</th>
        <th scope="col" className="d-flex justify-content-center">
          <button onClick = { this.handleDelete } className="btn btn-danger">Delete</button>
        </th>
      </tr>
    );
  }
}

export default Grade;
