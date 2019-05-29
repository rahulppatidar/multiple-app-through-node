const express = require('express')
const path = require('path')
const port = 9000
const app = express()
app.use("/app2", express.static(path.join(__dirname, "app2/build")));
app.use("/",express.static(path.join(__dirname, "app1/build")));
app.listen(port, () => console.log(`listening on port ${port}!`))