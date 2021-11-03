//the input from the user
let enteredNum = document.querySelector("#enteredNum");

function divBySeven(){
    //if the value of the entered number mod 7 is 0
    if(enteredNum.value % 7 == 0){
        //print true to the div
        dvOutput.innerHTML = "True";
    }else{
        //else, print false
        dvOutput.innerHTML = "False";
    }
}