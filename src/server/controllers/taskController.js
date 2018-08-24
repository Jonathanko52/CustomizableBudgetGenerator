const tableModel = require('../models/TableModel.js')

module.exports = {
  createTable:(req,res)=>{
      tableModel.create({
        itemName:['L200 1/2 BLACK/WHITE'],
        quantity:[0],
        costPerUnit:[16.50],
        userId:0,
    },(err,createdItem)=>{
        if(err){
            console.log("CREATE FAIL")
            res.status(500).sendFile(path.join(__dirname + './../../views/index.html'))
        } else {
            console.log("CREATE SUCCESS")
            res.status(200).sendFile(path.join(__dirname + './../../views/index.html'))
        }
    })
    next()
  },

  retrieveTable:(req,res)=>{

  },

  updateItem: (req,res)=>{

  },

  deleteTable:(req,res)=>{

  },

  checkTable:(req,res)=>{

  }

}