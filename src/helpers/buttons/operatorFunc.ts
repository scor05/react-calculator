import evalExpression from '../operation/evalExpression.ts'
import type { Props } from '../types/props.ts'
function operatorFunctionHelper({ value: currNum, setValue: setCurrNum }: Props,
    { value: oldNum, setValue: setOldNum }: Props,
    { setValue: setErrText }: Props, { value: currOp, setValue: setCurrOp }: Props, btnOperator: string): void {
    const evalOp = evalExpression(`${oldNum}${currOp}${currNum}`)
    if (currOp != '') {
        if (currNum === '') { setCurrOp(btnOperator); return }
        if (!Number.isNaN(Number(evalOp))) {
            const num = Number(evalOp)
            if (Number.isInteger(num)) {
                if (String(num).length > 9 || num < 0) { setErrText('ERROR'); setCurrNum(''); setOldNum('') }
                else { setCurrOp(btnOperator); setCurrNum(evalOp); setOldNum(evalOp) }
            } else {
                if (String(num.toFixed(2)).length > 9 || num < 0) { setErrText('ERROR'); setCurrNum(''); setOldNum('') }
                else {
                    setCurrOp(btnOperator)
                    setCurrNum(num.toFixed(8 - evalOp.split('.')[0].length))
                    setOldNum(num.toFixed(8 - evalOp.split('.')[0].length))
                }
            }
        } else { setErrText('ERROR'); setCurrNum(''); setOldNum(''); setCurrOp('') }
    } else if (currNum !== '') { setCurrOp(btnOperator); setOldNum(currNum); setCurrNum('') }
}
export default operatorFunctionHelper
