let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newBtn = document.getElementById("new");
let msgConatiner = document.querySelector(".msg-container");
let msg = document.getElementById("msg");

let turn0 = true; //playerX, playerO
let count = 0;
const resetGame = ()=>{
    enableBtn();
    turn0 = true;
    msgConatiner.classList.add("hide");
}

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        
        console.log(count);
        
            if(turn0){      //playerO
                box.innerHTML = "O";
                turn0 = false;
                box.style.color = "#226f54";
            }else{      //playerX
                box.innerHTML = "X";
                turn0 = true;
                
            }
            box.disabled = true;        //to disable the box from further clicking
            
            checkWinner();
    });
});


const disableBtn = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};


const enableBtn = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const matchDraw = ()=>{
    disableBtn();
    msg.innerText =  "Draw Match!!!";
    msgConatiner.classList.remove("hide");  //to hide the msg container
}


const showWinner = (winner)=>{
    disableBtn();
    msg.innerText =  `Congrats! The Winner is ${winner}`;
    msgConatiner.classList.remove("hide");  //to hide the msg container
}


const checkWinner = ()=>{
    count++;
    for( let patters of winPattern){
       
            // console.log(patters[0],patters[1],patters[2]);
            // console.log(boxes[patters[0]].innerText,
            //     boxes[patters[1]].innerText,
            //     boxes[patters[2]].innerText);
        
            let pos1Val = boxes[patters[0]].innerText;
            let pos2Val = boxes[patters[1]].innerText;
            let pos3Val = boxes[patters[2]].innerText;
            if(pos1Val!="" && pos2Val!="" && pos3Val!=""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    console.log("Winner is : ", pos1Val);
                    showWinner(pos1Val);
                }
            }
            if(count == 9){
                matchDraw();
            }
            
    }
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);