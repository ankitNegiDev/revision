// function Child({name,age,city}){

import { memo } from "react";

//     console.log("hii i am child ");

//     return(
//         <>
//             <p>name is : {name}</p>
//             <p>age is : {age}</p>
//             <p>city is : {city}</p>
//         </>
//     );
// }

// export default Child;


const Child=memo(function callback({name,age,city}){

    console.log("hii i am child ");

    return(
        <>
            <p>name is : {name}</p>
            <p>age is : {age}</p>
            <p>city is : {city}</p>
        </>
    );
})
export default Child