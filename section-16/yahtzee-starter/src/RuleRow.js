import React, { Component } from 'react';
import styled, { css, keyframes } from 'styled-components';

const Slide = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 51%;
  }
`;

const RuleRowTR = styled.tr`
  transition: all 0.2s;

  td {
    padding: 0.3em;
    border-bottom: solid 1px black;
  }

  ${props => isNaN(props.score) && css`
    &:hover {
      cursor: pointer;
      background: rgba(227, 242, 253, 0.5);
    }
  `}

  ${props => !isNaN(props.score) && css`
    background: linear-gradient(
      to right,
      rgba(209, 196, 233, 1) 0%,
      rgba(209, 196, 233, 1) 0%,
      rgba(209, 196, 233, 1) 30%,
      rgba(227, 242, 253, 1) 40%
    );
    background-size: 300% 300%;
    animation: ${Slide} 1s ease 1;

    td:first-child {
      text-decoration: line-through;
    }

    &:hover {
      cursor: not-allowed;
    }
  `}
`;

const RuleRowName = styled.td`
  width: 50%;
  text-align: left;
`;

const RuleRowScore = styled.td`
  width: 50%;
  text-align: right;
`;

class RuleRow extends Component {
  render() {
    return (
      <RuleRowTR score={this.props.score} onClick={this.props.doScore}>
        {/* {(!isNaN(this.props.score) ? <RuleRowDisabled> : <RuleRowActive>)} */}
          <RuleRowName>{this.props.name}</RuleRowName>
          <RuleRowScore>{this.props.score}</RuleRowScore>
        {/* {(!isNaN(this.props.score) ? `<&#47RuleRowDisabled>` : `<&#47RuleRowActive>`)} */}
      </RuleRowTR>
    )
  }
}

export default RuleRow;