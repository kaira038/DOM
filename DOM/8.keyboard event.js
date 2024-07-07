const taskInput=document.querySelector("#task");


// console.log(taskInput);

// KEYDOWN - return prevoius value
//taskInput.addEventListener("keydown",runEvent);

// KEY UP  ***  - return all typed values
//taskInput.addEventListener("keyup",runEvent);

//KEY PRESS  - return previous values
//taskInput.addEventListener("keypress",runEvent);

//FOCUS  - click the input
//taskInput.addEventListener("focus",runEvent);

//BLUR  - unfocus
//taskInput.addEventListener("blur",runEvent);

//CUT   - click input -ctrl x
//taskInput.addEventListener("cut",runEvent);

//COPY  - click input -ctrl c - event run
//taskInput.addEventListener("copy",runEvent);

// PASTE  - ctrl v
//taskInput.addEventListener("paste",runEvent);




function runEvent(e) {
    console.log(e);            //return event not the value
    //console.log(e.target);      //return the input not a value
    console.log(e.target.value);   

}