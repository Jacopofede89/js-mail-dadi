// const mail = prompt("Qual è la tua email?");
const myMail = 'jacopo@gmail.com';
const list = ['jacopo@gmail.com', 'fede@gmail.com' , 'gino@gmail.com', 'marco@gmail.com'];

let emailList = false;
for(let i=0; i < list.length; i++) {
    console.log(i); 
    if (myMail === list) {
        emailList = true;
    }console.log(list);
}

if (emailList === true) {
  console.log('Email trovata');
} else {
  console.log('Email non trovata');
}
