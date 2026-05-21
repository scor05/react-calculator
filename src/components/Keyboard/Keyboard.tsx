import Button from '../Button/Button.tsx'
import './Keyboard.css'
import type { ButtonType, KeyboardProps } from '../../helpers/types/props'
const buttons: Array<[string, ButtonType]> = [
    ['7', 'number'], ['8', 'number'], ['9', 'number'], ['÷', 'operator'],
    ['4', 'number'], ['5', 'number'], ['6', 'number'], ['*', 'operator'],
    ['1', 'number'], ['2', 'number'], ['3', 'number'], ['-', 'operator'],
    ['C', 'clear'], ['0', 'number'], ['=', 'equal'], ['+', 'operator'],
]
function Keyboard(props: KeyboardProps) {
    return <div className="keyboard">{buttons.map(([label, buttonType]) => <Button key={label} label={label} buttonType={buttonType} {...props} />)}</div>
}
export default Keyboard
