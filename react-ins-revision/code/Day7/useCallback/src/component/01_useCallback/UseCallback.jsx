import { useState } from "react";
import Child from "./Child";
import { useCallback } from "react";

function UseCallback(){

    const [count,setCount]=useState(0);
    function handelClick(){
        setCount(count+1);
    }

    // let a='bingo';

    /*
    let b=function myFun(){
        console.log("hello this is my function");
    }
    */
    
    // solution is useCallback. that memoised the reference..

    let b= useCallback(function (){
        console.log("hello i am function ");
    },[])

    return(
        <>
            {/* <Child name={a}/> */}
            <Child name={b}/>
            <p>Use callback</p>
            <button onClick={handelClick}>counter {count}</button>
        </>
    );
}

export default UseCallback;

// when we click on counter -- then state changed and component re-render so function b in first rendder and second render are different referencly ---
// so i can say props are also changed so memo will re - render the component again ??? --- yes logically correct

// or should i say memo dosen't work on --- function  --- yes correct

// the asn is yes ....

// cht gpt

/**
 * "So I can say props are also changed, so memo will re-render the component again"
✅ Correct.

"Or should I say memo doesn't work on function?"
✅ Also correct in practice — because functions are reference types, and a new function on each render means a new prop.
 */