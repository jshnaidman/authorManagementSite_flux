require('babel-register')({
    stage: 2,
    presets: ["env", "stage-2"]
});

const express = require('express');
const path = require('path');
const fallback = require('express-history-api-fallback');

const root = path.join(__dirname ,'../client/dist');
const js = '/home/jacob/workspace/webdev/react_flux/dist/scripts/bundle.js';
const index = path.join(__dirname,'client','dist','index.html');

const app = express();
const router = express.Router();


app.use(express.static(root))
//app.use(fallback('index.html', { root: root }))

app.get('*', (req,res) => {
	res.sendFile(path.resolve(root, 'index.html'));
});

app.listen(9005);
console.log('Listening on port 9005');