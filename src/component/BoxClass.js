import React, { Component } from 'react'

export default class BoxClass extends Component {

  constructor() {
    super();
    this.result = "";
  };

  getResult = () => {
    if (this.props.title === "Computer" && this.props.result !== "Tie" && this.props.result !== "") {
      this.result = this.props.result === "Win" ? "Lose" : "Win";
    } else {
      this.result = this.props.result;
    };
  };



  render() {
    this.getResult();
    return (

      <div className={`box ${this.result}`}>
        <h1 className="word">{this.props.title}</h1>
        <img className="item-img" ait=" " src={this.props.item && this.props.item.img} />
        <h2>{this.result}</h2>
      </div>
    );
  }
}


