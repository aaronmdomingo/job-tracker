import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h1 className = "mt-3 mb-3"> { this.props.text } </h1>
    );
  }
}

export default Header;
