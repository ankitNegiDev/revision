console.log("hello");

// getElementById -> if found -- then return that html object form or refence , if not then return null .. if there are multiple same heading then return the first matching.
const headingObj=document.getElementById("my-heading");
console.log("headingObj is : ",headingObj);

headingObj.style.backgroundColor="aqua";

// getElementByClassName --> it return the html collection and if not found any html element with className then it return the empty live collection..
const headingObj1=document.getElementsByClassName("my-heading-class");
console.log("head1",headingObj1);

const headingArray=Array.from(headingObj1);
console.log(headingArray.forEach(function callback(ele){console.log("elem",ele)}));

headingArray[0].style.backgroundColor="red";

// getEelementByTagName -- > it return the html collection if not then return empty collection.....
const paraObj=document.getElementsByTagName("p");
console.log("praobj : ",paraObj);

paraObjArray=[...paraObj];
console.log(Array.isArray(paraObjArray));

// query selector. -- reutrn the object form of first matching -- we can pass css sleector hrere..

const listObj=document.querySelectorAll(".container>.list>.item"); // child combinator..
console.log("list obj is : ",listObj);

// listObj.style.backgroundColor="yellow";

listArry=[...listObj];
listArry.forEach((eleme)=>{eleme.style.backgroundColor="yellow"; console.log(eleme.parentElement)})
listArry[0].setAttribute("id","my-list-id");
console.log("id : ",listArry[0].getAttribute("id"));
console.log("id : ",listArry[0].removeAttribute("id"));
console.log("id : ", listArry[0].getAttribute("id"));

// query selector all will return the nodelist --- 


const divObj=document.getElementsByClassName('container');


// btn

let btnObj=document.getElementById("btn");

btnObj.addEventListener("click",function callback(){
    if(divObj[0].classList.contains('primary')){
        divObj[0].classList.toggle('seconday')
    }else{
        divObj[0].classList.toggle('primary');

    }
})


function myFun(){
    console.log("button was clicked : ");
}


const colorContainer=document.getElementById("color-container");
colorContainer.style.width="300px";
colorContainer.style.height="300px";
colorContainer.style.border="2px solid red"

const colorBtn=document.getElementById("color-btn");

function generateRandomColor(){
    const red=Math.floor(Math.random()*(255-0)+1) + 0;
    const green = Math.floor(Math.random() * (255 - 0) + 1) + 0;
    const blue = Math.floor(Math.random() * (255 - 0) + 1) + 0;
    const color=`rgb(${red},${green},${blue})`;
    console.log("color : ",color)
    return color;
}

colorBtn.addEventListener("click",function callback(event){
    colorContainer.style.backgroundColor=generateRandomColor();
})

const inputObj=document.getElementById('in');
inputObj.addEventListener("input",(event)=>{
    // colorContainer.innerText=event.target.value;
    colorContainer.innerText=inputObj.value
})