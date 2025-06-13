import { useState } from "react";

function NameChange(){
    const [name,setName]=useState("bingolive");

    function handelClick(){
        if(name==="bingolive"){
            setName("anonymous");
        }else{
            setName("bingolive");
        }
        // name==="bingolive" ? setName("anonymous") : setName("bingolive");
    }

    return(
        <>
            <div>Name change component</div>
            <h1>name is : {name}</h1>
            <button onClick={handelClick}>logout</button>
        </>
    );
}

export default NameChange;