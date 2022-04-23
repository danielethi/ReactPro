import React, { Component } from "react";

export default class Listgamesprops extends Component {
  state={
    isEdditClicked:false
  }
onEdditClick=()=>{
  this.setState({isEdditClicked:!this.state.isEdditClicked})
}
 
  render() {
    return (
      <div className="mylists" >
        <p><b>GameName:</b>{this.props.gamename}</p>
        <p><b>DaysSinceIplayed:-</b>{this.props.daysSinceIplayed}</p>
        {this.state.isEdditClicked ? <input  onChange={this.props.edditInputChange} type="text" placeholder="gamename"/>:null}
        <button onClick={this.onEdditClick}>Edit</button>
        <button onClick={this.props.updateClick}>done</button>
        <button onClick={this.props.deleteClicked}>Delete</button>
      </div>
    );
  }
}


