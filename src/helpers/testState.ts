import { vi } from 'vitest'
import type { Props } from './types/props'

export function testState(value = ''): Props {
    return { value, setValue: vi.fn() }
}

export function setValue(state: Props) {
    return state.setValue as ReturnType<typeof vi.fn>
}
