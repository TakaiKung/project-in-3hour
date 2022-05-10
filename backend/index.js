const express = require('express')
const mongoose = require('mongoose')
const configs = require('./configs/database.js');
const facultyModel = require('./model/model.js');
const app = express();
const cors = require('cors')
const port = 3000;

mongoose.Promise = global.Promise 
mongoose.connect(configs.mongouri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use(cors())
app.use(express.json())

app.get('/api/falcuties', async(req, res) => {
    try {
       const result = await facultyModel.find()
       res.status(200).send(result)
    }
    catch (err) {
        res.status(500).json({ msg : "something went wrong" })
    }
})

app.listen(port, () => {
    console.log(`run on port ${ port }`)
})
