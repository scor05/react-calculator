import clearFunctionHelper from '../../helpers/buttons/clearFunc'
import equalFunctionHelper from '../../helpers/buttons/equalFunc'
import numberFunctionHelper from '../../helpers/buttons/numberFunc'
import operatorFunctionHelper from '../../helpers/buttons/operatorFunc'
import type { ButtonProps } from '../../helpers/types/props'
import './Button.css'
function Button({ label, buttonType, currNum, oldNum, currOp, errText }: ButtonProps) {
    const handleClick = () => {
        if (buttonType === 'number') numberFunctionHelper(currNum, label)
        if (buttonType === 'operator') operatorFunctionHelper(currNum, oldNum, errText, currOp, label)
        if (buttonType === 'equal') equalFunctionHelper(currNum, oldNum, errText, currOp)
        if (buttonType === 'clear') clearFunctionHelper(currOp, oldNum, currNum, errText)
    }
    return <button type="button" onClick={handleClick} className={`button-${buttonType} button`}>{label}</button>
}
export default Button
