// function Small({randomValue}){


//     return(
//         <>
//             <h1>Hello {randomValue}</h1>
//         </>
//     );
// }

// export default Small;

import { memo } from "react";

// now using memo to so that only that component re-render whose props are been changed..
let Small=memo(function ({randomValue}){
    console.log("Rendered Small with value: ======== > ", randomValue);
    return(
        <>
            <h1>hello {randomValue}</h1>
        </>
    );
})
export default Small;