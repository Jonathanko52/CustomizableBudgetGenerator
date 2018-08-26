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

    </tr>
   )
  }
}

export default Row;