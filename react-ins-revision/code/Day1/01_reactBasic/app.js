// (1) now we want to add a new elemnt inside the root div using simple js .. 

// sleect the element and then do manipulation

let rootObj=document.getElementById("root");
console.log("rootobj is : ",rootObj);

// to add a new element we need to create a new element.
const newObj=document.createElement("div");
console.log("new obj is : ",newObj);

newObj.innerText="this is new div created inside the root div using plane js";

rootObj.append(newObj);


// (2) now we want to add a new element in the root div using the react..

// now inorder to create a new element we have a function in react -- React.createElement() that takes first argument as the tag we want to create , seond is props that we want to send and third is the content that we want to pass.

function App(){
    // return React.createElement('h1',{},"this is h1 heading created by react inside root div"); // this is how we can create single element
    return React.createElement("div",null, "this is div",React.createElement("h2",null, "this is h2 heading"));
}

// let root=ReactDOM.createRoot(rootObj);
// root.render(App());


// (3) but if i want to use jsx instead of plane js to --  so for this we neeed to add a babel cdn.

function App1() {
    return React.createElement(
        "div",
        null,
        "This is div created using compoennt just like jsx ",
        React.createElement("h2", null, "This is h2 heading mimic the jsx ")
    );
}

const root1 = ReactDOM.createRoot(rootObj);
root1.render(React.createElement(App1));

// now to avoid all these things -- we can use bundelers like vite , cra to create our react app...
