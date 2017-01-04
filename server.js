const express = require('express')
const path = require('path');
const port = (process.env.PORT || 8080);
let app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port)
