import React from 'react';

class Grade extends React.Component {
  render() {
    return (
      <tr>
        <th scope="col"> { this.props.name }</th>
        <th scope="col"> { this.props.course }</th>
        <th scope="col"> { this.props.grade }</th>
      </tr>
    );
  }
}

export default Grade;
