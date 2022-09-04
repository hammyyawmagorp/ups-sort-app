require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require ('path');
const { SERVER_PORT } = process.env
const { getPD } = require ('./controller.js'); 


app.use(express.json());
app.use(express.static('public'));
app.use(cors());

app.get('/getPD', getPD);