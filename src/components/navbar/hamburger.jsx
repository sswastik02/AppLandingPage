import React, { Component } from "react";
class HamMenu extends Component {
  barStyle = {
    display: "block",
    width: "30px",
    height: "5px",
    margin: "2px 0",
    background: "black",
    transition:'all 2s ease'
  };
  render() {
    return (
      <div
        className="blankNav"
        style={{ width: "80px", cursor: "pointer" }}
        onClick={this.props.onClick}
      >
        <span className="bar1" style={this.barStyle}></span>
        <span className="bar2" style={this.barStyle}></span>
        <span className="bar3" style={this.barStyle}></span>
      </div>
    );
  }
}

export default HamMenu;
