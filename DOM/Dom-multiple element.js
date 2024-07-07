const items= document.getElementsByClassName("collection-item");

console.log(items);
//console.log(items[0]);// its not array

//console.log(Array.isArray(items));  //false

// items.style.background="green";  // undefined
 

// items[0].style.background="green";  
// items[0].style.color="#ffffff";
// items[0].innerText="Hello"; 


// ?  - need to add all li element to green color

// for (let i = 0; i <items.length; i++) {
// //console.log(i); // return number
// //console.log(items[i]);
//   items[i].style.backgroundColor="green"; // style s should be small case


// }

// const arr =[1,2,3];


// for (let i = 0; i < arr.length; i++) {
//     console.log(i*2);  //0,2,4
// }

// arr.forEach(function(number,index,array){
// console.log(number*index);
// console.log(array);

// })


// to change array -- not show HTML Collection
let lists =Array.from(items);

// console.log(lists);

lists.forEach(function(item){
    item.style.backgroundColor="green";
})






















