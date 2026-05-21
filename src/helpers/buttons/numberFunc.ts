import type { Props } from '../types/props.ts'
function numberFunctionHelper({ value: currNum, setValue: setCurrNum }: Props, number: string): void {
    setCurrNum(currNum + number)
}
export default numberFunctionHelper
