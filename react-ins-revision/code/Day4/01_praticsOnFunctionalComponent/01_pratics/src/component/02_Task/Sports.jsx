import { UserName } from "./UserName";

function Sports(){

    return(
        <>
            <h1>Sports component</h1>
            <p>first call for userName component</p>
            <UserName name="bingo" age={23} city="seattle" address="russia"/>
            <hr/>
            <p>Second call for userName component</p>
            <UserName name="anki" age={34} city="validvostak" address="russia"/>
        </>
    );
}

export {Sports};