// what is react ...
/**
 * react is javascript library.. or we can say its component based library.
 * React is a fronted javascript library
 * react is maintained by facebook.
 * the reason why we choose react is becsue -- react is very much  in demand and it have lot of usecases which actually means it is really good.
 * job oppertunity.
 */

// difference b/w library and frameworks..
/**
 * library are flexible.. library includes function class etc and we as a devloper had a choic how we want to use them.
 * frameworks is rigid and it comes with its own burden and rules and frameworks are heavy at code and framework does a lot of thing automatically. eg -> angular.., view --
 * one more thing -- library mostly are unopeniated -- means they does not enforce us to do some task in the some fixed way.. whereas in frameworks they enforce us to do task in a specific way.

 * we can say library is a combination of small - small function which are grouped togther  inorder to perform a task just like we have Math library. where as framework can be a collection of multiple library.
 */

// advantages of react ..
/**
 * fast rendering
 * jsx -- means we can write html and js togther
 * virtual dom
 * react is a  component based architure it simply means we divide our code into small-small reusable component.
 * react create spa (single page application) and because of spa there is no reloading.
 * it only render the changed part not the entire ui.
 */

// disadvantage of react..
/**
 * in react data flow is unidirectional -- means data will flow from parent to child.
 * in react seo is very bad. because react follow the ajax request and in ajax request no new html is created so browser think its the same page so a new page that is created in react will have poor seo..
 * react is only for frontend..
 * it does not have its own router for routing we install another library which is called -- react router dom.
 */

// What is an AJAX request?
/*
 * AJAX stands for Asynchronous JavaScript and XML.

    It refers to a technique that allows web pages to communicate with a server in the background without reloading the page.
    So when we say AJAX request then we just mean that ----->
        A request is made asynchronously to the server using JavaScript inorder to get or send data most of time without reloading the full web page. --- just we did in yt project -- to get all the videos , user etc..

 * There are three main tools that we use to make AJAX requests in modern web apps
    (1) XMLHttpRequest
    (2) fetch() -- its a js builtin function -- promise based -- we can use async await.
    (3) axios -- A third-party library that wraps around XMLHttpRequest and adds some additional features like automatic JSON parsing (which is not in fetch), timeout handling and so on..

 * using this AJX request (fetch(),axios) ultimately we ared doing CSR.
*/

// virtual dom.
/**
 * virtual dom compare currently visible dom to the about to be dom
 * and the current dom and the about to be dom must be having some difference and virtual dom checks the difference b/w these two and only the different part will be rendered.
 */

// what is react fiber.
/**
 * React Fiber is the internal rendering engine of React (since version 16) that enables interruptible, prioritized, and incremental rendering.
 * It improves performance by allowing React to pause, resume, or discard work based on priority, enabling features like concurrent rendering and suspense.
 */


// re-concilliation
/**
 * Reconciliation is the process that React uses to update the DOM by comparing the new virtual DOM with the previous one.
 * It determines the minimal number of changes needed to update the UI efficiently.
 */

// diffing algorithm
/**
 * The diffing algorithm is part of the reconciliation process.
 * It efficiently compares the old virtual DOM with the new one by assuming components with the same type will result in a similar tree structure.
 * This helps React identify and apply the smallest set of changes to the real DOM.
 */

// what is component --
/**
 * component is nothing but a re-usable ui elements.
 * if there is an element that is being used multiple times then we don't need to code it repetedly we can simply write it once as a component and used it whereever , whenever we need it.
 */


// react and react-dom
/**
 * the role of react library is to create something
 * the role of react-dom library is to disply something that is created by react library.
 */


// react.createElement() takes first arguement as element name , second is a prop or attribute (key-value pair) like id:"root" and third is content or child element that is contnet of parent.


// by default type of script tag is type = "text/javascript" for babel we will be using type="text/babel"

// vite parsel are bundelers..
// what is bundelers ->


