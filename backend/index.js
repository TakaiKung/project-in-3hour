const express = require('express')
const mongoose = require('mongoose')
const configs = require('./configs/database.js');
const facultyModel = require('./model/model.js');
const app = express();
const cors = require('cors')
const port = 5000;

const { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');
const { MeterProvider }  = require('@opentelemetry/sdk-metrics-base');

// Add your port and startServer to the Prometheus options
const options = {port: 9400, startServer: true};
const exporter = new PrometheusExporter(options);

// Register the exporter
const meter = new MeterProvider({
  exporter,
  interval: 1000,
}).getMeter('demo-prometheus');

// Now, start recording data
const counter = meter.createCounter('count_status', {
  description: 'Count Status Api'
});


mongoose.Promise = global.Promise 
mongoose.connect(configs.mongouri, {
    useNewUrlParser : true,
    useUnifiedTopology : true
})

app.use(cors())
app.use(express.json())

app.get('/api/falcuties', async(req, res) => {
    counter.add(1, { service_name: "service-01" });
    counter.add(1, { service_name: "service-01", status: "success", path: "/api/falcuties" });
    counter.add(1, { service_name: "service-01", status: "failure", path: "/api/falcuties" });
    counter.add(1, { service_name: "service-01", status: "data not found", path: "/api/falcuties" });
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
