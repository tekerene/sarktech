const colorBtn = document.querySelector(".colorbtn");
const bodyBcg = document.querySelector('body');

const color = ['yellow','red','green','black','pink'];

colorBtn.addEventListener('click', changeColor);
    function changeColor(){
       // bodyBcg.style.backgroundColor = color[1];
       let random = Math.floor(Math.random() *color.length);
       bodyBcg.style.backgroundColor = color[random];
    }
