// effects

import { useState } from "react";
import { useEffect } from "react";


function Effect(){

    const [data , setData]=useState([]);

    let API ="https://jsonplaceholder.typicode.com/todos";

    useEffect(function callback(){
        function fetchData(){
            let fetchPromise=fetch(API);
            console.log("fetch promsie is : ",fetchPromise);
            fetchPromise.then(function callback(partialResponse){
                console.log("partial responsei s : ",partialResponse);
                return partialResponse.json();
            }).then(function callback(fullData){
                console.log("full data is : ",fullData);
                setData(fullData);
            })
        }
        fetchData();
    },[]) // if we pass data in the dependency the array then --- when data state varaible will change then component re-render and again useEffect will run and again data will be fetched and again data will be set so again it trigger the re-render and this cycly continues ---

    return(
        <>
            <h1>this is Effect</h1>
            {data.map(function callback(singleData){
                return(
                    <div key={singleData.id}>
                        <h1>({singleData.id})</h1>
                        <p>completed is : {JSON.stringify(singleData.completed)}</p>
                        <p>title is : {singleData.title}</p>
                        <p>user Id is : {singleData.userId}</p>
                        <hr/>
                    </div>
                );
            })}

        </>
    );
}

export default Effect;