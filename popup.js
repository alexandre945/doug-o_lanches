
setTimeout(function(){
    var a = document.getElementById("popup");
    a.style="display:none";
    }, 4000);
const date = new Date();

const day = String(date.getDate()).padStart(2 ,'0');
const month = String(date.getMonth() + 1).padStart(2, '0');
const year = String(date.getFullYear());
 
const fullDate = `${day}/${month}/${year}`;

const title = document.getElementById('title');
 
 title.innerText = fullDate;

//  poup-2

const popup = document.querySelector('.popup-warep')
const buttonclose = document.querySelector('.buttonclose')
const button = document.querySelector('.button')
// console.log('popup');
buttonclose.addEventListener('click', () => {
    // console.log('buttonclose');
    popup.style.display = 'block'
})

button.addEventListener('click', ()=> {
    popup.style.display = 'none'
})
// pegar id


