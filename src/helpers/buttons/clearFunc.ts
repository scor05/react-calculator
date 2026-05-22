import type { Props } from '../types/props.ts'
function clearFunctionHelper({ setValue: setCurrOp }: Props, { setValue: setOldNum }: Props,
    { setValue: setCurrNum }: Props, { setValue: setErrText }: Props): void {
    setCurrOp('')
    setOldNum('')
    setCurrNum('')
    setErrText('')
}
export default clearFunctionHelper
