const parser = require ("body-parser");
const express = require ('express');
const adminRouter = require ("./router/admin");
const shopRouter = require ("./router/shop");
const app = express();
const path = require("path");


app.use(parser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(shopRouter);
app.use('/admin',adminRouter);

app.use((req,res,next) =>{
  res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(4000);