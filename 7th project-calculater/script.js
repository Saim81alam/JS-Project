let input = document.getElementById("inputBox");
let buttons= document.querySelectorAll(".numbtn");
let eqbtn = document.getElementById("eqbtn");
let delbtn = document.getElementById("del");
let allClear = document.getElementById("ac");



let arr = Array.from(buttons);

arr.forEach(button=>{
  button.addEventListener("click",()=>{
    let result = button.innerHTML;
    input.value += result;
  });
});

eqbtn.addEventListener("click",()=>{
  input.value = eval(input.value);
});

delbtn.addEventListener("click",()=>{
  input.value = input.value.substring(0,input.value.length-1);
});

allClear.addEventListener("click",()=>{
  input.value = '';
});
