import React from 'react';
import { withRouter } from 'react-router-dom';

class DashBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobArray: []
    };
  }
  componentDidMount() {
  }
  render() {
    return (
      <h1>Test</h1>
    );
  }
}

export default withRouter(DashBoard);
