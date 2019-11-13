import React from 'react';
import Job from './job';
import { withRouter } from 'react-router-dom';

class JobTable extends React.Component {
  render() {
    const jobs = this.props.jobArray;
    let element;
    if (!jobs.length) {
      element =
      <div className="no__job rounded w-100 h-100 d-flex align-items-center justify-content-center">
        <h3> Currently no jobs listed </h3>
      </div>;
    } else {
      element =
      <table className = "table table-striped table-borderless table-hover h-100 w-100">
        <thead className = "thead-dark">
          <tr>
            <th className="text-center table__header"> Company </th>
            <th className="text-center table__header position"> Position </th>
            <th className="text-center table__header"> Status </th>
            <th className="text-center table__header"> Comments </th>
            <th className="text-center table__header date"> Date </th>
            <th className="text-center table__header"> Actions </th>
          </tr>
        </thead>
        <tbody>
          {
            jobs.map(element => {
              return (
                <Job key={element.id}
                  id = { element.id }
                  userName={element.user_name}
                  company={element.company}
                  status={element.status}
                  comments={element.comments}
                  date={element.date}
                  deleteJob={this.props.deleteJob}
                  initiateUpdate={this.props.initiateUpdate}
                  showDeleteModal = { this.props.showDeleteModal }
                  setJobId = {this.props.setJobId}
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
