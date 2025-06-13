import { useState } from "react";
export function Counter2(){

    const [count ,setCount]=useState(0);

    function handelIncriment(){

        setCount(function (previousCountVal){
            return previousCountVal+5;
        })

        // if we again call it -- then count will increase by 10 ---
        /*setCount(function (previousCountVal){
            return previousCountVal+5;
        })
        */

        // setCount(count+5); // we can do it like this
        
        //! react will batch all these and then applies when the current render is completed.
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
    }

    function handelDecriment(){
        setCount(function (previousCountVal){
            return previousCountVal-5;
        })
    }

    return(
        <>
            <p>count increase by 5 and decrease by 5</p>
            <button onClick={handelIncriment}>Incriment</button>
            <h1>count is : {count}</h1>
            <button onClick={handelDecriment}>Decriment</button>
        </>
    );
}


