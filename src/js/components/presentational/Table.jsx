import React, { Component } from "react";
import Row from './Row.jsx'

class Table extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    if(this.props.itemNameArr !== null){
      //converts data in props (in arrays) into lines for rendering onto table
      let rowArr = [];
      
      this.props.itemNameArr.forEach((cur,ind)=>{
        rowArr.push(<Row item={this.props.itemNameArr[ind]} 
                        quantity={this.props.quantityArr[ind]} 
                        price={this.props.costPerUnitArr[ind]} 
                        index={ind}
                        removeItem={this.props.removeItem}
                        incrementItem={this.props.incrementItem}
                        decrementItem={this.props.decrementItem}
        />)
      });
      
      return(
        
        <table className="MainTable">
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove Item</th>
              <th>Add/Subract Item</th>
            </tr>
            {rowArr}
          </thead>
        </table>
      )
    } else {
      return(
        <div>No Table Loaded</div>
      )
    }

  }
}

export default Table;