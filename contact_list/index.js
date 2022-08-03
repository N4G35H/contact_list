const express = require('express');
const path = require('path');
const port=8000;
const app = express();
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());
app.use(express.static('assets'));



//midleware 1
//app.use(function(req,res,next){
 //   req.myName="Nagesh";
   // console.log('midleware 1 called');
//next();
//});

//midleware 2
//app.use(function(req, res, next){
//    console.log('My name from MW2', req.myName);
//    //console.log('midleware 2 called');
//    next();
//});

var contactList = [
    {
        name: "Nagesh",
        Phone: "9028469143"
    },
    {
        name:"Nagesh",
        Phone:"9028469143"
    },
    {
        name:"Nagesh",
        Phone:"9028469143"

    }
]

app.get('/practice', function(req, res){
    return res.render('practice',{title:"Let us play with ejs"});
});




app.get('/',function(req, res){
  
    return res.render('home', {title:"My Contats List",
      contact_list: contactList
       });
});

app.post('/create-contact',function(req, res){
    contactList.push({
        name:req.body.name,
        Phone:req.body.Phone
    });
    
    return res.redirect('/');
    
});


app.get('/delete-contact/:Phone',function(req,res){
    console.log(req.query);
    let Phone =req.query.Phone;

    let contactIndex = contactList.findIndex(contact => contact.Phone == Phone);

    if(contactIndex != -1){
        contactList.splice(contactIndex, 1);
    }

    return res.redirect('back');
});











app.listen(port, function(err){
    if(err){console.log('server error', err);}
    console.log('Yuup my server is running ', port);
});