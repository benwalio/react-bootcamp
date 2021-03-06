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

    let divClass = "Die";
    if (this.props.locked) divClass += " Die-locked";
    if (this.props.rolling && !this.props.locked) divClass += " Die-Rolling";

    iconClass += getStrFromNum(num);

    return (
      <div className={divClass}>
        <i
          className={iconClass}
          style={{ color: this.props.locked ? "grey" : "white" }}
          onClick={this.handleClick}
        ></i>
      </div>
    );
  }
}

export default Die;
