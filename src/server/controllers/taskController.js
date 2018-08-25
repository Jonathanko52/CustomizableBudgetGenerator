const tableModel = require('../models/TableModel.js')
const path = require('path');

module.exports = {
  createTable:(req,res,next)=>{
      tableModel.create({
        itemName:['L200 1/2 BLACK/WHITE'],
        quantity:[0],
        costPerUnit:[16.50],
        userId:0,
    },(err,createdIt)=>{
        if(err){
            res.status(500).sendFile(path.join(__dirname + './../../views/index.html'))
        } else {
            res.status(200).sendFile(path.join(__dirname + './../../views/index.html'))
        }
    })
    next()
  },

  retrieveTable:(req,res,next)=>{
    tableModel.find({userId:req.body},(err, data)=>{
        if(err){
          res.end()
        } else {
            let returnData = [data[0].itemName, data[0].quantity, data[0].costperunit]
            console.log('ITEMNAME',data[0].itemName)
            res.status(200).json(returnData)
        }
    })
  },

  updateItem: (req,res)=>{

  },

  deleteTable:(req,res)=>{

  },

  checkTable:(req,res)=>{

  }

}