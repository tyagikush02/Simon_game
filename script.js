let userSeq=[];
let compSeq=[];
let start=false;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let body=document.querySelector("body");
let btns=["pink","blue","orange","green"];
let score=0;
let startBtn=document.querySelector(".start");
startBtn.addEventListener("click",function(){
    if(start==false){
        start=true;
        levelUp();
    }
});
document.addEventListener("keypress",function(){
    if(start==false){
        start=true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300)
}
function color(){
    let a=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let c=Math.floor(Math.random()*256);
    let colour =`rgb(${a},${b},${c})`;
    changeColor(colour,1000);
}
let level=0;
function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;

    // random btns
    let idx=Math.floor(Math.random()*4);
    let randBtn=document.querySelector(`.${btns[idx]}`);
    compSeq.push(`${btns[idx]}`);
    btnFlash(randBtn);
}

function checkScore(i){
    if(compSeq[i]!=userSeq[i]){
        body.style.backgroundColor="red";
        setTimeout(()=> {body.style.backgroundColor="cornsilk"},500);
        score=Math.max(score,level);
        h2.innerText=`Game over ! Your score is ${level} \n Press any key to start `;
        h3.innerHTML=`highest score ${score}`;
        reset();
    }
    else if(userSeq.length == compSeq.length){
        setTimeout(levelUp,1000);
    }
}
let allBtns=document.querySelectorAll(".btn");

function btnPress(){
    btnFlash(this);
    userSeq.push(this.id);
    checkScore(userSeq.length-1);
}
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    start=false;
    userSeq=[];
    compSeq=[];
    level=0;
}
setInterval((color),1000);
h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            h1.style.color=color;
            h3.style.color=color;
            resolve("color is changed");
        },delay);
    });
}








