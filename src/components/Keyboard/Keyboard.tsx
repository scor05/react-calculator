import Button from '../Button/Button.tsx'
import './Keyboard.css'
import type { ButtonType, KeyboardProps } from '../../helpers/types/props'
const buttons: Array<[string, ButtonType, string]> = [
    ['7', 'number', '1'], ['8', 'number', '1'], ['9', 'number', '1'], ['/', 'operator', '1'],
    ['4', 'number', '2'], ['5', 'number', '2'], ['6', 'number', '2'], ['*', 'operator', '2'],
    ['1', 'number', '3'], ['2', 'number', '3'], ['3', 'number', '3'], ['-', 'operator', '3'],
    ['C', 'clear', '4'], ['0', 'number', '4'], ['=', 'equal', '4'], ['+', 'operator', '4'],
]
function Keyboard(props: KeyboardProps) {
    return <div className="keyboard">{
        buttons.map(([label, buttonType, row]) =>
            <Button key={label} label={label} buttonType={buttonType} btnRow={row} {...props} />)}
    </div>
}
export default Keyboard
