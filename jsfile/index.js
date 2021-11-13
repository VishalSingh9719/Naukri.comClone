
 
 function login(){
     window.location.href="login.html"
 }
 function genpact_homepg(){
     window.location.href="genpacthomepage.html"
 }
 function registration(){
     window.location.href="user_register.html";
 }


  let div1=document.getElementById("drop_down1");
  let div2=document.getElementById("drop_down2");
  let div3=document.getElementById("drop_down3");
  let div4=document.getElementById("drop_down4");
  let content_div=document.getElementById("content_div");
  
 function show_div1(){
    
    // div3.style.display="none"
  // div4.style.display="none"
    div2.style.display="none"
    div1.style.display="block"
   
   
    content_div.append(div1);
 }
 let elem1=document.getElementById("all_job");
 elem1.addEventListener("click",show_div1)
 function show_div1(){
    
   // div3.style.display="none"
  //div4.style.display="none"
   //div2.style.display="none"
   div1.style.display="block"
   let content_div=document.getElementById("content_div");
   content_div.innerHTML=null;
   content_div.append(div1);
}
show_div1();

 function show_div2(){
     content_div.innerHTML=null;
   div1.style.display="none"
   div3.style.display="none"
   //div4.style.display="none"
    div2.style.display="block"
    content_div.innerHTML=null;
   
   content_div.append(div2);
   
 }
 
 //onclick="show_div2()"
 let elem2=document.getElementById("IT_job");
 elem2.addEventListener("click",show_div2)

 function show_div3(){
     div1.style.display="none"
   div4.style.display="none"
    div2.style.display="none"
    div3.style.display="block"
   
    content_div.innerHTML=null;
   content_div.append(div3);
    div3.style.display="block"
 }
 let elem3=document.getElementById("man_job");
 elem3.addEventListener("click",show_div3)

 function show_div4(){
     div1.style.display="none"
   div3.style.display="none"
    div2.style.display="none"
    div4.style.display="block"
   
    content_div.innerHTML="";
    content_div.append(div4);
 }
 let elem4=document.getElementById("service_job");
 elem4.addEventListener("click",show_div4);


 let div5=document.getElementById("drown_drop1");
 
  let div6=document.getElementById("drown_drop2");
  let div7=document.getElementById("drown_drop3");
  let div8=document.getElementById("drown_drop4");
  let content_gallery_div=document.getElementById("content_gallery_div");


 function open_div5(){
   
    // div6.style.display="none"
   //div7.style.display="none"
   // div8.style.display="none"
    div5.style.display="block"
    let content_gallery_div=document.getElementById("content_gallery_div");
  
    content_gallery_div.append(div5);
 }
 open_div5();

 function open_div5(){
   
   // div6.style.display="none"
  //div7.style.display="none"
  // div8.style.display="none"
   div5.style.display="block"
   let content_gallery_div=document.getElementById("content_gallery_div");
   content_gallery_div.innerHTML=" ";
   content_gallery_div.append(div5);
}

let elem5=document.getElementById("all_job1");
 elem5.addEventListener("click",open_div5) 


 function open_div6(){
    console.log(123)
   div5.style.display="none"
   div7.style.display="none"
   div8.style.display="none"
    div6.style.display="block"
   console.log( content_gallery_div)
    content_gallery_div.innerHTML=" ";
    content_gallery_div.append(div6);
   
 }
 
 //onclick="show_div2()"
 let elem6=document.getElementById("IT_job1");
 elem6.addEventListener("click",open_div6)

 function open_div7(){
     div5.style.display="none"
   div6.style.display="none"
    div8.style.display="none"
    div7.style.display="block"
   
    content_gallery_div.innerHTML=" ";
    content_gallery_div.append(div7);
   
 }
 let elem7=document.getElementById("man_job1");
 elem7.addEventListener("click",open_div7)

 function open_div8(){
     div5.style.display="none"
   div6.style.display="none"
    div7.style.display="none"
    div8.style.display="block"
   
    content_gallery_div.innerHTML="";
    content_gallery_div.append(div8);
 }
 let elem8=document.getElementById("service_job1");
 elem8.addEventListener("click",open_div8)
 //a1.addEventListener("click",show_div);
 



