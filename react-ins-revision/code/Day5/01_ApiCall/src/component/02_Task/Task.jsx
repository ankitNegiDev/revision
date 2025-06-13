// Q  => (github api fetching) call a api --  and show fowlooer , folleowing , avatar url on the page ... 

import {useState } from "react";
import axios from 'axios';
function Task(){

    const[data,setData]=useState([]);
    const [inputValue,setInputValue]=useState("");
    // let usersArry = ["priyansh159","ankitNegiDev"];

    function handelName(event){
        console.log("event.target .value is : ",event.target.value);
        setInputValue(event.target.value);
    }

    function handelClick(){
        function fetchData(username) {
            const API = `https://api.github.com/users/${username}`;
            let responsePromise = axios.get(API);
            responsePromise.then(function (response) {
                setData(response.data);
            })
        }
        fetchData(inputValue)
        setInputValue("");
    }


    // let API ="https://api.github.com/users";

    /*
    useEffect(function callback(){
        function fetchData(username){
            const API = `https://api.github.com/users/${username}`;
            let responsePromise=axios.get(API);
            responsePromise.then(function (response){
                setData(response.data);
            })
        }
        // fetchData(inputValue)
        // for(let i=0; i<usersArry.length; i++){
        //     fetchData(usersArry[i]);
        // }
        setInputValue("");

    },[]); // only render when mount..
    */
    console.log("data is : ",data);

    return (
        <>
            <div>Github api call</div>
            <input type="text" onChange={handelName} value={inputValue}/>
            <button onClick={handelClick}>Search</button>

            <div>
                <p>avatar url : {data.avatar_url}</p>
                <img src={data.avatar_url} width="100px"/>
                <p>followrs : {data.followers}</p>
                <p>following : {data.following}</p>
                <p>url : {data.url}</p>
            </div>
        </>
    );
}

export default Task;





