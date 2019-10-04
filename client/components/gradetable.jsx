import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  render() {
    const grades = this.props.grades;
    let element;
    if (!grades.length) {
      element =
      <tr>
        <th scope="row"> No Grades Recorded </th>
      </tr>;
    } else {
      element = this.props.grades.map(element => {
        return (
          <Grade key={element.id}
            studentID = { element.id }
            name={element.name}
            course={element.course}
            grade={element.grade}
            onDelete={this.props.onDelete}
            onUpdate={this.props.onUpdate}
          />
        );
      });
    }

    return (
      <table className = "table table-striped table-borderless table-hover">
        <thead className = "thead-dark">
          <tr>
            <th scope="col"> Student Name</th>
            <th scope="col"> Course </th>
            <th scope="col"> Grade </th>
            <th scope="col"> Operations </th>
          </tr>
        </thead>
        <tbody>
          { element }
        </tbody>
      </table>
    );
  }
}

export default GradeTable;