// what is jsx --
/**
 * jsx is nothing but a html like syntax that is compatible with javascript or we can say jsx is a html like markup that we use in react.
 * jsx is independent of react its not like that React exist that's why jsx exist or vice versa.
 * internally react will convert this jsx code into the plane js code -- and this process of converting jsx code into the plane js or conversion of code of one programming language into another programming language is called transpiliation.
 * just for learning purpose we can use babel -- but when we do creaate react app (depricated now) or vite -- then these have their own transpilers.
 */

/**
 * JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML.
 * It allows us to write UI components in a more readable and declarative way using an HTML-like structure inside JavaScript.
 * JSX is not required by React, but it is commonly used with it.
 * Internally, JSX is transpiled (converted) into plain JavaScript using a tool like Babel.
 * For example: <h1>Hello</h1> becomes React.createElement("h1", null, "Hello")
 *
 * JSX makes it easier to describe the UI, and tools like Babel (or Vite’s built-in transpiler) handle its conversion during the build process.
 */


// declarative and imperative way of programming--
/**
 ** Imperative -- in simple language imperative programming is when we write all the logic manually like i want this this and for that we write whole logic like first do this then this and son on. example -- suppose we want to print all the elements of a array then we create first a array then run a loop and then print all elements of array -- this is what we call imperative way of programming.

 *? Declarative -- in declarative we tell what we want to do and we don't care about how things are done behind the secence.. ex-- we write db.collectionName.find() by using this command we tell only this thingg -- that we want all the user that are present in inside the userCollection inside the db but how internally odm is making call to mongodb and how mongodb is fetching all these user and how they are giving repsonse we don't care at all ..
 * another example is -- react is also declarative in nature -- means we tell we want this this element and react create those eelment for us.
 */


//  chatgpt version---
/**
* 🛠️ Imperative Programming:
* - In imperative programming, we explicitly tell the computer *how* to do something step-by-step.
* - We control the flow and logic manually.
* - Example: To print array elements, we create a loop and print each item ourselves.
*
*    const arr = [1, 2, 3];
*    for (let i = 0; i < arr.length; i++) {
*      console.log(arr[i]);
*    }
*
* 🧘 Declarative Programming:
* - In declarative programming, we describe *what* we want to achieve, not *how* to do it.
* - The underlying system handles the logic and execution for us.
* - Example:
*    arr.forEach(item => console.log(item));
*    or in MongoDB: db.users.find()
*    or in React: return <h1>Hello</h1>;
*
* 🧠 Summary:
* - Imperative = manual, step-by-step instructions (how to do)
* - Declarative = describe the goal (what to do), let the system handle the rest
*/


// setting react app --

/**
 ** (1) using create react app --

    *? Step 1: Install Node.js
        Make sure you have Node.js installed. You can check by running:  node -v
    
    *? Step 2: Create a React App
        Run the following command in your terminal: npx create-react-app my-app/or any name u want to give ur react app.
    
    *? Step 3: Navigate to the Project Directory
        Once the setup is complete, go to the project folder: cd my-app/ or any name u gave to ur react app.
    
    *? Step 4: Start the Development Server
        Run the following command to start the React app:  npm start
        This will start a local development server, and the React app will open in your browser at http://localhost:3000.

  * keep in mind that this CRA is now depricated -- and we don't use it now -- one of the reason may be because it is slightly slow as compare to vite and ohter bundelers.
 */


/**
 ** (2) using vite

    *? Step 1: Install Node.js Recomended
        Ensure that Node.js is installed by checking the version: node -v

    *? Step 2: Create a Vite React App
        To create a new React project using Vite, run the following command: npm create vite@latest my-vite-app --template react 
    
    *? Step 3: Navigate to Project Directory
        After the setup is complete, navigate to the project folder: cd my-vite-app

    *? Step 4: Install Dependencies
        Run the following command to install the required dependencies: npm install
    
    *? Step 5: Start the Development Server
        Run the following command to start the Vite development server: npm run dev

    //! or we can use below one --

    *? step 1 => npm create vite@latest
    *? step 2 => set the Project name (MyFirstProject or anything else)
    *? step 3 => set the Package name (myfirstproject or anything u want)
    *? step 4 => Select a framework (choose react only since we are working on react)
    *? step 5 => Select a varient (choose javascript skip javascript+swc)
    then run 
    cd project name
    npm install 
    npm run dev
 */


