var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = 
    "linear-gradient(to right, " 
    +color1.value 
    + ", " 
    + color2.value 
    + ")";
}

color1.addEventListener("input", setGradient); 
color2.addEventListener("input", setGradient); 


var database =[];
var userinfo ={};



function pushData(userinfo)
{
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    database.push(userinfo);
    
    for(i = 0; i< database.length; i++)
    { 
        userinfo.user = email;
        userinfo.password = password;      
    }
}


var userEmail = document.getElementById('lEmail');
var userPassword = document.getElementById('lPassword');

const getValue =function()
 {
    userEmail = document.getElementById('lEmail').value;
    userPassword = document.getElementById('lPassword').value; 

    login(userEmail,userPassword);
    
 }

function isValid(email,password){
    
  
    for(var i =0; i<database.length; i++){
        if(database[i].user===email && database[i].password===password){
            window.location.href="myContent.html"
        return true;
        }
        
    }
    return false;
}   

function login(email,password)
{
    
    console.log(isValid(email,password));
    if(isValid(email,password)){
       console.log(email);
    }else{
        alert("Sorry incorrect email and password");
    }
    
}

    

   

