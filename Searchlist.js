import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import axios from "axios";

export default class Searchlist extends Component {
    state = {
        gameItems: [],   
      };
      async componentDidMount() {
        this.setState({
          gameItems: (await axios.get("http://localhost:3050/games")).data,
        });
      }

  render() {
    return (
      <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        data={this.data}
        callback={(record) => console.log(record)}
      />
    );
  }
}