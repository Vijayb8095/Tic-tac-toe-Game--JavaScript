let boxes = document.querySelectorAll(".box");
let reserbut = document.querySelector(".reset-button");
let msscontainer = document.querySelector(".mss-container");
let mss = document.querySelector("#mss");
let newGame = document.querySelector(".new-game");

let trueO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  trueO = true;
  enableboxes();
  msscontainer.classList.add("hide");
};
let count = 0;
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    if (trueO) {
      box.innerHTML = "O";
      box.style.color = "#EC0868";
      trueO = false;
    } else {
      box.innerHTML = "X";
      box.style.color = "#FC2F00";
      trueO = true;
    }

    box.disabled = true;

    checkWinner();
  });
});

let disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

let enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
    count = 0;
  }
};

let showWinner = (winner) => {
  mss.innerHTML = `Congratulations Winner is ${winner}`;
  msscontainer.classList.remove("hide");
  disableboxes();
};

let draw = () => {
  mss.innerHTML = `Draw Between X and O`;
  msscontainer.classList.remove("hide");
};

let checkWinner = () => {
  for (let pattern of winPattern) {
    
    let posv1 = boxes[pattern[0]].innerHTML;
    let posv2 = boxes[pattern[1]].innerHTML;
    let posv3 = boxes[pattern[2]].innerHTML;

    if (posv1 != "" && posv2 != "" && posv3 != "") {
      if (posv1 === posv2 && posv2 === posv3) {
        
        showWinner(posv1);
        return;
      }
    }
  }
  
  if (count === 9) {
    debugger
  draw();
}
};



newGame.addEventListener("click", resetGame);
reserbut.addEventListener("click", resetGame);
