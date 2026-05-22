import type { Props } from '../types/props.ts'
function numberFunctionHelper({ value: currNum, setValue: setCurrNum }: Props, { setValue: setErrText }: Props,
    { value: oldNum }: Props, { value: currOp }: Props, number: string): void {
    const newNum: string = currOp !== '' && currNum === oldNum ? number : currNum + number
    if (!(newNum.length > 9)) {
        setCurrNum(newNum)
        setErrText('')
    }
}
export default numberFunctionHelper
