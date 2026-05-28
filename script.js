// =========================
// CREATE STARS
// =========================

for(let i=0;i<120;i++){

  const star=document.createElement('div');

  star.classList.add('star');

  star.style.left=Math.random()*100+'%';
  star.style.top=Math.random()*100+'%';

  star.style.animationDelay=
  Math.random()*3+'s';

  document.getElementById('stars')
  .appendChild(star);
}

// =========================
// CREATE FALLING PETALS
// =========================

function createPetal(){

  const petal=document.createElement('div');

  petal.classList.add('petal');

  petal.innerHTML='🌹';

  petal.style.left=
  Math.random()*100+'vw';

  petal.style.fontSize=
  (18+Math.random()*20)+'px';

  petal.style.animationDuration=
  (5+Math.random()*5)+'s';

  document.body.appendChild(petal);

  setTimeout(()=>{
    petal.remove();
  },10000);
}

setInterval(createPetal,300);

// =========================
// LOVE CURSOR TRAIL EFFECT
// =========================

document.addEventListener('mousemove',(e)=>{

  createLoveTrail(
    e.clientX,
    e.clientY
  );

});

function createLoveTrail(x,y){

  const symbols = [
    '💖',
    '💗',
    '✨',
    '❤️'
  ];

  const love =
  document.createElement('div');

  love.innerHTML =
  symbols[
    Math.floor(
      Math.random()*symbols.length
    )
  ];

  love.style.position='fixed';

  love.style.left=x+'px';
  love.style.top=y+'px';

  love.style.pointerEvents='none';

  love.style.zIndex='9999';

  love.style.userSelect='none';

  love.style.fontSize=
  (5 + Math.random()*18)+'px';

  love.style.transition=
  'transform 1.2s ease-out, opacity 1.2s ease-out';

  document.body.appendChild(love);

  setTimeout(()=>{

    const randomX =
    (Math.random()-0.5)*100;

    const randomRotate =
    (Math.random()-0.5)*220;

    love.style.transform =
    `translate(${randomX}px,-90px)
    scale(1.8)
    rotate(${randomRotate}deg)`;

    love.style.opacity='0';

  },10);

  setTimeout(()=>{
    love.remove();
  },1200);
}

// =========================
// TYPEWRITER MESSAGE
// =========================

const message=
`Out of all the moments life could have given me,
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

// =========================
// OPEN LETTER
// =========================

function openLetter(){

  document.getElementById('envelopeScreen')
  .style.display='none';

  document.getElementById('letterScreen')
  .style.display='flex';

  resetLetter();

  typeMessage();
}

// =========================
// TYPE MESSAGE
// =========================

function typeMessage(){

  if(index < message.length){

    document.getElementById('typedText')
    .innerHTML += message.charAt(index);

    index++;

    setTimeout(typeMessage,45);

  }else{

    document.getElementById('buttons')
    .classList.add('show');
  }
}

// =========================
// RESET LETTER
// =========================

function resetLetter(){

  index = 0;

  document.getElementById('typedText')
  .innerHTML='';

  document.getElementById('buttons')
  .classList.remove('show');
}

// =========================
// BACK HOME
// =========================

function goHome(){

  document.getElementById('letterScreen')
  .style.display='none';

  document.getElementById('celebration')
  .style.display='none';

  document.getElementById('envelopeScreen')
  .style.display='flex';
}

// =========================
// BACK TO LETTER
// =========================

function backToLetter(){

  document.getElementById('celebration')
  .style.display='none';

  document.getElementById('letterScreen')
  .style.display='flex';
}

// =========================
// MAGNETIC NO BUTTON
// =========================

window.addEventListener('load',()=>{

  const noBtn =
  document.getElementById('noBtn');

  const funnyText =
  document.getElementById('funnyText');

  document.addEventListener('mousemove',(e)=>{

    const buttons =
    document.getElementById('buttons');

    if(!buttons.classList.contains('show'))
    return;

    const rect =
    noBtn.getBoundingClientRect();

    const btnX =
    rect.left + rect.width/2;

    const btnY =
    rect.top + rect.height/2;

    const distanceX =
    e.clientX - btnX;

    const distanceY =
    e.clientY - btnY;

    const distance =
    Math.sqrt(
      distanceX * distanceX +
      distanceY * distanceY
    );

    if(distance < 140){

      const angle =
      Math.atan2(distanceY,distanceX);

      const moveX =
      Math.cos(angle) * 80;

      const moveY =
      Math.sin(angle) * 80;

      noBtn.style.transform =
      `translate(${-moveX}px, ${-moveY}px)`;

      funnyText.innerHTML =
      "Nice try Shehana 😭❤️";

    }else{

      noBtn.style.transform =
      `translate(0px,0px)`;

      funnyText.innerHTML = "";
    }

  });

});

// =========================
// YES BUTTON
// =========================

function sayYes(){

  // HIDE LETTER

  const letterScreen =
  document.getElementById('letterScreen');

  letterScreen.style.display='none';

  // SHOW CELEBRATION

  const celebration =
  document.getElementById('celebration');

  celebration.style.display='flex';

  // PLAY MUSIC

  const song =
  document.getElementById('loveSong');

  if(song){

    song.currentTime = 0;

    const playPromise = song.play();

    if(playPromise !== undefined){

      playPromise
      .then(() => {

        console.log("Music playing");

      })
      .catch(error => {

        console.log("Playback failed:", error);

      });
    }
  }

  // EFFECTS

  createHearts();

  launchFireworks();
}
// =========================
// HEART EXPLOSION
// =========================

function createHearts(){

  for(let i=0;i<90;i++){

    const heart =
    document.createElement('div');

    heart.classList.add('heart');

    heart.innerHTML='💖';

    heart.style.left=
    Math.random()*100+'vw';

    heart.style.top='100vh';

    heart.style.position='fixed';

    heart.style.fontSize=
    (20+Math.random()*40)+'px';

    heart.style.animation=
    'explode 4s linear forwards';

    document.body.appendChild(heart);

    setTimeout(()=>{
      heart.remove();
    },6000);
  }
}

// =========================
// FIREWORKS
// =========================

function launchFireworks(){

  for(let i=0;i<60;i++){

    setTimeout(()=>{

      const spark =
      document.createElement('div');

      spark.classList.add('heart');

      spark.innerHTML='✨';

      spark.style.left=
      Math.random()*100+'vw';

      spark.style.top=
      Math.random()*100+'vh';

      spark.style.position='fixed';

      spark.style.fontSize=
      (10+Math.random()*25)+'px';

      spark.style.animation=
      'explode 3s linear forwards';

      document.body.appendChild(spark);

      setTimeout(()=>{
        spark.remove();
      },3000);

    },i*120);

  }
}

// =========================
// YES BUTTON CLICK EVENT
// =========================

window.addEventListener('load',()=>{

  const yesBtn =
  document.getElementById('yesBtn');

  if(yesBtn){

    yesBtn.addEventListener('click',sayYes);
  }

});
