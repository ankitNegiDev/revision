import './App.css'
import NameChange from './component/01_NameChange/NameChange.jsx';
import Task from './component/02_Task/Task.jsx';
import {Counter} from './component/03_Task/Counter';
import { Counter2 } from './component/03_Task/Counter2.jsx';
import { ButtonCounter } from './component/04_Task/ButtonCounter.jsx';

function App() {

    return (
        <>
            <div>app component</div>
            <NameChange/>
            <hr/>
            <Task/>
            <hr/>

            <Counter/>
            <hr/>
            <Counter2/>
            <hr/>
            <ButtonCounter/>
        </>
    )
}

export default App
