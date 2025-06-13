// counter.

import { useState } from "react";

export function Counter(){

    const[count,setCount]=useState(0);

    function handelIncri(){
        setCount(function callback(previousValue){
            return previousValue+1;
        })
    }
    function handelDecri(){
        setCount(function callback(previousValue){
            return previousValue-1;
        })
    }

    return(
        <>
            <div>Counter component</div>
            <button onClick={handelIncri}>increase</button>
            <h1>Count is : {count}</h1>
            <button onClick={handelDecri}>Decrease</button>
        </>
    );
}
