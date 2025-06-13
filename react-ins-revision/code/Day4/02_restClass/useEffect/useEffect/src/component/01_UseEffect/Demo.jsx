// useEffect Deomo.

import { useState } from "react";
import { useEffect } from "react";


export function Demo(){

    const [count,setCount]=useState(0);
    const [count1,setCount1]=useState(0);
    // case 1 -- when no dependency array is passed. -- execute when component laoded frist time and then when compoennt re-render
    /*
    useEffect(function callback(){
        console.log("hello i am callback executing");
    })
    */

    // case 2 -- when empty dependcy array is passed -- callback or effect execute only when component is loaded for the first time in dom and not when component re-rendered or update.
    /*
    useEffect(function callback(){
        console.log("hello i am call back executing");
    },[]);
    */

    // case 3 -> when there is something passed in empty array.... so when component is added to dom first time and second is when the state or value change that is passed in useeffect.
    useEffect(function callback(){
        console.log("hello i am effect executing");
    },[count]);

    function handelIn(){
        setCount(count+1);

    }

    function handelDe(){
        setCount(count-1);
        
    }
    function handelIn1() {
    
        setCount1(count1 + 1);
    }

    function handelDe1() {
    
        setCount1(count1 - 1);
    }
    return(
        <>
            <div>use effect demo</div>
            <button onClick={handelIn}>increase</button>
            <h1>count is : {count}</h1>
            <button onClick={handelDe}>decrease</button>
            <button onClick={handelIn1}>increase</button>
            <h1>count1 is : {count1}</h1>
            <button onClick={handelDe1}>decrease</button>
        </>
    );
}