// --- DAY 2  and DAY 3---- folder structure and component basics.-----------
// folder structure.
/**
 ** (1) Node modules -> 
    * purpose of node modules is to store all the code of all dependencies.
    * basically on whatever library , framework , packages that our package depend and their dependcy are written inside the package.json but their actual code is present inside the node_modules forlder.
    * The `package.json` file lists all the libraries, frameworks, and packages that our project depends on.
    * It only mentions their names and version ranges (e.g., "react": "^18.2.0").
    * The actual code of those packages — and all of their internal dependencies — is downloaded and stored in the `node_modules` folder when we run `npm install`.
    * So, `package.json` is like a recipe, and `node_modules` is the actual pantry filled with ingredients.

 ** (2) package.json ->
    * first and formost thing package.json is a json file means all the data will be in json format.and package.json - tells about all the meta data related to our project.
    * meta data means - data about data or some extra information.
    *? `package.json` file store the meta data about the project. like name of the project , version and  dependencies like on what other library this project depend.
    * for example our vite project depend on the react and react-dom library.

 ** (3) package.lock.json ->
    * The package-lock.json file keeps a record of all installed dependencies and their exact versions. It also tracks any additional dependencies that these packages rely on ensuring consistency across installations.
    * package.lock.json - tells about exact version
    * The dependencies and devDependencies sections contain all the libraries on which our project depends on.
 */

// Node modules --->
/**
* This folder contains all the installed packages (dependencies) required for your project.
* You should never edit files here manually.
* It is automatically created when you run `npm install`.
*/

// public -->
/**
 * This folder contains static files like `index.html`, images, icons, etc.
 * In a React app, the `index.html` file is the single HTML page where your React app is injected.
 * Everything inside `public` is directly served as-is by the server.
 */

// src -->
/**
 * This folder contains all your actual source code: React components, JS files, CSS, etc.
 * This is the core of your application — your logic, UI, and functionality are written here.
 */

// .gitignore
/**
 * This file tells Git which files or folders to ignore in version control.
 * Common ignored items: node_modules, build, .env, log files.
 */

// package.json
/**
 * This file holds metadata about the project like:
 * - project name, version
 * - scripts (like start, build)
 * - list of dependencies and devDependencies
 * - used by npm and others to manage and run the project
 */

// package-lock.json
/**
 * This file locks the exact versions of installed packages.
 * It ensures consistent installs across all environments and team members.
 * Automatically updated when you run `npm install`.
 */


// how the flow will look like -->

/**
 * there is a html file or index.html
 * now main.jsx will have access of index.html and app.jsx
 * now this app.jsx will have access of all rest of our component.
 * <-- browser render this html <------ Html <---- main.jsx <------ app.jsx <---- component 1 , component 2 , compnent 3 ........ component N
 */


// how to clean up a vite project
/**
 ** Step 1 =>
    first go inside the src folder --> head to app.jsx --- remove all the code from return() and make it like return (<> <div> first div </div></>);
    * then remove this usestate , all the imports above except for import './App.css' its imp for when we wil write custom css or integrate tailwind.
 ** Step 2 => 
    go inside the app.css remove all the css 

 ** Step 3 => 
    go inside the index.css remove all the css..

 * boom all good.
 */


