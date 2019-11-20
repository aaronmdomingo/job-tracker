import React from 'react';
import Job from './job';
import { withRouter } from 'react-router-dom';

class JobTable extends React.Component {
  render() {
    const jobs = this.props.jobArray;

    return (
      <table className="table table-striped table-borderless table-hover h-100 w-100 fadeIn">
        <thead className="thead-dark rounded-top">
          <tr className="rounded-top">
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
                  id={element.id}
                  userName={element.user_name}
                  company={element.company}
                  position={element.position}
                  status={element.status}
                  comments={element.comments}
                  date={element.date}
                  deleteJob={this.props.deleteJob}
                  initiateUpdate={this.props.initiateUpdate}
                  showDeleteModal={this.props.showDeleteModal}
                  showDetailsModal={this.props.showDetailsModal}
                  setJobId={this.props.setJobId}
                />
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

export default withRouter(JobTable);
