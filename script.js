for(let i=0;i<120;i++){
  const star=document.createElement('div');
  star.classList.add('star');
  star.style.left=Math.random()*100+'%';
  star.style.top=Math.random()*100+'%';
  document.getElementById('stars').appendChild(star);
}

function createPetal(){
  const petal=document.createElement('div');
  petal.classList.add('petal');
  petal.innerHTML='🌹';
  petal.style.left=Math.random()*100+'vw';
  petal.style.fontSize=(18+Math.random()*20)+'px';
  petal.style.animationDuration=(5+Math.random()*5)+'s';
  document.body.appendChild(petal);

  setTimeout(()=>{
    petal.remove();
  },10000);
}

setInterval(createPetal,300);

const message=`Out of all the moments life could have given me,
it gave me you.

Every laugh,
every late-night conversation,
every little moment with you
became my favorite memory.

And somewhere between all those moments,
you became my home.

So today,
I have only one question left to ask...

Will you marry me?

— Forever yours,
Sooraj ❤️`;

let index=0;

function openLetter(){
  document.getElementById('envelopeScreen').style.display='none';
  document.getElementById('letterScreen').style.display='flex';
  resetLetter();
  typeMessage();
}

function typeMessage(){
  if(index < message.length){
    document.getElementById('typedText').innerHTML += message.charAt(index);
    index++;
    setTimeout(typeMessage,45);
  }else{
    document.getElementById('buttons').classList.add('show');
  }
}

function resetLetter(){
  index=0;
  document.getElementById('typedText').innerHTML='';
  document.getElementById('buttons').classList.remove('show');
}

function goHome(){
  document.getElementById('letterScreen').style.display='none';
  document.getElementById('celebration').style.display='none';
  document.getElementById('envelopeScreen').style.display='flex';
}

function backToLetter(){
  document.getElementById('celebration').style.display='none';
  document.getElementById('letterScreen').style.display='flex';
}

const noBtn=document.getElementById('noBtn');
const funnyText=document.getElementById('funnyText');

document.addEventListener('mousemove',(e)=>{
  const buttons=document.getElementById('buttons');
  if(!buttons.classList.contains('show')) return;

  const rect=noBtn.getBoundingClientRect();
  const btnX=rect.left + rect.width/2;
  const btnY=rect.top + rect.height/2;

  const distanceX=e.clientX - btnX;
  const distanceY=e.clientY - btnY;

  const distance=Math.sqrt(distanceX*distanceX + distanceY*distanceY);

  if(distance < 140){
    const angle=Math.atan2(distanceY,distanceX);
    const moveX=Math.cos(angle)*80;
    const moveY=Math.sin(angle)*80;

    noBtn.style.transform=`translate(${-moveX}px,${-moveY}px)`;
    funnyText.innerHTML="Nice try Shehana 😭❤️";
  }else{
    noBtn.style.transform=`translate(0px,0px)`;
    funnyText.innerHTML="";
  }
});

async function sayYes(){
  document.getElementById('letterScreen').style.display='none';
  document.getElementById('celebration').style.display='flex';

  const song=document.getElementById('loveSong');

  try{
    await song.play();
  }catch(err){
    console.log(err);
  }

  createHearts();
}

function createHearts(){
  for(let i=0;i<90;i++){
    const heart=document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML='💖';
    heart.style.left=Math.random()*100+'vw';
    heart.style.top='100vh';
    heart.style.position='fixed';
    heart.style.fontSize=(20+Math.random()*40)+'px';

    document.body.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },6000);
  }
}
