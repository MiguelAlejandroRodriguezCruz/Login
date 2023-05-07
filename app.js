
const express = require('express');
const hbs = require('hbs'); 
const bodyParser = require('body-parser'); 
const port = process.env.PORT || 80; 
const app = express();
app.set('view engine' , 'hbs');
hbs.registerPartials(__dirname + '/view/partials',()=>{});
 

app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended : true } ) );
app.use(bodyParser.json());

app.post('/dashboard',(req,res)=>{
    
    res.render('dashboard',{
        nombre :"Desiree Castañeda",
        email: "kami3haru@gmail.com"
    })
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(port,()=>{
    console.log('el servidor express esta ejecutandose en el puerto: ' + port);

})

