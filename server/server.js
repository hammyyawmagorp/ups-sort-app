require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require ('path');
const { getPD } = require ('./controller.js'); 


app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get('/getPD', getPD);

app.listen(4400, () => console.log (`Server running on port 4400`));
