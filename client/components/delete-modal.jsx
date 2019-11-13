import React from 'react';

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.handleClose = this.handleClose.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentWillMount() {
    this.setState({ visible: true });
  }
  handleDelete() {
    this.props.deleteJob({ id: this.props.jobId.id });
    this.props.hideDeleteModal();
  }
  handleClose() {
    this.props.hideDeleteModal();
  }
  render() {
    let modalClass;
    const { visible } = this.state;

    if (visible) {
      modalClass = 'fadeIn';
    }

    return (
      <div className={`modal ${modalClass}`} role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{`${this.props.jobId.company} - ${this.props.jobId.position}`}</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-center">
              You are about to delete this job, are you sure?
            </div>
            <div className="modal-footer w-100 d-flex justify-content-around align-items-center">
              <button type="button" className="btn-mini btn-light" data-dismiss="modal" onClick={this.handleDelete}>Yes</button>
              <button type="button" className="btn-mini btn-danger" onClick={this.handleClose}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeleteModal;
