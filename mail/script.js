const info = document.getElementById("msg");
const mail = prompt("Qual è la tua email?");
// const myMail = "jacopo@gmail.com";
const list = ["jacopo@gmail.com", "jaco@gmail.com" , "gino@gmail.com", "marco@gmail.com"];

let emailList = false;
for(let i = 0; i < list.length; i++) {
    
    if (mail === list[i]) {
        emailList = true;
    }
    
}

if (emailList === true) {
  console.log('Email trovata');
} else  {
  console.log('Email non trovata');
};
