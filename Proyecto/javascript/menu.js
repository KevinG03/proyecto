const menuInicial = document.querySelector('.menu');
const menuFinal = document.querySelector('.menu-navegation');

console.log(menuInicial);
console.log(menuFinal);

menuInicial.addEventListener('click', ()=>{
    menuFinal.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(menuFinal.classList.contains('spread') && e.target != menuFinal && e.target != menuInicial){
        menuFinal.classList.toggle("spread")
    }
})