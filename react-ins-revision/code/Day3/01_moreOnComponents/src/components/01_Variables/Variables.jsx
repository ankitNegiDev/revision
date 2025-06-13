function Variables(){
    let number=100;
    let str="bingo";
    let boolean=true;
    let un=undefined;
    let empty=null;
    // for array and object we need to iterate on them --- (object is not iterable but  we will see it)
    return(
        <>
            <div>Variables</div>
            <p>number is : {number}</p>
            <p>string is : {str}</p>
            <p>boolean is : {boolean}</p>
            <p>undefined is : {un}</p>
            <p>empty is : {empty}</p>
            <hr/>
            <p>boolean is : {JSON.stringify(boolean)}</p>
            <p>undefined is : {JSON.stringify(un)}</p>
            <p>empty is : {JSON.stringify(empty)}</p>
        </>
    );
}

export default Variables;