//  what is a component -->
/**
 * in simple terms component is a page that we want to create or a functions. or we can thought component as a function or class that returns some JSX which describe what should appear on the screen or page.
 * the main usecase or i would say the main advantage of component is -- using component we can break our ui into small small independent reusable elements or parts.
 ** component is nothing but a re-usable ui elements.
 * if there is an element that is being used multiple times then we don't need to code it repetedly we can simply write it once as a component and used it whereever , whenever we need it.
 * The name of a component should always start with an uppercase letter Because this helps React to differentiate components from regular HTML elements.
 * In React component names typically follow PascalCase where each word starts with an uppercase letter.
 * in react component we can't have multipe paraent at the same level -- if at any point of time we need to return multiple element then just wrap them inside the single parent -- but if we did not want to use the div for wrapping becuse we did not want this naa every time we wrapp a new div is added in the dom -- to avoid this we can use react fragmets -- <> </> these are called react fragmets.
 */


// how many types of component in react.
/**
 * their are two types of component one is class based component and another is function based component.
 * class based (older)  dynamic changes ..
 * functional (newer)   static changes ... ====> dynamic changes comes due to hooks..
 */

// how many types of component in react.
/**
 * their are two types of component one is class based component and another is function based component.
    ** (1) class based
        * class based component is older one and less comman in modern react.
        * class baed component are created using the classess.
        * class based component are statefull and can have the dynamic cahnges.

    ** (2) function based.
        * function based component are newer and most comman in react.
        * function based component are created using function.
        * these functional component are just simple function -- but the reason why we are calling them as component becsue component return the jsx and a normal function does not return jsx. other then it can return any thing.
        * keep in mind component are also function but a kind of special function that return jsx.
        * functional (newer)   static changes ... ====> dynamic changes comes due to hooks..
 */


// diff b/w function and component
/**
 * function can return any thing but the component will return only jsx or what should be render on ui.
 */


//! forget about this -- just go with this every time to create a component ----- like function MyComponent(){  ... logic return (<> jsx code here </>);} export default MyComponent; or export MyComponent;

//! not recomended ------------------------------------------------
// rafce
// rfce
// rfac => arrwo function export in smae line
// rfc => normal function export in same line
//!------------------------------------------------------------------------------

// whatever the file name is the same will be component name.

/**
 * component ..
 * function app(){
    // -------- statement , for let var 
    return (jsx);
    // map , foreach , filter, ternerary operator.
}
 */

function app() {
    // -------- statement , for let var , if else , loops etc  we can write here 
    return (jsx);
    // map , foreach , filter, ternerary operator.(inside the return)
}


// to call a component we can call like thie <Person/> or <person> </person>


//todo ============================================ component details in cleaner way ==================================

// Component definition (Functional Component)
function App() {
    // here we can  can write any JavaScript logic here: variables, loops, if-else, etc.

    return (
        <div>
            {/* Inside JSX, you can use: */}
            {/* map, forEach ( forEach doesn't return any thing so careful while using it in jsx ... instead go with map), filter, ternary operator, etc. */}
        </div>
    );
}

{/* <Person />          // Correct (self-closing tag) */ }
{/* <Person></Person>   // Also correct (opening and closing tags) */ }
// 🔸 Important Rule: Component names must start with a capital letter(e.g., Person, App, Navbar).
// If we write < person /> with a lowercase p or any lowercase letter then React will treat it as a native HTML element, not our custom component.


// what is props

/**
 * by default when we create a react component then react pass one prameter/argument to our compnoent which is called props
 * props contain all the properties related to a component that we pass while calling the component.
 * typeof props is object so we can say props is a object and we can de-structure it.
 * for each functional component by default react will provide the access of this props.
 * Whenever we need to pass data or parameters to a functional component and later if we want to access them then we cannot access them directly. To access these parameters, we need to use the props object, which is automatically passed by React as a parameter to our component. But how does React know about these parameters? so ---> React picks each parameter from the attributes we provide while calling the functional component and react will club all those parameter inside the props object that we pass while calling the functional component  and making them accessible within our component.
 * one small thing -- this thing we know naa -- parameter name can be different or same as the argument name -- smae thing here --- in a component parameter we can write any name instead of props or we can go with props ..
 */


// chatgpt version

