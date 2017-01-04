const express = require('express')
const path = require('path');
const port = (process.env.PORT || 8080);
let app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port)
