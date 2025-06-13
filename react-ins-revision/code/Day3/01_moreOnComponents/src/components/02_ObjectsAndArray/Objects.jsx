function Objects(){
    let obj={
        name:"bingo",
        age:23,
        address:{
            street:"23rd nort carolina",
            block:"A"
        }
    }

    return(
        <>
            <div>Objects</div>
            <h1>we can't render object directly but we can access the property of object individually</h1>
            <p>name is : {obj.name}</p>
            <p>age is : {obj.age}</p>
            <p>street in address is : {obj.address.street}</p>
            <p>block in address is : {obj.address.block}</p>
        </>
    );
}

export default Objects;
