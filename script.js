const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const btnnew = document.querySelector('.btn--new');
const btnhold = document.querySelector('.btn--hold');
const currentEl0 = document.querySelector('#current--0');
const currentEl1 = document.querySelector('#current--1');

const switchplayer= function(){
  document.querySelector(`.player--${activeplayer}`).style.backgroundColor='rgba(244, 244, 244, 0.3)';
    currentscore = 0;
    document.getElementById(`current--${activeplayer}`).textContent = currentscore;
    activeplayer = activeplayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activeplayer}`).style.backgroundColor='rgba(244, 244, 244, 0.9)';
}

const setscore=function(){
  score[activeplayer] += currentscore;
  document.getElementById(`score--${activeplayer}`).textContent=score[activeplayer]
}


diceEl.classList.add('hidden');
let currentscore = 0;
let activeplayer = 0;
let score = [0,0]
let win = 'no';

document.querySelector('.player--0').style.backgroundColor='rgba(244, 244, 244, 0.9)'

btnroll.addEventListener('click', function () {


  
  if(win === 'no'){
    diceEl.classList.remove('hidden');
  let dice = Math.trunc(Math.random() * 7);
  //printing the images
  if (dice === 0) {
    diceEl.src = 'dice-1.png';
    dice = dice + 1;
  } else {
    diceEl.src = `dice-${dice}.png`;
  }

  //adding the score to the current if not equal to 1 or if equal then switchplayer and set current equal to zero
  if (dice != 1) {
    currentscore += dice;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentscore;
  }
   else {  
    //switchplayer
    switchplayer();
  }
  }

});

btnhold.addEventListener('click',function(){
  if(win==='no'){
  setscore();
  if(score[activeplayer]>=10){
    document.querySelector(`.player--${activeplayer}`).style.backgroundColor = 'black';
    document.querySelector(`.name--${activeplayer}`).style.color='white'
    win = 'yes';
    diceEl.classList.add('hidden')
 }else{
  document.querySelector(`.player--${activeplayer}`).style.backgroundColor='rgba(244, 244, 244, 0.3)';
  document.querySelector(`.name--${activeplayer}`).style.color='black'
  currentscore = 0;
 document.getElementById(`current--${activeplayer}`).textContent = currentscore;
 activeplayer = activeplayer === 0 ? 1 : 0;
 document.querySelector(`.player--${activeplayer}`).style.backgroundColor='rgba(244, 244, 244, 0.9)';
 }
}
})

btnnew.addEventListener('click',function(){
  win='no';
  currentscore = 0
  activeplayer = 0
  score = [0,0]
  currentEl0.textContent='0'
  currentEl1.textContent='0'
  score0El.textContent='0'
  score1El.textContent='0'
  document.querySelector('.player--0').style.backgroundColor='rgba(244, 244, 244, 0.9)'
  document.querySelector('.player--1').style.backgroundColor='rgba(244, 244, 244, 0.3)'
  document.querySelector('.name--0').style.color='black'
  document.querySelector('.name--1').style.color='black'
})


