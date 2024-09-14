let boxes = document.querySelectorAll(".box");
let resetgamebutton = document.querySelector(".reset-button");
let newgamebutton = document.querySelector('.new-btn');
let msgcontainer = document.querySelector('.msg-container');
let msg = document.querySelector('.msg');
let turno = true; //player 1 turn
const Winpatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener(
    "click",() => {
    
       if (turno)  //player 1 turn
        {
        box.innerText = "O";
        box.style.color="#F2EDEB"
        turno = false;
      } 
      else {
        box.innerText = "X"; //player 2 turn
        box.style.color="#3A3E3B"
        turno = true;
      }
      box.disabled=true //so that we player cannot change once clicked
      checkWinner()
    });
});
//disabled buttons after game finished
const disablebtns = () =>{
    for(let box of boxes){
        box.disabled=true
    }
}

//enables buttons at start of game
const enablebtns = () =>{
    for(let box of boxes){
        box.disabled=false
        box.innerText= ""
    }
}

//reset game
const resetgame = () =>{
    turno= true
    enablebtns()
    msgcontainer.classList.add('hide')
}

//show winner 

const showWinner = (winner) =>{
    msg.innerText= `Congratulations! Winner is ${winner}`
    msgcontainer.classList.remove('hide')
    disablebtns()
 }

 const checkWinner = () =>{
    for (let pattern of Winpatterns){
        //console.log(pattern)
        //for accessing wiining pattern's positions
        let posi1val= boxes[pattern[0]].innerText
        let posi2val= boxes[pattern[1]].innerText
        let posi3val= boxes[pattern[2]].innerText
       // for Winner Condition
         if(posi1val != '' && posi2val!= '' && posi3val != ''){ 
            if(posi1val==posi2val && posi2val==posi3val )
            {
                //console.log('Winner',posi1val)
                showWinner(posi1val)
            }
         }

    }
 }
 
 newgamebutton.addEventListener('click', resetgame)
 resetgamebutton.addEventListener('click', resetgame)