import React, { Component } from "react";

class Row extends Component {
  constructor(props) {
    super(props);

  }

  render() {
   return(
    <tr>
      <th> </th>
      <th>{this.props.item}</th>
      <th>{this.props.quantity}</th>
      <th>{this.props.price}</th>
      <th><button onClick={()=>this.props.removeItem(this.props.index)}>Remove</button></th>
      <th><button onClick={()=>this.props.incrementItem(this.props.index)}>+</button>
      <button onClick={()=>this.props.decrementItem(this.props.index)}>-</button></th>

    </tr>
   )
  }
}

export default Row;