import React, { Component } from "react";
import Table from "./../presentational/Table.jsx";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      //data
      itemNameArr: null,
      quantityArr: null,
      costPerUnitArr: null
    }
    this.retrieveTable = this.retrieveTable.bind(this)
    this.updateTable = this.updateTable.bind(this)

  }

  //goes to retrieve table route on server, grabbing table from mlab and setting the state
  retrieveTable(){
    fetch('http://localhost:3333/retrieveTable')
    .then((res)=>res.json()
    ).then((res)=>{
      console.log('res jsonned')
      this.setState({
        itemNameArr:res[0],
        quantityArr:res[1],
        costPerUnitArr:res[2]
      })
      console.log("State modified. Probably")
      console.log(this.state)
    })
    .catch((err)=>{console.log('fetch failed', err)})
    
  }

  updateTable(){
    console.log("STATE TO BE UPDATE", this.state)
    fetch('http://localhost:3333/updateTable',{
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(this.state)
   })
  }

  render() {
    return (
      <div>
        {/* retrieves user table from mlab */}
        <button onClick={this.retrieveTable}>
          Retrieve Button
        </button>
        <br></br>
        <button>
          Create Button
        </button>
        <br></br>
        <button>
          Delete Button
        </button>
        <br></br>
        {/* uploads current table(state) to mlab */}
        <button onClick={this.updateTable}>
          Update Button 
        </button>
        <p>Table Go here</p>
        <Table itemNameArr={this.state.itemNameArr} quantityArr={this.state.quantityArr} costPerUnitArr={this.state.costPerUnitArr}/>
      </div>
     
    );
  }
}

export default MainContainer;