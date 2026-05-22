import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import Calculator from './Calculator'

const meta = {
    title: 'components/Calculator',
    component: Calculator,
    parameters: { layout: 'centered' },
    tags: ['autodocs'],
    args: { currNum: '', setCurrNum: fn(), oldNum: '', setOldNum: fn(), currOp: '', setCurrOp: fn(), errText: '', setErrText: fn(), settings: { maxLength: 120, maxChars: 9 } },
} satisfies Meta<typeof Calculator>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = { args: {} }
export const Error: Story = { args: { errText: 'ERROR' } }
export const Numeric: Story = { args: { currNum: '3.141592' } }
