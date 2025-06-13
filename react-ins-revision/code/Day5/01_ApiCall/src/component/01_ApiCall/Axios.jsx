// api call using axios.... one with promise and one with async await...

import { useState } from "react";
import { useEffect } from "react";
// import axios from "axios";

// https://jsonplaceholder.typicode.com/posts

function Axios(){

    const [originalData,setOriginalData]=useState([]);

    const [isClicked,setIsClicked]=useState(true);

    /*
    useEffect(function callback(){
        function fetchData(){
            let API = isClicked === true ? "https://jsonplaceholder.typicode.com/users" : "https://jsonplaceholder.typicode.com/posts";
            console.log("api is before calling : ",API);
            let responsePromise=axios.get(API);
            console.log("response promsie is : ",responsePromise);
            responsePromise.then(function callback(response){
                console.log("repsone.data is : ",response.data);
                setOriginalData(response.data);
            })
        }
        setTimeout(function callback(){
            fetchData();
        },1000);
    },[isClicked]);
    */
    
    // using async await and axios.
    /*
    useEffect(function callback(){
        async function fetchData(){
            let API = isClicked === true ? "https://jsonplaceholder.typicode.com/users" : "https://jsonplaceholder.typicode.com/posts";
            let response=await axios.get(API);
            setOriginalData(response.data);
        }
        fetchData();
    },[isClicked])
    */

    // using fetch and promises..
    /*
    useEffect(function callback(){
        function fetchData(){
            let API = isClicked === true ? "https://jsonplaceholder.typicode.com/users" : "https://jsonplaceholder.typicode.com/posts";
            let fetchPromise=fetch(API);
            fetchPromise.then(function callback(response){
                console.log("first partial data of fetch : ",response);
                // console.log("json format of response prormise object of fetch is : ",response.json());
                return response.json();
            }).then(function callback(data){
                console.log('orignal data of fetch is : ',data);
                setOriginalData(data);
            })
        }
        fetchData();
    },[isClicked])
    */
    
    // using async await...
    useEffect(function callback(){;
        async function fetchData(){
            let API = isClicked === true ? "https://jsonplaceholder.typicode.com/users" : "https://jsonplaceholder.typicode.com/posts";
            let fetchPromise= await fetch(API);
            let response=await fetchPromise.json();


            console.log("respons is : ",response);
            setOriginalData(response);
        }
        fetchData();
    },[isClicked]);


    function onClickHandler(){
        // call fetch data function...
        if(isClicked){
            setIsClicked(false);
        }else{
            setIsClicked(true);
        }
    }

    console.log("original data at last is : ",originalData);
    console.log("value of isClicked at last is : ",isClicked);

    // find out why the error is coming --- if i am not using ?. optional channing operator ... i guess the issue arries due to re-render- and may be at that time that object property is not avilable or undefined ?? --- check it later..
    // 
    return(
        <>
            <div>api call with axios using promise</div>
            <button onClick={onClickHandler}>fetch data</button>
            {isClicked === true ? originalData.map(function callback(singleUserData){
                return(
                    <div key={singleUserData?.id}>
                        <h2>{singleUserData?.id}</h2>
                        <p>name : {singleUserData?.name}</p>
                        <p>username : {singleUserData?.username}</p>
                        <p>email : {singleUserData?.email}</p>
                        <div>
                            <h2>Address is : </h2>
                            <p>street : {singleUserData?.address?.street}</p>
                            <p>suite : {singleUserData?.address?.suite}</p>
                            <p>city : {singleUserData?.address?.city}</p>
                            <p>zip code : {singleUserData?.address?.zipcode}</p>
                            <div>
                                <h2>location is : </h2>
                                <p>latitude : {singleUserData?.address?.geo.lat}</p>
                                <p>longitude : {singleUserData?.address?.geo.lng}</p>
                            </div>
                        </div>
                        <p>phone : {singleUserData?.phone}</p>
                        <p>website : {singleUserData?.website}</p>
                        <div>
                            <h2>company is : </h2>
                            <p>name : {singleUserData?.company?.name}</p>
                            <p>catch phrase : {singleUserData?.company?.catchPhrase}</p>
                            <p>bs : {singleUserData?.company?.bs}</p>
                        </div>
                        <hr/>
                        <hr/>
                    </div>
                );
            }) : originalData.map(function callback(singlePostData){
                return(
                    <div key={singlePostData.id}>
                        <h3>Title is : {singlePostData.title}</h3>
                        <p>Body is : {singlePostData.body}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Axios;



/*
fetch(API)
    .then(function (response) {
        return response.json(); // <-- this also returns a promise
    })
    .then(function (data) {
        console.log("Fetched data:", data);
        setOriginalData(data);
    })
    .catch(function (error) {
        console.log("Fetch error:", error);
    });

    ================= simpler of avobe to understand ================
    let fetchPromise=fetch(api);
    let p1Promsie = fetPromsie.then(function callback(response){
        return response.json();
    })
    let p2Promise = p1promsie.then(function callback(data){
        console.log("data is : ",data);
    })
 */
//  fetch returns a promise so when js will execute this line fetch(api) then in memory a promise object will created and it will be in pending state -- then we have .then() so as we know .then() do only registration work so this callback or .then() (response) one will now stored inside the onfuilfillement queue or array and then again we have .then() (data) one will now stored inside the onFuilfillemnt queuee or array --- and then same for catch it will registed in onRejected queue ---

// now assume after some time our promise is resolved means fetch return partial data-- - so this.then() callbacks one with respone, and data will not move to microtask queue and then event loop will check is main thread empty or not assume it is so then() with repsonse will now execute-- - and it return response.json()-- - which i guess also return a promise so my question is where this return response.json() is going ?? in the fetch promsie that it is resolved ??
//! where this return response.json() is going --- so ans is it becomes the result of next promise which is .then((data)->)

/**
 ** but but .then() also return a rpomise naa so -- what will hapen when we are explictely returning a promise from the .then() like return response.json()  ?? 
 *? if we are explicitely returning a rpomise -- in that case can i say .then() does not return its own promsie instead it return our explicit promise ------- so ans is no----- why ?? because .then() will always return a promise no matter what happend. 
 ** so --- > if we are not returning any promise then .then() will normally return the promsie as usual but if we are explictely returning a promise --- then .then() will adopt that returned promise means it will takes that returned promsie state and value in its own promise and then return it--
 */

//  chat gpt version
/**
 * .then() always returns a new promise — no matter what.

If the callback inside .then():

returns a value (e.g. a number, string, object):
👉 .then()'s returned promise gets resolved with that value.

returns undefined (i.e. nothing explicitly returned):
👉 .then()'s promise resolves with undefined.

returns a promise (like response.json()):
👉 .then()'s returned promise adopts the state & result of that inner promise.


If we return a regular value — .then() wraps it in a resolved promise.
If we return a promise — .then() “follows” that promise and resolves/rejects with its outcome.
 */

