import evalExpression from '../operation/evalExpression.ts'
import type { Props } from '../types/props.ts'
function operatorFunctionHelper({ value: currNum, setValue: setCurrNum }: Props, { value: oldNum, setValue: setOldNum }: Props,
    { setValue: setErrText }: Props, { value: currOp, setValue: setCurrOp }: Props, btnOperator: string): void {
    const operation = `${oldNum}${currOp}${currNum}`
    const evalOp = evalExpression(operation)
    if (currOp != '') {
        if (!Number.isNaN(evalOp)) {
            if (evalOp.length > 9) { setErrText('TOO LONG'); setCurrNum(''); setCurrOp(''); setOldNum('') } else { setCurrNum(evalOp); setCurrOp(''); setOldNum(''); }
        } else { setErrText(evalOp); setCurrNum(''); setOldNum(''); setOldNum('') }
    } else { setCurrOp(btnOperator); setOldNum(currNum); setCurrNum(btnOperator) }
}
export default operatorFunctionHelper
