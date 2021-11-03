function makeRandom(){
    //create variable to hold random number
    //use math.random and math.floor to generate random number between 0 and 10
    let randNum =  Math.floor(Math.random() * 11);
    
    //print random number to the div
    dvOutput.innerHTML = randNum;
}