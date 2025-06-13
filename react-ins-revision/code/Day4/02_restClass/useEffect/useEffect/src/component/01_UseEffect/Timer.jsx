// Q -> create a component that will print hello or a greeting message after 5 sec.. and add also a button so that when user click on button then after 5 sec it print the greeting message

import { useEffect } from "react";
import { useState } from "react";


function Timer(){

    const [greet,setGreet]=useState(null);
    const [count,setCount]=useState(0);

    useEffect(function callback() {
        console.log("effect is called ---- ");
        setTimeout(function callback() {
            if (!greet) {
                setGreet("welocom sorry for 5 sec dealy");
            }
        }, 2000);
    },[greet]);

    function handelClick(){
        if(!greet){
            setTimeout(function callback(){
                setGreet("heeloo button click and 5 sec delay");

            },2000)
        }else{
            setGreet(null);
        }
    }

    function handelCount(){
        setCount(count+1);
    }


    return(
        <>
            <div>Time component</div>
            <h1>message : {greet}</h1>
            <button onClick={handelClick}>greet</button>
            <h1>count is : {count}</h1>
            <button onClick={handelCount}>Count</button>
        </>
    );
}

export default Timer;


// import { useEffect } from "react";
// import { useState } from "react";


// simple one -- -

// function Timer(){
//     const[greet,setGreet]=useState(null);
//     useEffect(function callback(){
//         setTimeout(function callback(){
//             setGreet("hello how are u");
//         },2000);
//     },[greet]);

//     return(
//         <>
//             <div>tiemr</div>
//             <h1>greet message is : {greet}</h1>
//         </>
//     );
// }
// export default Timer;