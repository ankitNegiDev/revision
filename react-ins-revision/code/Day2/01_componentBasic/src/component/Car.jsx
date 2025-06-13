// a file having multiple component ---- //! not recomended.. plse avoid it --

function Car(){

    return(
        <>
            <h1>my Car component</h1>
            <RollsRoyce/>
            <Bmw/>
        </>
    );
}
export default Car;

function RollsRoyce(){
    return(
        <>
            <h1>Rolls Royce</h1>
        </>
    );
}
export {RollsRoyce};

function Bmw(){
    return(
        <>
            <h1>Bmw</h1>
        </>
    );
}
export {Bmw};