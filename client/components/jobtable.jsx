import React from 'react';
import Job from './job';
import { withRouter } from 'react-router-dom';

class JobTable extends React.Component {
  render() {
    const jobs = this.props.jobArray;
    let element;
    if (!jobs.length) {
      element =
      <tr>
        <th scope="row"> No Grades Recorded </th>
      </tr>;
    } else {
      element = this.props.grades.map(element => {
        return (
          <Job key={element.id}
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
            <th scope="col"> Company Name</th>
            <th scope="col"> Status </th>
            <th scope="col"> Comments</th>
          </tr>
        </thead>
        <tbody>
          { element }
        </tbody>
      </table>
    );
  }
}

export default withRouter(JobTable);
