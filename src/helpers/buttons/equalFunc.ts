import evalExpression from '../operation/evalExpression.ts'
import type { Props } from '../types/props.ts'
function equalFunctionHelper({ value: currNum, setValue: setCurrNum }: Props, { value: oldNum, setValue: setOldNum }: Props,
    { setValue: setErrText }: Props, { value: currOp, setValue: setCurrOp }: Props): void {
    const operation = `${oldNum}${currOp}${currNum}`
    const evalOp = evalExpression(operation)
    if (!Number.isNaN(Number(evalOp))) {
        const num = Number(evalOp)
        if (Number.isInteger(num)) {
            if (String(num).length > 9 || num < 0) { setErrText('ERROR'); setCurrNum(''); setOldNum('') }
            else { setCurrOp(''); setCurrNum(evalOp); setOldNum(evalOp) }
        } else {
            const chars = evalOp.split('.')[0].length
            if (String(num.toFixed(2)).length > 9 || num < 0) { setErrText('ERROR'); setCurrNum(''); setOldNum('') }
            else { setCurrOp(''); setCurrNum(num.toFixed(8 - chars)); setOldNum(num.toFixed(8 - chars)) }
        }
    } else { setErrText('ERROR'); setCurrNum(''); setOldNum(''); setCurrOp('') }
}
export default equalFunctionHelper
