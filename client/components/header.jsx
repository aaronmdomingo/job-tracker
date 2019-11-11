import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className= "container-fluid p-0 d-flex justify-content-between align-items-center">
        <h1>Tracker</h1>
        <button className="btn btn-light">Log out</button>
      </div>
    );
  }
}

export default Header;
