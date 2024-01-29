const buttonHamburger = document.getElementById('btn-hamburger');
const buttonClose = document.getElementById('btn-close');

buttonHamburger.addEventListener('click',()=>{
    document.querySelector('.nav__menu').style.display="block";
    document.querySelector('.nav__menu').style.zIndex="150";
});

buttonClose.addEventListener('click',()=>{
    document.querySelector('.nav__menu').style.display="none";
    document.querySelector('.nav__menu').style.zIndex="0";
});