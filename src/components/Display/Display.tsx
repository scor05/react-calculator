import type { DisplayProps } from '../../helpers/types/props'

function Display({ text, config }: DisplayProps) {
    return <div className="display" data-max-length={config.maxLength}>{text}</div>
}

export default Display
