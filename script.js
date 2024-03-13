var userName = document.querySelector("#user") 
var email = document.querySelector("#email") 
var pass = document.querySelector("#pass") 
var Info = document.querySelector(".info") 
var tel = document.querySelector("#tel") 

const userRegx = /[a-zA-Z\d]{8,20}[@$]?/g;
const emailRegx = /^([\w\d-]+)@([a-z\d-]+)\.([a-z]{2,8})([\.a-z]{2,8})?$/g;
const passRegx = /^([A-Z]{1})[\w\d\$@-_]{6,100}$/g;
const telRegx = /^[0-9]{11}$/g;

userName.addEventListener("keyup", () =>{
    if (userName.value.match(userRegx)){
        userName.style.border = "2px solid green";
        Info.textContent = "";
    }else{
        userName.style.border = "2px solid red";
        Info.innerHTML = "username must be upto 8";
    }
});

email.addEventListener("keyup", () =>{
    if (email.value.match(emailRegx)){
        email.style.border = "2px solid green";
        Info.textContent = "";
    }else{
        email.style.border = "2px solid red";
        Info.innerHTML = "enter valid email address";
    }
});

pass.addEventListener("keyup", () =>{
    if (pass.value.match(passRegx)){
        pass.style.border = "2px solid green";
        Info.textContent = "";
    }else{
        pass.style.border = "2px solid red";
        Info.innerHTML = "password must start with an uppercase";
    }
});

tel.addEventListener("keyup", () =>{
    if (tel.value.match(telRegx)){
        tel.style.border = "2px solid green";
        Info.textContent = "";
    }else{
        tel.style.border = "2px solid red";
        Info.innerHTML = " enter valid telephone number";
    }
});