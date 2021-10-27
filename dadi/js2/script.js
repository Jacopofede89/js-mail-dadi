const user = document.getElementById("user");
const pc = document.getElementById("pc");
const btn = document.getElementById("btn");

// const rUser = 


const userA = Math.floor(Math.random()* 6) +1;
console.log(userA);
const pcA = Math.floor(Math.random()* 6) +1;
console.log(pcA);


btn.addEventListener("click",

function(){
if (userA > pcA){
    user.innerHTML= "Hai vinto"
}
else if (userA < pcA){
    user.innerHTML= "Hai perso"
}
else if (userA == pcA){
    user.innerHTML= "Hai pareggiato"
}
}
)



