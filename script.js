let clickbtn=document.getElementById("btn")
let oparent=document.querySelector(".parent")
let grparent=document.querySelector(".grparent")


//Bubbling
clickbtn.addEventListener("click",()=>{
    
    console.log("button bubbling");
})

oparent.addEventListener("click",()=>{
    console.log("parent bubbling");
})

grparent.addEventListener("click",()=>{
    console.log("grandparent bubbling");
})

//capture
clickbtn.addEventListener("click",()=>{
    console.log("button capture");
},true)

oparent.addEventListener("click",()=>{
    console.log("parent capture");
},true)

grparent.addEventListener("click",()=>{
    console.log("grandparent capture");
},true)