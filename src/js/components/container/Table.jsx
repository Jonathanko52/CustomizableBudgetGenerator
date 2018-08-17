import React, { Component } from "react";
import Item from "../presentational/Item.jsx";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      Foam:['L200 1/2 BLACK/WHITE', 0 ,16.50]
    }

  }

  render() {
    return (
      <table className="MainTable">
        <thead>
          <tr>
            <th></th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Increase/Decrease</th>
            <th>Total</th>
          </tr>
        </thead>
        <Item Foam={this.state}/>
      </table>
    );
  }
}

export default MainContainer;