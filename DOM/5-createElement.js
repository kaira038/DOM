// Going to do add a New task in Task List, It will listdown the new task in the below Tasks
// Dynamic 


// 1.crete Element (li)
const li = document.createElement("li");

// Add class
 li.className="collection-item";

//Add id
li.id="test";

//Create a text node and append
li.appendChild(document.createTextNode("Hello world"));

//Create a new link element
const link= document.createElement("a");

link.className="delete-item secondary-content";

link.innerHTML=`<i class="fa fa-remove"></i>`;


// link tag append to li

li.appendChild(link);

// Put li to UL


document.querySelector(".collection").appendChild(li);

                  //  UL  ->  li -> a ->  i   elements appeding

                

console.log(li);
console.log(link);


