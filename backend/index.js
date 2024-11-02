const express = require('express')
const Connection = require("./Connection/Connection") 
const router = require("./Routes/index.route")
const cors = require("cors")
const app = express();
app.use(express.json());
Connection();
app.use(cors());
app.use(router);

const port = 5000;

app.listen(port, () => {
    console.log(`App is Running on Port ${port}`)
})