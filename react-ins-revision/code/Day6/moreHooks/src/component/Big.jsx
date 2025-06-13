import { useState } from "react";
import Small from "./Small";

function Big(){

    const [name,setName]=useState("bingolive");

    function handelClick(){
        setName(Math.floor(Math.random()*(20-10+1))+10);
    }

    /**
     * when user click on the button -- then all the component will re-render becase state is inside the big component and if it changed then whole component is re-rnedered..
     */

    return(
        <>

            <Small randomValue="ani"/>
            <Small randomValue="anku" />
            <Small randomValue="pinku" />

            <Small randomValue={name} />
            <button onClick={handelClick}>Click me</button>
            {/* <Small randomValue={name}/> */}

        </>
    );
}

export default Big;