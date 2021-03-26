const express = require('express');
const bodyParser = require('body-parser');
const product = require ('./router/product.router');
const mongoose = require('mongoose');

const app = express();

mongoose.connect("mongodb://localhost/productsDb",{ useNewUrlParser: true , useUnifiedTopology: true})
.then(()=>{
    console.log('connected');
}).catch(err=>{
    console.log('Disconnected',err);
    process.exit();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/products', product);

app.listen(3000,()=>{
    console.log('Connected');
});