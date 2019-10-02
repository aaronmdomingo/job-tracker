import React from 'react';
import Grade from './grade';

class GradeTable extends React.Component {
  render() {
    const grades = this.props.grades;
    let element;
    if (!grades.length) {
      element =
      <tr>
        <th scope="row"></th>
        <td>No Grades Recorded</td>
        <td></td>
      </tr>;
    } else {
      element = this.props.grades.map(element => {
        return (
          <Grade key={element.id}
            name={element.name}
            course={element.course}
            grade={element.grade}
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
