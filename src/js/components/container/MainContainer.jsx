import React, { Component } from "react";
import Table from "./../presentational/Table.jsx";
import AddForm from "../presentational/AddForm.jsx";

class MainContainer extends Component {
  constructor() {
    super();
    this.state = {
      //data
      itemNameArr: null,
      quantityArr: null,
      costPerUnitArr: null
    }

    //retrieves table from mLab
    this.retrieveTable = this.retrieveTable.bind(this);
    
    //updates table on Mlab with current table (state)
    this.updateTable = this.updateTable.bind(this);

    //adds an item to current table(state)
    this.addItem = this.addItem.bind(this);

    //removes given item from current table(state)
    this.removeItem = this.removeItem.bind(this);

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
    }).then((res,err)=>{
      if(err){
        console.log("UPDATE FAILED", err)
      }
      console.log("UPDATE SUCCEEDED", res)
    }).catch((err)=>{
      console.log("UPDATE FAILED2", err)
    })
  }

  addItem(passedState){
    event.preventDefault();
    this.setState((prevState)=>{
      console.log("ARGUME/ntS", passedState)

      let newItemArr = prevState.itemNameArr.slice();
      let newQuantityArr = prevState.quantityArr.slice();
      let newCostPerUnitArr = prevState.costPerUnitArr.slice();
      newItemArr.push(passedState.item)
      newQuantityArr.push(0)
      newCostPerUnitArr.push(passedState.price)

      return{
        itemNameArr:newItemArr,
        quantityArr:newQuantityArr,
        costPerUnitArr:newCostPerUnitArr
      }
    })

  }

  removeItem(){


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
        <AddForm addItem={this.addItem}/>
      </div> 
    );
  }
}

export default MainContainer;