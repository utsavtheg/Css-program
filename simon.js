let gameSeq = [];
let userSeq = [];

let btns = ["red","yellow","pink","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function(){
  if(!started){
    started = true;
    levelUp();
  }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(()=>{
    btn.classList.remove("flash");
  },300);
}

function userFlash(btn){
  btn.classList.add("userflash");
  setTimeout(()=>{
    btn.classList.remove("userflash");
  },300);
}

function levelUp(){
  userSeq = [];
  level++;

  h2.innerText = "Level " + level;

  let randIdx = Math.floor(Math.random()*btns.length);
  let randColor = btns[randIdx];

  gameSeq.push(randColor);

  let randBtn = document.querySelector("." + randColor);
  gameFlash(randBtn);

  console.log("GAME SEQ:",gameSeq);
}

function checkAns(idx){

  if(userSeq[idx] === gameSeq[idx]){

    if(userSeq.length === gameSeq.length){
      setTimeout(levelUp,1000);
    }

  } else{

    h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to start`;

    document.body.style.backgroundColor="red";
    setTimeout(()=>{document.body.style.backgroundColor="white";},200);

    reset();
  }
}

function btnPress(){

  let btn = this;

  userFlash(btn);

  let userColor = btn.dataset.color;

  userSeq.push(userColor);

  console.log("USER SEQ:",userSeq);

  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");

for(let btn of allBtns){
  btn.addEventListener("click",btnPress);
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
}