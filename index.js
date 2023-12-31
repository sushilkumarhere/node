const express =require('express');
const path = require('path');


const app = express();
const publicpath = path.join(__dirname,'public');
app.use(express.static(publicpath));
app.set('view engine','ejs');
const reqfilter = (req,resp,next)=>{
    //console.log('reqFilter');
    if(!req.query.age)
    {
        resp.send("please provide your age first::")
    }
    else if(req.query.age > 10)
    {
        resp.send("You can not access this site:")
    }
    else{
        next();

    }
   
}

app.use(reqfilter)

app.get('',(req,resp)=>{
    resp.sendFile('${publicpath}/index.html')
})

app.get('/about',(req,resp)=>{
    resp.sendFile('${publicpath}/about.html')
})
app.get('/profile',(req,resp)=>
{
    const user = { name:'Sushil sharma',email : 'sushilkumar.here@gmail.com' }
    resp.render('profile',{user});
})

app.listen(5000);