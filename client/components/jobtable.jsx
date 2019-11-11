import React from 'react';
import Job from './job';
import { withRouter } from 'react-router-dom';

class JobTable extends React.Component {
  render() {
    const jobs = this.props.jobArray;
    let element;
    if (!jobs.length) {
      element =
      <div className="no__job rounded w-100 h-50 d-flex align-items-center justify-content-center">
        <h3> Currently no jobs listed </h3>
      </div>;
    } else {
      element =
      <table className = "table table-striped table-borderless table-hover h-100 w-100">
        <thead className = "thead-dark">
          <tr>
            <th scope="w-25" className="text-center table__header"> Company </th>
            <th scope="w-25" className="text-center table__header"> Status </th>
            <th scope="w-25" className="text-center table__header"> Comments </th>
            <th scope="w-25" className="text-center table__header"> Actions </th>
          </tr>
        </thead>
        <tbody>
          {
            jobs.map(element => {
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
            })
          }
        </tbody>
      </table>;
    }
    return (element);
  }
}

export default withRouter(JobTable);
