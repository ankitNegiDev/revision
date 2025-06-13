
import './App.css'
import { Counter } from './component/01_UseEffect/Counter'
import { Demo } from './component/01_UseEffect/Demo'
import Timer from './component/01_UseEffect/Timer'

function App() {

    return (
        <>
            <div>useEffect</div>
            <Counter/>
            <hr/>
            <Demo/>
            <hr/>
            <Timer/>
        </>
    )
}

export default App
