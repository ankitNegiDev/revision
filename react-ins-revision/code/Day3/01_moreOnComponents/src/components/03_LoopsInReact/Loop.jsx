function Loop(){
    let arr=[10,20,30,40,50];
    return(
        <>
            <div>Loop in jsx</div>
            {arr.map(function callback(currentElement,index){
                return(
                    <p key={index}>Element at index : {index} is : {currentElement}</p>
                )
            })}
        </>
    );
}
export default Loop;