import Display from '../Display/Display'
import Keyboard from '../Keyboard/Keyboard'
import type { CalculatorProps } from '../../helpers/props'

function Calculator({ currNum, setCurrNum, oldNum, setOldNum, currOp, setCurrOp, errText, setErrText, settings }: CalculatorProps) {
    const stateProps = {
        currNum: { value: currNum, setValue: setCurrNum },
        oldNum: { value: oldNum, setValue: setOldNum },
        currOp: { value: currOp, setValue: setCurrOp },
        errText: { value: errText, setValue: setErrText },
    }

    return <div className="calculator"><Display text={errText === '' ? currNum : errText} config={settings} /><Keyboard {...stateProps} /></div>
}

export default Calculator
