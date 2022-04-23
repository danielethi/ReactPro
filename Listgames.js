import React, { Component } from 'react'
import AddGame from './AddGame'
import axios from 'axios';
import Listgamesprops from './Listgamesprops';

export default class Listgames extends Component {
  state = {
    gameItems: [],
    newgamename:""  
  };
  async componentDidMount() {
    this.setState({
      gameItems: (await axios.get("http://localhost:3050/games")).data,
    });
  }

  deleteClicked=(id)=>{
    axios.delete(`http://localhost:3050/delete/${id}`)
  }
  // edditInputChange=((event)=>{
  //   this.setState({newgame:{
  //     gamename:event.target.value
  //   }
  // }
  updateClicked=(id)=>{
      axios.put("http://localhost:3050/update",{
        id:id,
        newgamename:"newgamename"
      })

  }

  render() {
    return (
      <div>
       <h4 style={{ color: "violet" }}>My Gaming Days Tracker</h4>

       <p><b>List Of  Games</b></p>

        {this.state.gameItems.map((item) => {
          return (
            <Listgamesprops
              key={item.id}
              gamename={item.gamename}
              daysSinceIplayed={item.daysSinceIplayed}
              deleteClicked={()=>this.deleteClicked(item._id)}
              updateClicked={this.updateClicked}
            />
            
          );
        })}
       
    <AddGame/>
      </div>
    )
  }
}
