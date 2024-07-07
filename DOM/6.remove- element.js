 //const li= document.querySelector("li");
// // li.style.backgroundColor="yellow";
 const ul= document.querySelector("ul");
// li.remove();   // li will be removed

// ul.remove();   // ul will be removed including with all li element


const ulChild= ul.children;   //-- we get the li elements (decler var)

// for (let i = 0; i < ulChild.length; i++) {
//     //console.log(i);             // get index
//     // console.log(ulChild[i]);   // get li elements
//     ulChild[i].remove();
// }


// NOTES:--

// Nodelist has foreach method - no need to change array(directly use for each)
//Query selector acssess only the li that is first element
//Query All selector acssess all li element in ul


const allList=document.querySelectorAll("li");

// console.log(allList);      //return - Nodelist

allList.forEach(function(element,index,array) {
    //console.log(index); // return element not recommmended this way
    //console.log(array);   //return element not recommended
    //console.log(element,index,array);  // right way
    element.remove();
})

