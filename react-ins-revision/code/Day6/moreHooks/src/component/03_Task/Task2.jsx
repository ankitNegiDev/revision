// Q => create two input and when whatever user type in these two input there sum will be printed on page and create a counter on which if we click its value will be increase and decrease..

import { useMemo } from "react";
import { useState } from "react";

function Task2(){

    const [inputVal1, setInputVal1]=useState("");
    const [inputVal2, setInputVal2]=useState("");
    const [count,setCount]=useState(0);

    function handelFirstInput(event){
        // console.log("type of : ",typeof event.target.value);
        // const value = Number(event.target.value); 
        let integerValue=parseInt(event.target.value);
        setInputVal1(integerValue);
    }

    function handelSecondInput(event){
        let integerValue=parseInt(event.target.value);
        setInputVal2(integerValue);
    }

    let sum=useMemo(function callback(){
        let ans=0;
        console.log("calculating ans ");
        // console.log(typeof inputVal1);
        ans=inputVal1 + inputVal2;
        return ans;

    },[inputVal1,inputVal2]);

    function handelIncriment(){
        setCount(function (previousCountval){
            return previousCountval+1;
        });
        setCount(function (previousCountval){
            return previousCountval+1;
        });
        setCount(function (previousCountval){
            return previousCountval+1;
        });
    }

    function handelDecriment(){
        setCount((c)=> c-1);
        setCount((c)=>(c-1));
        setCount((c)=>{return c-1});
    }

    // setInputVal1("");
    // setInputVal2("");
    return(
        <>
            <input type="number" onChange={handelFirstInput} value={inputVal1}/>
            <input type="number" onChange={handelSecondInput} value={inputVal2}/>
            <h2>sum of two input is : {sum}</h2>
            <button onClick={handelIncriment}>incriment</button>
            <h3>count is : {count}</h3>
            <button onClick={handelDecriment}>decriment</button>
        </>
    );
}

export default Task2;