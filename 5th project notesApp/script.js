const notesContainer = document.querySelector('.notes-container');
const createbtn = document.querySelector('.btn');
let note = document.querySelectorAll('.input-box');

createbtn.addEventListener('click',()=>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.setAttribute("class","input-box");
    inputBox.setAttribute("contenteditable","true")
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})
notesContainer.addEventListener('click',(e)=>{
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
    }
})