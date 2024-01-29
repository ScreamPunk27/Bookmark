const button1 = document.querySelector('.li-1');
const button2 = document.querySelector('.li-2');
const button3 = document.querySelector('.li-3');

const feature1 = document.querySelector('.feature1');
const feature2 = document.querySelector('.feature2');
const feature3 = document.querySelector('.feature3');


const decideAction = ()=>{
    button1.addEventListener('click',(e)=>{
        e.preventDefault();
        
        button1.style.borderBottom="solid 4px var(--softRed)";
        button2.style.borderBottom="solid 1px var(--grayishBlue)";
        button3.style.borderBottom="solid 1px var(--grayishBlue)";

        if(screen.width>=700){
            feature1.style.display="flex";
            feature2.style.display="none";
            feature3.style.display="none";
        }else{
            feature1.style.display="block";
            feature2.style.display="none";
            feature3.style.display="none";
        }
    })

    button2.addEventListener('click',(e)=>{
        e.preventDefault();

        button1.style.borderBottom="solid 1px var(--grayishBlue)";
        button2.style.borderBottom="solid 4px var(--softRed)";
        button3.style.borderBottom="solid 1px var(--grayishBlue)";

        if(screen.width>=700){
            feature1.style.display="none";
            feature2.style.display="flex";
            feature3.style.display="none";
        }else{
            feature1.style.display="none";
            feature2.style.display="block";
            feature3.style.display="none";
        }
    })

    button3.addEventListener('click',(e)=>{
        e.preventDefault();

        button1.style.borderBottom="solid 1px var(--grayishBlue)";
        button2.style.borderBottom="solid 1px var(--grayishBlue)";
        button3.style.borderBottom="solid 4px var(--softRed)";

        if(screen.width>=700){
            feature1.style.display="none";
            feature2.style.display="none";
            feature3.style.display="flex";
        }else{
            feature1.style.display="none";
            feature2.style.display="none";
            feature3.style.display="block";
        }
    })
}

const border = ()=>{
    button1.style.borderBottom="solid 4px var(--softRed)";
}

decideAction();
border();