// what are props in react ....
/**
 * In React, when we define a functional component, React automatically passes a special object to it called `props`.
 *
 * The `props` object contains all the values (or attributes) passed to the component when it is used or called.
 * These values allow us to pass dynamic data from a parent component to a child component.
 *
 * - `typeof props` is `object`
 * - We can destructure props for cleaner code
 * - Props are **read-only**, meaning the child component cannot modify them
 *
 * ✅ Think of props like function arguments:
 *    - When we call <User name="Ankit" age={25} />, React passes `{ name: "Ankit", age: 25 }` as the `props` object.
 *    - We can then access it inside the component as `props.name`, or destructure like `const { name, age } = props`.
 */


// keep in mind we can have multiple component in a single file but plse plse avoid it its not recomended at all -- explore about this design principle --- principle of single responsibility.
// this design principle says that its always better or best that a file/module/function/component handel only one thing or having only one single responsibility
// for example -- a file is having a code of printing the array elements -- in the same file we are having the logic of fetching next element of array -- so ultimately it voilets the SRP.


// chat gpt version

/**
 * Yes, technically we can define multiple React components in a single file.
 * However, this is **not recommended** for real-world or production code.
 *
 * 📌 Why? Because it breaks the **Single Responsibility Principle (SRP)**.
 *
 * 👉 SRP is a software design principle from SOLID principles that says:
 *     "Every module/class/component should have only one reason to change."
 *
 * If a file contains multiple components, it becomes harder to:
 *  - Understand
 *  - Test
 *  - Maintain
 *  - Reuse

 * 🚫 Bad Example:
 *    - A file that handles UI rendering **and** performs data fetching or array manipulation logic together.
 *    - If we later need to change either the UI or the logic, this file will change for multiple reasons — violating SRP.
 *
 * ✅ Instead, follow best practices:
 *   - Keep one component per file. or Put each component in its own file.
 *   - Export it properly (default or named).
 *   - Keep files focused on one task or component.
 *   - Separate concerns (e.g., keep UI logic and data logic in different files).
 *   - Makes code cleaner, more maintainable, and easier to test.
 */




// jsx is not able to render some js value like null , undefined , true , false etc. why ??
/**
 * if we want to see then we will convert them into string formt  -- and for that we have  json.stringfy and tostring()
 * keep in mind for undefined -- it will never be visible event after converting it into the stirng.
 ** for code plse refere to --> Day 3 -- 01_moreoncomponent --> components -> variables.jsx
 */

// array and objects in jsx --
/**
 * if we simple create a array or object --- and just try to render it then it will give a error on console that object are not valid react child. But we can access object property like obj.keyName something like this ..
 * in case of array we can use map to iterate
 */

// looping in react
/**
 * for looping we will be using most of time map but keep in mind while loop we will render it in like para graph tag or any other component -- so for each element of array there will be a tag or component -- and for each component or tag there should be something naa that uniquely identify each child --- so for this react uses key-prop and we need to pass that.
 * most of time -- we will be using key prop as a uniquie value  and for that we can use uuid but in that case our array should have a object where id and value are put like this arr=[{id:uuidv4(),value:10},{}] and so on --
 */

// Quick notes or keep in mind

// component ->
/**
 * it is nothing but a simple function that reutrn jsx.. (above and below return)
 */

// hooks ->
/**
 * hooks are also function that are design to perform some specific task.
 */

// props
/**
 * props are nothing but object inside which we can define properties.. (like passing the args from the component and collect it in props (distructure)) or like attributes (just like tags)
 * we can think of props as the arguments of a function or like attribute of a tag.
 * props are immutable.
 */

// states
/**
 * states in simple language are varaible which can change and that change is refelected on the ui.
 * state is the memory of a component.
 * states are immutable
 */



// DAY 3 ---- How to handel events in React ---

