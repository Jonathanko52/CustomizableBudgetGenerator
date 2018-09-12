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

    //removes given item(row) from current table(state)
    this.removeItem = this.removeItem.bind(this);

    //increment quantity of item by one
    this.incrementItem = this.incrementItem.bind(this);

    //decrement quantity of item by one
    this.decrementItem = this.decrementItem.bind(this);
  }

  //goes to retrieve table route on server, grabbing table from mlab and setting the state
  retrieveTable(){
    fetch('http://localhost:3333/retrieveTable')
    .then((res)=>res.json()
    ).then((res)=>{
      this.setState({
        itemNameArr:res[0],
        quantityArr:res[1],
        costPerUnitArr:res[2]
      })
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
    if(isNaN(passedState.price)){
      alert('INVALID PRICE. MUST BE NUMBER')
    } else {
      this.setState((prevState)=>{

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
  }

  removeItem(index){
    event.preventDefault();
    console.log('Remove Invoked', index)
    this.setState((prevState)=>{
      let newItemArr = prevState.itemNameArr.slice();
      let newQuantityArr = prevState.quantityArr.slice();
      let newCostPerUnitArr = prevState.costPerUnitArr.slice();

      newItemArr.splice(index,1)
      newQuantityArr.splice(index,1)
      newCostPerUnitArr.splice(index,1)

      return{
        itemNameArr:newItemArr,
        quantityArr:newQuantityArr,
        costPerUnitArr:newCostPerUnitArr
      }
    })
  }

  incrementItem(index){
    event.preventDefault();
    this.setState((prevState)=>{
      let newQuantityArr = prevState.quantityArr.slice();
      newQuantityArr[index]++

      return{
        itemNameArr:prevState.itemNameArr,
        quantityArr:newQuantityArr,
        costPerUnitArr:prevState.costPerUnitArr
      }
    })
  };

  decrementItem(index){
    event.preventDefault();
    this.setState((prevState)=>{
      let newQuantityArr = prevState.quantityArr.slice();
      newQuantityArr[index]--

      return{
        itemNameArr:prevState.itemNameArr,
        quantityArr:newQuantityArr,
        costPerUnitArr:prevState.costPerUnitArr
      }
    })
  }

  render() {

    //Calculating total Price of all items in table
    let totalCost = 0;
    if(this.state.quantityArr){
      this.state.quantityArr.forEach((cur,ind)=>{
        totalCost += this.state.quantityArr[ind] * this.state.costPerUnitArr[ind]
      })  
    }

    return (
      <div>
        {/* retrieves user table from mlab */}
        <button onClick={this.retrieveTable}>
          Retrieve Table
        </button>
        <br></br>
        {/* uploads current table(state) to mlab */}
        <button onClick={this.updateTable}>
          Update Database
        </button>
        <p>Table Go here</p>
        <Table itemNameArr={this.state.itemNameArr} 
               quantityArr={this.state.quantityArr} 
               costPerUnitArr={this.state.costPerUnitArr} 
               removeItem={this.removeItem}
               incrementItem={this.incrementItem}
               decrementItem={this.decrementItem}
        />
        <p>Total Cost:{totalCost}</p>
        <AddForm addItem={this.addItem}/>
        
      </div> 
    );
  }
}

export default MainContainer;