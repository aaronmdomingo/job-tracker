import React from 'react';
import CommentDetail from './details-comment';

class DetailsModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentHistoryArr: [],
      isEmpty: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    this.getAllComments();
  }
  getAllComments() {
    fetch(`/api/comments.php?id=${this.props.jobId.id}`)
      .then(result => result.json())
      .then(result => {
        if (!result.length) {
          this.setState({ isEmpty: true });
        } else {
          this.setState({ isEmpty: false });
          this.setState({ commentHistoryArr: result });
        }
      });
  }
  handleClose() {
    this.props.hideDetailsModal();
  }
  handleDelete(commentObj) {
    fetch(`/api/comments.php`, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(commentObj) })
      .then(result => result.json())
      .then(result => {
        if (result.success) {
          this.getAllComments();
          this.props.getJobs();
        }
      })
      .catch(error => alert(error));
  }
  render() {
    const { commentHistoryArr, isEmpty } = this.state;
    let dateWithTime, date, filteredDate, element;
    if (this.props.jobId.date) {
      dateWithTime = this.props.jobId.date.split(' ')[0];
      date = dateWithTime.split('-');
      filteredDate = `${date[1]}/${date[2]}/${date[0]}`;
    }

    if (commentHistoryArr.length) {
      element =
      commentHistoryArr.map(element => {
        return <CommentDetail key={element.id} comment={element} handleDelete={this.handleDelete}/>;
      });
    }

    if (isEmpty) {
      element =
        <div className="container w-100 h-100 d-flex justify-content-center align-items-center">
          <h3> No Comments </h3>
        </div>;
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
              <div className="details__history_container w-100 border border-dark rounded">
                { element }
              </div>
              <div className="w-100 d-flex justify-content-center align-items-center">
                <button type="button" className="btn-mini btn-secondary" onClick={this.handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailsModal;
