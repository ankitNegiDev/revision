// simple click event
function Events(){
    function handelClick1(){
        console.log("button 1 was clicked");
    }
    function handelClick2(){
        console.log("button 2 was clicked");
    }

    function handelClick3(arg){
        return function (){
            console.log("button 3 was clicked and arg is : ",arg);
        }
    }
    function handelClick4(args){
        console.log("button 4 was click and args is : ",args);
    }
    return(
        <>
            <div>Events</div>
            <button onClick={handelClick1}>click me 1</button>
            <button onClick={handelClick2}>click me 2</button>

            {/* now we want to pass the argument in the onClick event handeler  */}
            <button onClick={handelClick3(10)}>click me 3</button>
            {/* another way is we can wrap onClick evnet handeler in a arrow function or another function */}
            <button onClick={function (){handelClick4(100)}} > click me 4</button>
        </>
    );
}

export default Events;

