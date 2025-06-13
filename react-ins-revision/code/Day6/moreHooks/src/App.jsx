
import './App.css'
import UseMemo from './component/02_Usememo/UseMemo'
import Task1 from './component/03_Task/Task1'
import Task2 from './component/03_Task/Task2'
import Big from './component/Big'

function App() {


    return (
        <>
            <div>more hooks</div>
            <Big/>
            <hr/>

            <UseMemo/>
            <hr/>
            <Task1/>
            <hr/>
            <Task2/>
        </>
    )
}

export default App
