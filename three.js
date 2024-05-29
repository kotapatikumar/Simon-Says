
let userSeq=[];
let gameSeq=[];
let level=0;
let started=false;
let allColors=["one","two","three","four"];

let body=document.querySelector("body");
let h2=document.querySelector("h2");


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("key was pressed");
        started=true;
        levelUp();
        
        
        console.log(gameSeq);
    }
})


function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function user(ans){
    ans.classList.add("user");
    setTimeout(function(){
        ans.classList.remove("user");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randCo=allColors[randIdx];
    let randBtn=document.querySelector(`.${randCo}`);
    gameSeq.push(randCo);
    flash(randBtn);

}

function check(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
            console.log("same value");
            setTimeout(function(){
                levelUp();
            },1000);
        }
    }else{
        h2.innerHTML=`GAME OVER! Your score was <b>${level}</b>.<br>Press any key to restart`;
        body.style.backgroundColor="red";
        setTimeout(function(){
            body.style.backgroundColor="white";
        },100);
        restart();
        
    }
}

function btnPress(){
    let final=this;
    user(final);
    let btn=final.getAttribute("id");
    userSeq.push(btn);
    console.log(userSeq);


    check(userSeq.length-1);

}

let userAll=document.querySelectorAll(".btn");
for(one of userAll){
    one.addEventListener("click",btnPress);
}

function restart(){
    userSeq=[];
    gameSeq=[];
    level=0;
    started=false;
}

