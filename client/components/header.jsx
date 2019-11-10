import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className= "container-fluid p-0 d-flex justify-content-between align-items-center mt-2">
        <h1>{ this.props.text }</h1>
        <h3>Average Grade <span className= "border border-primary rounded p-1 text-primary"> { this.props.average }</span></h3>
      </div>
    );
  }
}

export default Header;
