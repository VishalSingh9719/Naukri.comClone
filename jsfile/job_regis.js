function myFunction(){
    var x=document.index.in.value;
    console.log(x)
    if(x=="America"){
    document.getElementById('state').innerHTML="  <option>Select a state</option> <option>California</option><option>Florida</option><option>Hawaii</option><option>Maine</option>";
    }
    if(x=="China"){
    document.getElementById('state').innerHTML=" <option>Select a state</option>   <option>Shicago</option><option>Shanghai</option><option>Gansu</option><option>Situan</option>";
    }
    }
    function myFunction1(){
        var x=document.index1.edu.value;
        let div=document.getElementById("major_div");
        div.style.display="block"
        let div2=document.getElementById("university_div");
        div2.style.display="block";
        let div1=document.getElementById(" form_input_field1")
        div1.append(div,div2)

    }
    function save_data(){
        window.location.href="registration_success_page.html";
    }