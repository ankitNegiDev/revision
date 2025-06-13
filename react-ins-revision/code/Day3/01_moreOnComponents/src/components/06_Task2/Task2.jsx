// Q  -> we have a h1 which is showing name = "bingolive" and we have a button also and when user click on the button then text isndie the name is changed to anonymous

// approach 1 -> using js logic

/*
function Task2(){
    let name="bingolive";
    console.log("starting name value is : ",name);
    function handelClick(){
        let headingObj=document.getElementById("name");
        console.log("heading obj is : ",headingObj);
        if(name==="anonymous"){
            name="bingolive";
        }else{
            name="anonymous";
        }
        headingObj.innerText=`name is : ${name}`;
    }

    return(
        <>
            <h1 id="name">name is : {name}</h1>
            <button onClick={handelClick}>click me</button>
        </>
    );
}
*/


function Task2(){
    let name="bingolive";
    console.log("starting name value is : ",name);
    function handelClick(){
        name="anonymous";
        console.log("value of name is changed on click : ",name);
    }
    return(
        <>
            <div>task 2 of Day 3 class</div>
            <h1>name : {name}</h1>
            <button onClick={handelClick}>logout</button>
        </>
    );
}

export default Task2;