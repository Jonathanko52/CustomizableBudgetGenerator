import React, { Component } from "react";

//form for adding stuff to state (table)
class addForm extends Component {
  constructor(props) {
    super(props);
    this.state = {item:'',price:''};
    this.handleChangeItem = this.handleChangeItem.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

//detects item form and adds to state  
  handleChangeItem(event) {
    console.log("EVENT.TARGET",event.target.value)
    this.setState({item:event.target.value})
  }

  //detects price from and adds to state
  handleChangePrice(event) {
    console.log("EVENT.TARGET",event.target.value)
    this.setState({price:event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addItem(this.state)
    console.log("STATE", this.state)
  }


  render() {
   return(
        <form onSubmit={this.handleSubmit}>
        <p>Add New Item to Table</p>
          <label>
              Item<input type="text" value={this.state.item} onChange={this.handleChangeItem}/>
              Price<input type="text" value={this.state.price} onChange={this.handleChangePrice}/>
          </label>
          <input type="submit" value ="Submit"/>
        </form>
   )
  }
}

export default addForm;


