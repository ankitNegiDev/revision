// Q => create tow button incriment and decrimetn and when user will click on the incriment button then count should increase by 3 and when user will click on decriment then count should decrease by 3..

import { useState } from "react";

function Task1(){

    const [count , setCount]=useState(0);

    function handelIncriment(){
        // setCount(function callback(previousCountval){
        //     return previousCountval+3;
        // });
        setCount(function (previousCountval){
            return previousCountval+1;
        });
        setCount((previousCountval)=>(previousCountval+1));
        setCount((previousCountval)=>{return previousCountval+1});
    }

    function handelDecriment(){
        // setCount(function callback(previousCountval){
        //     return previousCountval-3;
        // });
        setCount((c) => (c-1));
        setCount((c) => (c - 1));
        setCount((c) => (c - 1));

    }

    return(
        <>
        
            <button onClick={handelIncriment}>incriment</button>
            <h1>count is : {count}</h1>
            <button onClick={handelDecriment}>Decriment</button>
        </>
    );
}

export default Task1;