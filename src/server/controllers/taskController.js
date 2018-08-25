const tableModel = require('../models/TableModel.js')
const path = require('path');

module.exports = {
    //Creates a table to be places into MongoDB
  createTable:(req,res,next)=>{
      tableModel.create({
        itemName:[],
        quantity:[],
        costPerUnit:[],
        userId:0,
    },(err)=>{
        if(err){
            res.status(500).sendFile(path.join(__dirname + './../../views/index.html'))
        } else {
            res.status(200).sendFile(path.join(__dirname + './../../views/index.html'))
        }
    })
    next()
  },

    //retrieves Table corresponding to userID from mongDB
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

    //saves table form react app state to mongodb
    updateTable: (req,res,next)=>{
        console.log("UPDATE REQ",req.body)
        tableModel.findOneAndUpdate({userID:req.body},{
            itemName:req.body.itemNameArr,
            quantity:req.body.quantityArr,
            costperunit:req.body.costPerUnitArr,
        },
        (err)=>{
            if(err){
                console.log('UPDATE FAILED', err)
            } 
            console.log("SUCCEEDED. WHAT IS THIS", data)   


        })
    },

  deleteTable:(req,res)=>{

  },

  checkTable:(req,res)=>{

  }

}