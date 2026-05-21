import evalExpression from '../operation/evalExpression.ts'
import type { Props } from '../types/props.ts'
function operatorFunctionHelper({ value: currNum, setValue: setCurrNum }: Props, { value: oldNum, setValue: setOldNum }: Props,
    { setValue: setErrText }: Props, { value: currOp, setValue: setCurrOp }: Props, btnOperator: string): void {
    const operation = `${oldNum}${currOp}${currNum}`
    const evalOp = evalExpression(operation)
    if (currOp != '') {
        if (currNum === '') { setCurrOp(btnOperator); return }
        if (!Number.isNaN(Number(evalOp))) {
            if (String(evalOp).length > 9) { setErrText('TOO LONG'); setCurrNum(''); setOldNum('') }
            else { setOldNum(evalOp); setCurrNum(evalOp); setCurrOp(btnOperator) }
        } else { setErrText(evalOp); setCurrNum(''); setOldNum(''); setCurrOp('') }
    } else if (currNum !== '') { setCurrOp(btnOperator); setOldNum(currNum); setCurrNum('') }
}
export default operatorFunctionHelper
