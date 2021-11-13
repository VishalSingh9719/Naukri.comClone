function signup(){

      var email=document.getElementById("email").value;
   var password= document.getElementById("psw").value;
                  
     if(password.length<6){
          alert("Please Fill password greater than 6 character")
    }
      else{
     
       alert("Credentials Submitted, Kindly Login!")
           }
    localStorage.setItem("email",email);
    localStorage.setItem("password",password)
       
            }