// function Child({ name }) {
//     console.log("hello i am normal funciton");
//     return (
//         <>
//             <h1>name is : {name}</h1>
//         </>
//     );
// }

import { memo } from "react";
let Child = memo(function callback({name}){

    console.log("hello i a m memo");

    return(
        <>
            <p>name is : {name}</p>
        </>
    );
})
export default Child;