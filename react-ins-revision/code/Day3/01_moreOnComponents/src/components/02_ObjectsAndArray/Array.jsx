function Array(){
    let arr=[1,2,3,4];
    return(
        <>
            <div>Array in react -- we can use map or directly render it</div>
            <p>Array is : {arr}</p>
            <p>0th index value of array is : {arr[0]}</p>
            <p>1st index value of array is : {arr[1]}</p>
        </>
    );
}

export default Array;