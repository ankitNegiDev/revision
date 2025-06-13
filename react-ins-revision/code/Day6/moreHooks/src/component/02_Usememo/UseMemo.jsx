// creating a input wher user will write any number and we will print its sum on the page.. And after that we will create a counter ---

import { useMemo } from 'react';
import {useState} from 'react';

function UseMemo(){

    const [count ,setCount]=useState(0);
    const [input , setInput]=useState("");

    function handelIncriment(){
        setCount(function (previousCountval){
            return previousCountval+5;
        })
    }

    function handelDecriment(){
        setCount(function (previousCountval){
            return previousCountval-5;
        });

    }

    function handelInput(event){
        setInput(event.target.value);
    }

    /*
    let sum=0;
    for(let i=0; i<=input; i++){
        console.log("calcualting sum ");
        sum=sum+i;
    }
    */
    // without memo this computation will occur every time when the component will render --

    let ans= useMemo(function callback(){
        let sum=0;
        for(let i=1; i<=input; i++){
            console.log("calcuating huge calcuation")
            sum=sum+i;
        }
        return sum;
    },[input])


    return(
        <>
            <input type="number" onChange={handelInput} value={input}/>
            {/* <h2>Sum of {input} number is : {sum}</h2> */}
            <h2>Sum of {input} number is : {ans}</h2>
            <button onClick={handelIncriment}>incriment</button>
            <h2>count is : {count}</h2>
            <button onClick={handelDecriment}>decriment</button>
        </>
    );
}

export default UseMemo;