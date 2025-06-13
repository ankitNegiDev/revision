// task -> create a counter app -- like when user click on decrement button the count will decrease and when user click on incriment button count should increase....

import { useState } from "react";

function Counter(){


    const [count , setCount]=useState(0);
    function handelIncriment(){
        setCount(function (previousCountVal){
            return previousCountVal+1;
        })
    }

    function handelDecriment(){
        setCount(function (previousCountVal){
            return previousCountVal-1;
        })
    }

    return(
        <>
            <div>Counter task</div>
            <h1>Count is :  {count}</h1>
            <button onClick={handelIncriment}>Do Incriment</button>
            <button onClick={handelDecriment}>Do Decriment</button>
        </>
    );
}
export {Counter};