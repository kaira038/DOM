
// Event - Action

//1. mouse event
//2. keyboard event


// addEventListener("event",function())     ---- METHOD


// document.querySelector(".clear-tasks").addEventListener("click",
//     function() {
//     alert("Hello");
// })



//Mouse Event

const clearBtn = document.querySelector(".clear-tasks");

// SINGLE CLICK
clearBtn.addEventListener("click",runEvent);


// DOUBLE CLICK
//clearBtn.addEventListener("dblclick",runEvent);

//MOUSE DOWN
//clearBtn.addEventListener("mousedown",runEvent);

//MOUSE UP
//clearBtn.addEventListener("mouseup",runEvent);

//MOUSE ENTER
//clearBtn.addEventListener("mouseenter",runEvent);

//MOUSE LEAVE
//clearBtn.addEventListener("mouseleave",runEvent);


// function runEvent(){
//     console.log("hello");
// }


// function runEvent(event){
//     console.log(event);       // return pointer event - object
// }


function runEvent(event){
    console.log(`Event Type :${event.type}`);   //return event as click
}


// NOTES:--    e - object 