
// select all the buttons-done

// push all the buttons in the array-done
// set a global variable-for which player turn is
// now accordingly show the button on the ui


//:-how to check for win
// 123,456,789 || 147,258,369 || 159,357
// if matched then show congratulation


let elements = document.querySelectorAll(".cell");
let elementsArray = []
let values = [];
const winninIndex = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let turnx = true;
let won = false;
for (i = 0; i < elements.length; i++) {
    elementsArray.push(elements[i]);
    values.push(elements[i].innerHTML);

}
//  TODO:-show this on the page...
console.log("X turn");
//start=X,then O
let symbol = "X";
// adding eventlistner on each cell
elementsArray.forEach((val, index) => {
    // console.log(val);
    val.addEventListener('click', (event) => {
        // console.log(`clicked cell is ${index+1}`);
        if (val.innerText === '') {
            val.innerText = turnx ? 'X' : 'O';
            turnx = !turnx;
            // check for win

            turnx === true ? console.log('X turn') : console.log("O turn")
        }
        // checkwinner
        checkWinner();





    })

});

const checkWinner = () => {
    winninIndex.forEach((position) => {
        let ele1 = elementsArray[position[0]].innerText;
        let ele2 = elementsArray[position[1]].innerText;
        let ele3 = elementsArray[position[2]].innerText;
        if (ele1 != "" && ele2 != "" && ele3 != "") {
            if (ele1 === ele2 && ele2 === ele3) {
                console.log("winner " + ele1);
                // show winner popup in the page

                let winningDiv = document.querySelector(".matrix");
                console.log(winningDiv);

                let winningMsg = document.createElement("div");
                winningMsg.innerHTML = `<span style="color: green; font-weight: bold; font-size: 2rem;">
   Congrats ${ele1}, you won the match!
</span>`;
                console.log(winningMsg);

                // Insert just after winningDiv
                winningDiv.parentNode.insertBefore(winningMsg, winningDiv.nextSibling);
                  showRestartButton();


            }

        }


    })
};

const showRestartButton = () => {
    const matrix = document.querySelector(".matrix");

 // TODO:-   // start from here
    const btn = document.createElement("button");
    btn.innerHTML = `<span style="margin:4rem; font-weight: bold; color: black; background-color:red; font:"> Play Again</span>`;
    matrix.appendChild(btn);
}


























