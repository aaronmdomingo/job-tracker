import React from 'react';

class CommentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {

  }
  render() {
    const { comment } = this.props;

    const dateWithTime = comment.date.split(' ')[0];
    const date = dateWithTime.split('-');
    const filteredDate = `${date[1]}/${date[2]}`;

    return (
      <div className="details__history_comment h-25 w-100 d-flex justify-content-center align-items-center">
        <div className="details__history_date h-100 d-flex justify-content-center align-items-center font-weight-bold">{filteredDate}</div>
        <div className="details__history_message h-100 d-flex align-items-center p-2">
          {comment.message}
          <span className="details__history_delete text-danger">&times;</span>
        </div>
      </div>
    );
  }
}

export default CommentDetail;
