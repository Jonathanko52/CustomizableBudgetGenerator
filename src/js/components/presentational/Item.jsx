import React from "react";

const Item = (props) => {
  
  console.log(props)
  
  return (
  <tbody>
  <tr>
    <td>Item Name: {props.Foam.Foam[0]}</td>
    <td>Quantity:</td>
    <td>Price:</td>
    <td>
      <button>Increase</button>
      <button>Decrease</button>
    </td>
    <td></td>
  </tr>
  </tbody>
)};

export default Item;