import React from 'react';
import { withRouter } from 'react-router-dom';

class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      passWord: '',
      fetchResponse: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let eventTarget = event.target.name;

    switch (eventTarget) {
      case 'username':
        this.setState({ userName: event.target.value });
        break;
      case 'password':
        this.setState({ passWord: event.target.value });
        break;
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    // const userObj = {
    //   userName: this.state.userName,
    //   passWord: this.state.passWord
    // };

    this.clearInputs();
  }

  clearInputs() {
    this.setState({
      userName: '',
      passWord: ''
    });
  }
  render() {
    const { userName, passWord } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className="login__page container-fluid h-100 w-100 p3 d-flex flex-column align-items-center justify-content-center">
        <h1 className="display-2 m-3"> Tracker </h1>
        <div className="login__container container-fluid w-75 h-50 d-flex flex-column align-items-center justify-content-center rounded">
          <div className="container-fluid h-25 w-100 d-flex justify-content-center align-items-center">
            <input type="text" value={userName} name="username" onChange={this.handleChange} placeholder="Username" className="login__input text-center" autoComplete="off" required/>
          </div>
          <div className="container-fluid h-25 w-100 d-flex justify-content-center align-items-center">
            <input type="password" value={passWord} name="password" onChange={this.handleChange} placeholder="Password" className="login__input text-center" required/>
          </div>
          <div className="container-fluid h-25 w-100 d-flex justify-content-center align-items-center">

          </div>
        </div>
        <button type="submit" className="btn btn-light m-3">Submit</button>
      </form>
    );
  }
}

export default withRouter(LogIn);
