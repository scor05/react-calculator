import type { Props } from '../types/props.ts'
function clearFunctionHelper({ setValue: setCurrOp }: Props, { setValue: setOldNum }: Props, { setValue: setCurrNum }: Props): void {
    setCurrOp('')
    setOldNum('')
    setCurrNum('')
}
export default clearFunctionHelper
