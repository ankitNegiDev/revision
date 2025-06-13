// Q 1 => we have a magic number which is equal to 7 and we need to generate a random number and if random number and magic number are equal then show a element lucky number 7 but if not equal then show better luck next time.
function Task(){
    let magicNumber=7;
    let randomNumber=Math.floor(Math.random()*(10-0+1))+0;
    console.log("random number is : ",randomNumber);
    let element=null;
    if(magicNumber===randomNumber){
        element="lucky number is 7";
    }else{
        element="better luck next time";
    }

    return(
        <>
            <div>Task : </div>
            {/* approach 1 */}
            <p>Element is : {element}</p>
            {/* <p>{randomNumber===7}?lucky number is 7 : better luck next time </p>  error*/}

            {/* approach 2 */}
            {randomNumber===7 ? <h1>lucky number is 7</h1> : <h1>better luck next time</h1>}

            {/* approch 3 */}
            {(Math.floor(Math.random()* (10-0)+1)+0) === 7 ? <h1>Lucky number is 7</h1> : <h1>better luck next time</h1>}
        </>
    );
}
export default Task;
