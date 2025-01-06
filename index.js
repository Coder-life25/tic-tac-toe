const boxes = document.querySelectorAll('.box');
const msgContainer = document.querySelector('.msg-container');
const msg = document.querySelector('.msg');
const newGameBtn = document.querySelector('.new-btn');
const resetBtn = document.querySelector('#reset-btn');


let turnO = true;


const newGame = ()=>{
    turnO = true;
    enableBtn();
    msgContainer.style.display = "none";
}

const winnigPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

console.log(winnigPattern);

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText = "X";
            turnO = false;

        }
        else{
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;

        checkPattern();
    })

})

const enableBtn =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
}
 const checkWinner = (winner)=>{
    msg.innerText = `Congratulations and winner is ${winner}`
    msgContainer.style.display = "block";
    disableBtn();
 } 


const checkPattern = () =>{
    for(let pattern of winnigPattern){
        console.log(pattern[0] , pattern[1] , pattern[2]);
        console.log(boxes[pattern[0]].innerText , boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("winner",pos1Val);
                checkWinner(pos1Val);
                
            }
        }


    }
}


resetBtn.addEventListener("click",newGame);
newGameBtn.addEventListener("click",newGame);

