const questionContainer = document.querySelectorAll('.question-container');
const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
const arrows = document.querySelectorAll('.question-img i');

let arrSwitches = [];

for(let i=0; i<questionContainer.length; i++){
    arrSwitches.push(false);
}

for(let i=0; i<questionContainer.length; i++){
    questionContainer[i].addEventListener('click',()=>{
        (arrSwitches[i]===false)
            ? showText(i)
            : hideText(i)
    });
}



const showText = (number)=>{
    questionContainer[number].style.height="150px";
    arrows[number].style.transform="rotate(180deg)";
    arrows[number].style.color="var(--softRed)";
    arrSwitches[number]=true;
}

const hideText = (number)=>{
    questionContainer[number].style.height="36px";
    arrows[number].style.transform="rotate(0)";
    arrows[number].style.color="var(--softBlue)";
    arrSwitches[number]=false;
}

console.log(arrSwitches);
