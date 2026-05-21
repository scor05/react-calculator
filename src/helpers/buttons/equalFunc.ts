import evalExpression from '../operation/evalExpression.ts'
import type { Props } from '../types/props.ts'
function equalFunctionHelper({ value: currNum, setValue: setCurrNum }: Props, { value: oldNum, setValue: setOldNum }: Props,
    { setValue: setErrText }: Props, { value: currOp, setValue: setCurrOp }: Props): void {
    const operation = `${oldNum}${currOp}${currNum}`
    const evalOp = evalExpression(operation)
    if (!Number.isNaN(Number(evalOp))) {
        if (evalOp.length > 9) { setErrText('TOO LONG'); setCurrNum(''); setCurrOp(''); setOldNum('') } else { setCurrNum(evalOp); setCurrOp(''); setOldNum(''); }
    } else { setErrText(evalOp); setCurrNum(''); setOldNum(''); setOldNum('') }
}
export default equalFunctionHelper