// what is event --
/**
 * evnt is nothing but a kind of user action based on which we perform some task.
 * we can say event is nothing but a kind of notification that some thing has happend. in context of web-devlopement or react this something is often refere as user action like user click , input , mouse move or remove etc or a browser action like page reloading , error occuring and  Based on these events we can trigger a specific JavaScript code (event handlers) to perform tasks, update the UI, or make our application interactive.
 * handeling event in react is quite similar to how we handel event in js..but with few differences in syntax.
 */

// there are two way using which we can pass the onClick event handeler ---
/**
 * (1) if there is like a scenerio where we did not need to pass any argument then just go for it like this ---->    <button onClick={handelClick2}>click me 2</button>
 * (2) if there is a case we want to pass the arugment in the event handeler function and based on that argument like index we want to filter out or delete it or do whatever logic for that case either --- do like this __<button onClick={handelClick3(10)}>click me 3</button> and define the handelClick3() where it return another function so which eventually becaomes the value when user click on button that function will execute..
 * else go with this --->   <button onClick={function (){handelClick4(100)}} > click me 4</button> ------> keeep in mind we can use arrwo function but i generally did not perefer it --
 * disadvantage of arrow function --> can't used in recursion , hard to understand in call stack , hard to de-bug if function is big and nested one , generally there is not performance issue in using arrow or normal function
 * advantage of arrow function -> for short and concise syntax -- this behavie lexically -- which also becaome drawback in some case and in some case it become the advantage.
 */

// why we need states --

/**
 *
function Task2(){
    let name="bingolive";
    console.log("starting name value is : ",name);
    function handelClick(){
        name="anonymous";
        console.log("value of name is changed on click : ",name);
    }
    return(
        <>
            <div>task 2 of Day 3 class</div>
            <h1>name : {name}</h1>
            <button onClick={handelClick}>logout</button>
        </>
    );
}

export default Task2;

the main problem this name varaible is not tracked by the react and just because of this there is no changes in ui--- keep in mind just because of this the name is changed in console but this name varaible is not ttracked by react so it will not caused any re-render ideally it should cause a re-render when name value is changing..
* so if we are thinking ohh react can't do any changes in the variable --- that simply means we are wrong because react has a capability to change the varaible but because component is not re-rendered so no changes are shown in ui.
* just because of this we need the states --- and for that we have a special hook which is called useState()...
 */

//? react has capability to change the variables but the component is not re-render on the change of normal variable because of that we can't see changes in ui..


// what are hooks
/**
 * in simple terms -- hooks are also function just like component are functions
 * react hooks are just special function that are designed to perform some special task.
 ** The term "hooks" is just a name given by React to these special functions.
 *? Hooks are nothing but a category of functions that are doing some special task and out of those hook one hook is `useState.`
 ** we can also create our own hooks because hooks are just simple functions and we can create simple functions.
  * to identify the hooks in the code just look that if something start with use. like useUserLoginInfo() , useAuth() like this we can create custom hook based on our usecase..
 */

// Why hooks were interduced...
/**
 * so in react we have two type of component and earlier we use class based component inorder to show the dynamic changes or dynamic content and we use functional component for static content
 * But later react give support to functional component that they can also show the dyncamic content that's why hooks were interduced.
 * earlier we called class based component as stateful and function component as state less.
 */

// why react hooks were interduced ..  (refer notes)
// functional component are stateless where as classbased component are stateful so to make the functional compneont stateful react interduced the hooks concept...


// ========================== DAY 4 ------------------------=================



// props can be considred as the arguments of a function or attributes of a tag..
// state are variable which are tracked by react and on chnages on the state variable that chnges will be reflected on ui.



//! keep in mind -- when a parent pass the props to the child then child can't do any changes in those passed props--- that simply means props are immutable..

//! states are mutable and props are immutable.

//? sam -> states are mutable..

// ❓ Why are props immutable in React? --- in one line -- its design choice of react -- we can't do any thing it is what it is .. accept and move ahed.

