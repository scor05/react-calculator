import type { Props } from './props.ts'
function numberFunctionHelper({ value: currNum, setValue: setCurrNum }: Props, number: string): void {
    setCurrNum(currNum + number)
}
export default numberFunctionHelper
