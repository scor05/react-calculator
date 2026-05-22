import Calculator from "./components/Calculator/Calculator"
import { useState } from 'react'
import './App.css'

function App() {
    const [currNum, setCurrNum] = useState('')
    const [oldNum, setOldNum] = useState('')
    const [currOp, setCurrOp] = useState('')
    const [errText, setErrText] = useState('')
    const settings = { maxLength: 9, maxChars: 120 }
    return (
        <div className="content">
            <h1 className="content-h1">The Most Blazingly Fast Calculator!</h1> <h2 className="content-h2">Now at your fingertips</h2>
            <Calculator currNum={currNum} setCurrNum={setCurrNum} oldNum={oldNum} setOldNum={setOldNum}
                currOp={currOp} setCurrOp={setCurrOp} errText={errText} setErrText={setErrText}
                settings={settings} />
        </div>)
}
export default App
