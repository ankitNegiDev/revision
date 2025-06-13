
import './App.css'
import { Macbook, Windows } from './component/01_Laptop/Laptop';
import { Sports } from './component/02_Task/Sports';
// import { Macbook as Apple} from './component/01_Laptop/Laptop'; // using alias

function App() {
    return(
        <>
            <div>my app</div>
            <Windows/>
            {/* <Apple/> */}
            <Macbook/>
            <hr/>
            <Sports/>
        </>
    );
}

export default App


// task 2 is --> create two component one is userName component , and another component as sports then import the userName component in the sport component