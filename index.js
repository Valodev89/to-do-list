const textTodo = document.getElementById('texttodo');
const form = document.querySelector('form');
let listing = document.getElementById('list');
let oeildroit = document.getElementById("oeildroit");
let text = document.getElementById("text");
let interval;
const oeil = document.querySelector(".oeil");

oeil.style.backgroundColor = "black";
oeildroit.style.backgroundColor = "black";
oeil.style.borderColor = "black";
oeildroit.style.borderColor = "black";

function animation(){
    oeildroit.classList.toggle('oeildroit');
    oeil.style.backgroundColor = "black";
    oeildroit.style.backgroundColor = "black";
    oeil.style.borderColor = "black";
    oeildroit.style.borderColor = "black";
};



function storage(){
    window.localStorage.listtodo = listing.innerHTML;
};

function restore(){
    if(listing.innerHTML === "undefined"){
        listing.innerHTML = "";
    } else {
    listing.innerHTML = window.localStorage.listtodo;
    };
};

window.addEventListener("load", () =>{
    restore();
})

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    listing.innerHTML += `<li>${textTodo.value}</li>`;
    storage();
    textTodo.value = "";
});


listing.addEventListener("click", (e) => {
    if (e.target.classList.contains("checked")){
        e.target.remove();
         clearInterval(interval);
         interval = setInterval(animation,1000);
    } else {
        e.target.classList.add('checked');
}
});


