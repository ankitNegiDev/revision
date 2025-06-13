// person without props
/*
function Person(){

    return(
        <>
            <h1>name : "binglive</h1>
            <h2>age : 23</h2>
            <h3>color : red</h3>
        </>
    );
}
export default Person;
*/

// now person will expect props
/*

function Person(props){

    return(
        <>
            <h1>name is : {props.name}</h1>
            <h2>age is : {props.age}</h2>
            <p>city is : {props.city}</p>
        </>
    );
}
export default Person;
*/

// doing de-structuring of object since props is also a object..
/*
function Person(props){
    // console.log("typeof props is : ",typeof props); // typeof props is object 
    const {name,age,city}=props;
    return(
        <>
            <h1>name is : {name}</h1>
            <h2>age is : {age}</h2>
            <p>city is : {city}</p>
        </>
    );
}
export default Person;
*/

// instead of de-structuing seprately we can directly de-structure in parameters..
function Person({name,age,city}){
    return(
        <>
            <h1>name is : {name}</h1>
            <h2>age is : {age}</h2>
            <p>city is : {city}</p>
        </>
    );
}
export default Person;