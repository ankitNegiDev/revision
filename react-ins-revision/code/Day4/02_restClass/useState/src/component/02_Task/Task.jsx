// Q => create a component -- when user click on the button then generate a random number -- and disply that random number...

import { useState } from "react";

function Task(){
    const [randomNumber,setRandomNumber]=useState(Math.floor(Math.random() * (999-100+1))+100);

    function handelClick(){
        setRandomNumber(Math.floor(Math.random()*(999-100+1))+100);
    }


    return(
        <>
            <p>Task to generate random number</p>
            <hr/>
            <h1>Three digit Random number is : {randomNumber}</h1>
            <button onClick={handelClick}>generate Random number</button>
        </>
    );
}
export default Task;

// for three digint random number -- smallest three digit number is 100 and largest is 999
// same for 6 digit random number -- smallest 6 digit number is 100000 and largest is 999999