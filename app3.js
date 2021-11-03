//create variable to hold the pre-cleanup string
let messyString = document.querySelector("#messyString");

function removeHashtag(){
    //use replace to replace # with nothing, using ""
    //temp value to let .replace be used, hold value
    let messStr = messyString.value;
    //use / / to mark the beginning and end of the string, g to mark all occurances
    let cleanStr = messStr.replace(/#/g, '');
    
    //print to dv
    dvOutput.innerHTML = cleanStr;
}