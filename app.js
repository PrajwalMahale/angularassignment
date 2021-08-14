const express = require('express')
const mongoose = require('mongoose')

const app = express();

mongoose.connect("mongodb+srv://prajwal:vpq6ImecIsPE5IOc@cluster0.yesnm.mongodb.net/test?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connected to database")
  })
  .catch(() => {
    console.log("connection failed!")
  })
app.get('/api/menu', (req,res,next) => {

const menu = [
  {
    "id":1,
    "name":"samosa",
    "price":50
  },

  {
    "id":2,
    "name":"poha",
    "price":30
  }
];
res.status(200).json({
  error:false,
  menu : menu
});
});

// app.use("/api/post", (req,res,next) => {
//   const item = {
//     name:'Paneer tikka',
//     price: 100,
//   }
// })

module.exports = app;
