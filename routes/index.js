var express = require('express');
var router = express.Router();
var flash = require('connect-flash');
let db={
  email:"abc@gmail.com",
  pwd:123456,
name:"Afsal Abdurahmnan KP"
}
var db_products=[{
  name:"samsung",
  image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/7/r/-original-imagmg6gyxbn4md9.jpeg?q=90&crop=false",
  descri:"50MP + 10MP + 12MP | 12MP Front Camera3900 mAh Lithium Ion Battery"
  
},
{
  name:"samsung",
  image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/7/r/-original-imagmg6gyxbn4md9.jpeg?q=90&crop=false",
  descri:"50MP + 10MP + 12MP | 12MP Front Camera3900 mAh Lithium Ion Battery"
  
},
{
  name:"samsung",
  image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/7/r/-original-imagmg6gyxbn4md9.jpeg?q=90&crop=false",
  descri:"50MP + 10MP + 12MP | 12MP Front Camera3900 mAh Lithium Ion Battery"
  
},
{
  name:"samsung",
  image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/7/r/-original-imagmg6gyxbn4md9.jpeg?q=90&crop=false",
  descri:"50MP + 10MP + 12MP | 12MP Front Camera3900 mAh Lithium Ion Battery"
  
},
{
  name:"samsung",
  image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/7/r/-original-imagmg6gyxbn4md9.jpeg?q=90&crop=false",
  descri:"50MP + 10MP + 12MP | 12MP Front Camera3900 mAh Lithium Ion Battery"
  
},
{
  name:"samsung",
  image:"https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/7/r/-original-imagmg6gyxbn4md9.jpeg?q=90&crop=false",
  descri:"50MP + 10MP + 12MP | 12MP Front Camera3900 mAh Lithium Ion Battery"
  
},
]

router.get('/', function(req, res, next) {
  
  if(req.session.LoggedIn){
    res.render("home",{products:db_products,db:db})
  }
  res.render('login');
});
router.post('/log',((req,res)=>{
  
  console.log(req.body)
  



  if(req.body.email+req.body.password==db.email+db.pwd){
    req.session.LoggedIn=true
    req.session.log=req.body.emial;
    res.render("home",{products:db_products,db:db})
  }
  else if(req.body.email==""&&req.body.password==""){
    res.render('login',{message:"please enter email and password"})
  }
  else if(req.body.email ==""){ 
    res.render('login',{message:"please eneter the email"})
  }
  else if(req.body.password==""){
    res.render('login',{message:"please enter the password"})
  }
  
  else{
    res.render('login',{message:"invalid user email  and password"})
  }
}))
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect("/")
})
module.exports = router;
