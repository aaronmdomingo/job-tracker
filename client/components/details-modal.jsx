import React from 'react';

class DetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { commentHistoryArr: [] };
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    this.props.hideDetailsModal();
  }
  render() {
    let date, filteredDate;
    if (this.props.jobId.date) {
      date = this.props.jobId.date.split('-');
      filteredDate = `${date[1]}/${date[2]}/${date[0]}`;
    }

    return (
      <div className={`modal fadeIn details__modal`} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content details__content">
            <div className="modal-header">
              <h5 className="modal-title font-weight-bold">{`${this.props.jobId.company}`}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body d-flex flex-column justify-content-around align-items-center">
              <div className="w-100 d-flex justify-content-around align-items-center">
                <div className="w-50 d-flex justify-content-start align-items-center font-weight-bold">Position</div>
                <div className="w-50 d-flex justify-content-center align-items-center">{this.props.jobId.position}</div>
              </div>
              <div className="w-100 d-flex justify-content-around align-items-center">
                <div className="w-50 d-flex justify-content-start align-items-center font-weight-bold">Current Status</div>
                <div className="w-50 d-flex justify-content-center align-items-center">{this.props.jobId.status}</div>
              </div>
              <div className="w-100 d-flex justify-content-around align-items-center">
                <div className="w-50 d-flex justify-content-start align-items-center font-weight-bold">Date Applied</div>
                <div className="w-50 d-flex justify-content-center align-items-center">{filteredDate}</div>
              </div>
              <div className="w-100 d-flex justify-content-around align-items-center font-weight-bold">
                Comment History
              </div>
              <div className="h-75 w-100 d-flex justify-content-around align-items-center border border-dark rounded">
                <div className="w-25 d-flex justify-content-center align-items-center">Position</div>
                <div className="w-75 d-flex justify-content-center align-items-center">{this.props.jobId.comments}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsModal;
