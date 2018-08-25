import React, { Component } from "react";

class Row extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props, "RO PROPS")
   return(
    <tr>
      <th> </th>
      <th>{this.props.item}</th>
      <th>{this.props.quantity}</th>
      <th>{this.props.price}</th>

    </tr>
   )
  }
}

export default Row;