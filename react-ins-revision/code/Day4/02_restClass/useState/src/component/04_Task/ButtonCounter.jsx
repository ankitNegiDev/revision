// Q => there is a like and dislike button and when user click on the like button the value will increase by 1 and when user will click on dislike button then value will decrease by 1.

import { useState } from "react";


export function ButtonCounter(){

    const [count,setCount]=useState(0);
    function handelLike(){
        setCount(function callback (previousValue){
            return previousValue+1;
        })
    }

    function handelDislike(){
        setCount(function callback (previousValue){
            return previousValue-1;
        })
    }

    return(
        <>
            <div>Button Counter component</div>
            <button onClick={handelLike}>like</button>
            <h1>Count is  :  {count}</h1>
            <button onClick={handelDislike}>Dislike</button>
        </>
    );
}