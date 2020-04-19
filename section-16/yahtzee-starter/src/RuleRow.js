import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  // constructor(props) {
  //   super(props);
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick(e) {
  //   e.preventDefault();
  //   className = "RuleRow RuleRow-disabled";
  //   this.props.doScore();
  // }

  render() {
    let className = "RuleRow RuleRow-";

    if (!isNaN(this.props.score)) {
      className += "disabled";
    } else {
      className += "active"
    }

    return (
      <tr className={className} onClick={this.props.doScore}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    )
  }
}

export default RuleRow;