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
  render() {
    const { commentHistoryArr } = this.state;
    let date, filteredDate, element;
    if (this.props.jobId.date) {
      date = this.props.jobId.date.split('-');
      filteredDate = `${date[1]}/${date[2]}/${date[0]}`;
    }

    if (commentHistoryArr) {
      element =
      commentHistoryArr.map(element => {
        return <CommentDetail key={element.id} comment={element} />;
      });
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
