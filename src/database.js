const mongoose = require('mongoose')
/*require("dotenv").config()*/

const {MONGODB_DATABASE} = process.env
const MONGODB_URI = `mongodb://127.0.0.1:27017/${MONGODB_DATABASE}`
/*const MONGODB_URI = `mongodb://127.0.0.1:27017/ecommerce`*/

mongoose.connect(MONGODB_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db=>console.log("database conectada"))
    .catch(err=>console.log(err))