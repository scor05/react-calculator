import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import type { CalculatorProps } from '../../helpers/types/props'
import './Calculator.css'
function Calculator({ currNum, setCurrNum, oldNum, setOldNum, currOp, setCurrOp, errText, setErrText, settings }: CalculatorProps) {
    const stateProps = {
        currNum: { value: currNum, setValue: setCurrNum },
        oldNum: { value: oldNum, setValue: setOldNum },
        currOp: { value: currOp, setValue: setCurrOp },
        errText: { value: errText, setValue: setErrText },
    }
    const displayText = errText === '' ? (currNum === '' ? '-' : currNum) : errText
    return <div className="content"><h1 className="content-h1">The Most Blazingly Fast Calculator.</h1><h2 className="content-h2">Now at your fingertips</h2><div className="calculator"><Display text={displayText} config={settings} /><Keyboard {...stateProps} /></div></div>
}
export default Calculator
