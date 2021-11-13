function login(){
      
       
    var mail = document.getElementById("email1").value;
    var security = document.getElementById("psw1").value;
    console.log(mail)
    console.log(security)
   
    let rs = localStorage.getItem("email")
    let ds=  localStorage.getItem("password")
    if(rs==mail && ds==security){
        
        window.location.href="index.html"
    }
}
let btn=document.getElementById("login_btn")
btn.addEventListener("click",login)