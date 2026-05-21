import type { DisplayProps } from '../../helpers/props'

function Display({ text, config }: DisplayProps) {
    return <div className="display" data-max-length={config.maxLength}>{text}</div>
}

export default Display
