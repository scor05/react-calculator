import Calculator from "./components/Calculator/Calculator"
import { useState } from 'react'

function App() {
    const [currNum, setCurrNum] = useState('')
    const [oldNum, setOldNum] = useState('')
    const [currOp, setCurrOp] = useState('')
    const [errText, setErrText] = useState('')
    const settings = { maxLength: 9, maxChars: 120 }
    return (<Calculator currNum={currNum} setCurrNum={setCurrNum}
        oldNum={oldNum} setOldNum={setOldNum}
        currOp={currOp} setCurrOp={setCurrOp}
        errText={errText} setErrText={setErrText}
        settings={settings} />
    )
}

export default App
