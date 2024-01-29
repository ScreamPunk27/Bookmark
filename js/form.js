const input = document.getElementById('form-input');
const submit = document.getElementById('form-submit');
const msg = document.querySelector('.email-container__msg');

let exReg = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(exReg.test(input.value)){
        alert('Email is valid');
        input.style.border="2px solid transparent";
        input.style.backgroundImage="none";
        input.style.backgroundPosition="95% center";
        input.style.borderBottomRightRadius="5px";
        input.style.borderBottomLeftRadius="5px";
        input.style.boxShadow="0 2px 2px 2px rgba(0,0,0,.1)";
        msg.style.display="none";
    }else{
        input.style.border="2px solid var(--softRed)";
        input.style.backgroundImage="url('/images/icon-error.svg')";
        input.style.backgroundRepeat="no-repeat";
        input.style.backgroundPosition="95% center";
        input.style.borderBottomRightRadius="0px";
        input.style.borderBottomLeftRadius="0px";
        input.style.boxShadow="none";
        msg.style.display="block";
        msg.style.boxShadow="0 2px 2px 2px rgba(0,0,0,.1)";
    }
})