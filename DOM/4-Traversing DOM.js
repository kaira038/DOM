// Traversing - navigating

let val;

const list= document.querySelector(".collection");
const listLastItem=document.querySelector(".collection-item:last-child");

val=list.childNodes;     // shoes as NodeList(11-currently)
val=list.childNodes[0]; 
val=list.childNodes[1]; 
val=list.childNodes[2]; 
val=list.childNodes[1].nodeName; 
val=list.childNodes[0].nodeName; 

//Node can below mentioned categories:-

//Element
//Attribute
//text
//Comment



//Get the children element node
val= list.children;  // only we will get Elements - HTML Collections (priority)
val= list.children[0];
val=list.children[1];
//val=list.children[1].innerText="hello";  // change hello instead of List Item 2
val=list.children[1].children[0].className;  // can find class name nested items

//First child
val= list.firstElementChild;
// val=list.firstElementChild.children;     // HTMLcollections - elemets only
//  val=list.firstElementChild.childNodes;  //NodeList

//Last Child
val=list.lastElementChild;

//Count the child element
val=list.childElementCount;  //5

val=listLastItem;
// val=listLastItem.style.backgroundColor="yellow";



//Get parent node
val=listLastItem.parentElement;
val=listLastItem.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;

//Get Previour sibling Element
val=listLastItem.previousElementSibling; // get previous element sibling as 4 th li element
val=listLastItem.previousElementSibling.style.backgroundColor="yellow"; // shows 4 li with yellow highted
val=listLastItem.previousElementSibling.nodeName;  //LI


//Get Next Sibling Element
val=listLastItem.nextElementSibling; // Targeted last element - there no next element - so output will be Null

// Incase we targeted the first element then we can acssess the next sibling element of first that is 2 nd LI element


console.log(val);