// Props are immutable by design because React follows a unidirectional data flow — data flows from parent to child.Here's why immutability matters:
/**
 * 🔧 1. Predictability of Components
When props don't change unexpectedly, components behave predictably. You always know:

"This component's output depends on the props it receives."

If props change, it's because the parent decided to change them.

🔄 2. Unidirectional Data Flow
React uses top-down data flow (parent → child). Allowing children to change props would break this model and make debugging/reactivity harder.
🧠 3. Component Reusability and Purity
Props are often used in pure components, which are:

Functions that return the same output for the same input.

Easy to test, debug, and optimize.

Making props immutable helps keep components pure and reusable.

🔄 4. Encourages Better Design
Immutability forces you to think in terms of data ownership:

State (data that can change) lives in the component that owns it.

Props (input data) come from parents.
 */


// what is state -->
/**
 * react can read and change variable but react can't track the changes in the normal variable due to which there is no effect on ui..
 ** state is a component memory..
 * state are mutable.. (we can change the state ..)
 */


// useState() -->
/**
 * useState() is a hook that return a array where first element is the state variable and second element is the updater function

 * the reason why we have updater function is because --- we can't change the value of a state varaible with assignment operator like this stateVariable="value changed" ... that's why useState() gives us a updater function that update the value of this state varaible..

 ** updater function --> keep in mind this updater function also takes a callback function and its expect a paramter which is previousValue or any name and this will have the previous value of state --  setInput(function (previousValue){... logic})

 *? keep in mind this updater function run asynchronously...and js will won't there and it will execute next line ---

 * useState() is imported from react by named import --- like this import {useState} form 'react'
 */


// Batching..

// ! whenever there is a change in state the components re-renders..

// Q - If we call setCount(count + 1) five times one by one inside a React function component then why does the state only increment by 1 instead of 5? How we can resolved this behavior

/**
 * So when we call setCount(count + 1) five times in a row then we expect the state to increment by 5 (which seems logical if we don't know until -- setCount() or updateer function of useState() runs asynchronously). However it only increases by 1. This is because React does not apply each state update immediately. Instead of this  React batches these updates to optimize performance and re-renders.

// chat gpt version ...

In a functional component, count is a fixed value for that particular render.

When you call setCount(count + 1) then we are not updating the actual state immediately — we are scheduling a new state update, which will happen after the current render completes.

Since React batches all five setCount(count + 1) calls during the same render, each one uses the same old value of count (let's say 0), and they all schedule setCount(1).

As a result, React ends up setting the state to 1, not incrementing by 5.
 */

// Batching
/**
 * in simple terms batching means React collects or groups  multiple state updates or all state updates together and applies them in one go -- instead of re-rendering after every single update.
 * becuse it will ultimately slow down our application because -- lets assume we have a large scale application and there is a component that takes too much time to render so our task as a developer will be naa to optimize it so that it won't re-render unnecessarly --- just because of this react also do optimization for performance -- by scheduling states updates and then execute all of them at a single time that means for each state update our component will not render as soon as that state is changed ... once all state changes are collected and then all are applied in a single go.
 */

// Why batching ??
/**
 * As we mentioned to improve performance  by renducing the re-renders and which ultimately result into faster UI or fast application.

 * That means react will not re-render the component 5 times in a row unnecessarily when we call the setCount() 5 times.
 */

// example or anology
/**
 * assume that we are writing some thing on our notbook and when we write first word its not like that naa after writing a single word we flip the page --- we flip the page only when we write whole para / sentence or our desired content.

// chat gpt version

 * Imagine you're writing in a notebook:
 * Instead of flipping the page after every word, you write the whole sentence first, then flip.
 * That's batching — grouping changes, then reacting.
 */


// ! whenever there is a change in state the components re-renders.. keep in mind


// ---------------- useEffect()-----------------------------
// hooks
/**
 * hooks are nothing but a kind of special function that helps us to perform some task.
 */

// useEffect()
/**
 * useEffect() will be used only when we want to perform some side effect.
 * side effect  means that directly does not change the dom..
 *
 */
