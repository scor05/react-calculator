import type { DisplayProps } from '../../helpers/types/props'
import "./Display.css"
function Display({ text, config }: DisplayProps) {
    return <div className="display" data-max-length={config.maxChars}>{text}</div>
}
export default Display
