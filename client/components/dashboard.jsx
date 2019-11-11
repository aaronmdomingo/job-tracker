import React from 'react';
import { withRouter, Redirect } from 'react-router-dom';

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
    if (!this.props.isLoggedIn) {
      return <Redirect path='/'> </Redirect>;
    }
    return (
      <h1>Test</h1>
    );
  }
}

export default withRouter(DashBoard);
