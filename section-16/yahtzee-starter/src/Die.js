import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.handleClick(this.props.idx);
  }

  render() {
    const num = this.props.val ? this.props.val : 0;
    
    let iconClass = "fas fa-dice";
    // this.setState({ num: this.state.props });
    function getStrFromNum (num) {
        let digits = ["", "-one", "-two", "-three", "-four", "-five", "-six"];
        return digits[num];
    }

    iconClass += getStrFromNum(num);

    return (
      <div className="Die">
        <i
          className={iconClass}
          style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
          onClick={this.handleClick}
        ></i>
      </div>
    );
  }
}

export default Die;
