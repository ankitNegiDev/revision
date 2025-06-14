import { useState } from "react";
import Child from "./Child";

function Memo(){

    let name="anki";
    let age=24;
    let city="uk";


    const [count,setCount]=useState(0);
    function handelClick(){
        setCount(count+1);
    }


    return (
        <>
            <div>Memo</div>
            <Child name="bingo" age={23} city="uttrakhand"/>
            <Child name={name} age={age} city={city}/>
            <button onClick={handelClick}>click : {count}</button>
        </>
    );
}

export default Memo;