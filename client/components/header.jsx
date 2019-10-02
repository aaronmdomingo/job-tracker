import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className = "container-fluid p-0 d-flex justify-content-between align-items-center mt-2">
        <h1>{ this.props.text }</h1>
        <h3 className="mt-2">Average Grade <span className = "badge badge-primary p-2"> { this.props.average }</span></h3>
      </div>
    );
  }
}

export default Header;
