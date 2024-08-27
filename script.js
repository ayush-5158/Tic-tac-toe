let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-btn");
let newGamebtn = document.querySelector(".new-btn");

let turn = true //for player X

const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

resetbtn.addEventListener("click",()=>{
    turn = true;
    enableBoxes();

});

newGamebtn.addEventListener("click",()=>{
    alert("New game Started");
    enableBoxes();
    turn = true;
})

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turn){
            box.innerText = "O";
            turn = false;
        }
        else{
            box.innerText ="X";
            turn = true;
        }
        box.disabled = true;

        checkWinner();

    });
});

const checkWinner = () =>{
    for (pattern of winPattern){ //0,1,2 position ek array hai jo pattern me store hua hai
        let pos1val  = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val==pos2val && pos2val==pos3val){
                alert(`Player ${pos1val} won the game`);
                disableBoxes();
            }
        }
    }
};

const disableBoxes =()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes =()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};


