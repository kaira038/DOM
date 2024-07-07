//console.log(document.getElementById("task-title"));
//console.log(document.getElementById("collection-item")); //null
 

const taskTitle =document.getElementById("task-title");
console.log(taskTitle);

//Change Style

console.log(taskTitle.style.backgroundColor="blue");
taskTitle.style.color="#ffffff";
taskTitle.style.padding="5px";

//Change content

taskTitle.innerText="kavi";
//taskTitle.innerText="<span> priya </span>";

taskTitle.innerHTML="<span> priya </span>";

//document.queryselector
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".collection"));
console.log(document.querySelector("h5"));


document.querySelector("li").style.backgroundColor="green";
document.querySelector("ul li").style.backgroundColor="red";
document.querySelector("ul li:nth-child(3)").style.backgroundColor="pink";
document.querySelector("ul>li:first-child").style.color="#ffffff";
