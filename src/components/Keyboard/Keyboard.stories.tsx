import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import Keyboard from './Keyboard'

const stateArg = { value: '', setValue: fn() }

const meta = {
    title: 'components/Keyboard',
    component: Keyboard,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { currNum: stateArg, oldNum: stateArg, currOp: stateArg, errText: stateArg },
} satisfies Meta<typeof Keyboard>

export default meta
type Story = StoryObj<typeof meta>

export const Regular: Story = { args: {} }
