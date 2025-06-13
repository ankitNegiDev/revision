import './App.css'
import { Button } from './component/Button.jsx'; // named import.
import Car, { Bmw, RollsRoyce } from './component/Car.jsx';
import Person from './component/Person.jsx';
function App() {
    return (
        <>
            <div>my first div</div>
            <Button/>
            {/* person without props */}
            {/* <Person/>  */} 

            {/* person with props or passing props in a component */}
            <Person name="bingolive" age={23} city="seattle"/>
            <Person name = "anki" age={45} city="vladivostak"/>
            <Person name = "xyz" age={23} city = "russia" />
            <br/>
            <hr/>

            {/* multiple component in a single file */}
            <Car/>
            <hr/>
            <RollsRoyce/>
            <hr />
            <Bmw/>
        </>
    );
}

export default App
