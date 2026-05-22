import type { DisplayProps } from '../../helpers/types/props'
import "./Display.css"
function Display({ text, config }: DisplayProps) {
    const cssClass = String(`display ${text === 'ERROR' ? 'display-error' : ''}`)
    return <div className={cssClass} data-max-length={config.maxChars}>{text}</div>
}
export default Display