// api calling(fetch , axios) , setTimout , setInterval.,


// useEffect()..
/**
 ** useEffect() take two args one is a callback and another is a dependency array.
 *? when does the useEffect() runs ---> when the component is rendered for the first time.. , second time is when there is something in the dependcy array and that thing changes.. most of time in dependency we will pass the state variable.
 * whatever code we write inside the callback of useEffect that will run two times ---
    * (1) first is when the component is mounted or when the component is added to dom for the first time.
    * (2) second time is when component re-renderred or updates.

 * dependency array allows us to specify which state variables should trigger the effect to run again when they change.
 *todo => useEffect() is also a named export and named import-- just like useState()..
 */

//  dpendency array. class--
/**
 * (1) if dependecy array is not pass .. useEffect()callback will execute when the component is loaded for the first time and second is when the component is re-render does not matter who re-render the component.
 * (2) if dependcy array is empty .. the component will render only for the first time on load
 */

//  in depth cases of dependency array ---
/**
 ** (1) when no dependcy array is passed ..
    * if we did not pass any dependency array in the useEffect() hook then the callback of useEffect() will run only when the component is added for the very first time added to dom and when the component is updated or re-rendered..offcos.
    * eg -> useEffect(function callback(){--- some logic ----});

 ** (2) when empty dependency array is passed.
    * when we pass the empty dependency array in the useEffect() then the callback of useEffect() will run only when the component is added to the dom for the very first time and the callback or effect will not run when the compnonent updates or re-rendered.

 ** (3) when dependency array is having some value --
    *  when we want that our effect or callback will execute when the component is loaded for the first time and not on every time when the component is re-rendered or update instead we want that when there is a change is our specific state variable then we want to execute our callback or effect. so for this we can pass the state variable inside the depency array.
 */


// todo => if there is not dependecy array in the useEffect() then useEffect() will execute when the component is loaded to dom for the first time and second is when the component re-rendered or update.

// cleanup function
/**
 * whenever we try to return a function from the useEffect then it is called cleanup function
 * it will run b/w two re-renders.. like before render 2 the clenaup will be runned.
 */


// ====================== Day 5,6 ==========================

// useEffect() continue
/**
 * code --- 
 */

// Day === 7

// memo , useMemo , useRef ... hooks

// divide our component as much as u can ....
/**
 * this line measn we will divide our component as much as we can -- which means break our component into smaller - smaller pieces so that it wont affect each other means each component will be independent of each other..
 *
 */
// memo and useMemo and useCallback all three are different..

// memo
/**
 ** memo is not a hook its a function that will check is our prop is changed or not. if props are changed then component will re-rendered But if props are not changed or props are same then component will not re-rendered.
 *? usecase of memo -- > memo helps us to reduce the no of re-render of a component when props are same ...

 * memo is just a function and it check our props. keep in mind memo is not a hook.
 * memo will check that is our prop is changed or not.
 * if props are changed then component will be re-rendered.
 * But if props are not changed or props are same then component will not be re-rendered.
 * memo helps us to reduce the no of re-render when the props are same of a component .
 */

// useMemo() hook
/**
 * useMemo() is a hook that re-member or memoisized the output and does not evaluate it agian.
 * if we want to memoisized the output then we will use the useMemo() hook.
 * syntax ====> let returnedValue = useMemo(()=>{},[depdency array])
 */

// input
/**
 * whenever we create input then these input are called uncontrolled input..
 * to convert it into the controlled input -> (1)interduced new state, (2) add value property in input which is mostly state.,  (3) and add a event
 */

// useCallback and useMemo  and memo diff

/**
 ** memo
    * memo is not a hook memo is a normal function.
    * memo will be used when props are same it won't re-render the component.


 ** useMemo
    * it is a hook
    * it memomizes the value / output  so that un-necessary computation are avoided.


 ** useCallback
    * it is a hook
    * it memomizes the function.
    *
 */

//  number ,string , boolean all are passed by value
// array , obj, function are passed by reference.