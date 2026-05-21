import clearFunctionHelper from '../../helpers/clearFunc'
import equalFunctionHelper from '../../helpers/equalFunc'
import numberFunctionHelper from '../../helpers/numberFunc'
import operatorFunctionHelper from '../../helpers/operatorFunc'
import type { ButtonProps } from '../../helpers/props'

function Button({ label, buttonType, currNum, oldNum, currOp, errText }: ButtonProps) {
    const handleClick = () => {
        if (buttonType === 'number') numberFunctionHelper(currNum, label)
        if (buttonType === 'operator') operatorFunctionHelper(currNum, oldNum, errText, currOp, label)
        if (buttonType === 'equal') equalFunctionHelper(currNum, oldNum, errText, currOp)
        if (buttonType === 'clear') clearFunctionHelper(currOp, oldNum, currNum)
    }

    return <button type="button" onClick={handleClick}>{label}</button>
}

export default Button
