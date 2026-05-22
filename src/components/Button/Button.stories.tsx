import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import Button from './Button'

const stateArg = { value: '', setValue: fn() }

const meta = {
    title: 'components/Button',
    component: Button,
    parameters: { layout: 'centered' },
    decorators: [
        (Story) => (
            <div style={{ width: '100px', height: '100px' }}>
                <Story />
            </div>
        ),],
    tags: ['autodocs'],
    args: {
        label: '8',
        buttonType: 'number',
        btnRow: '1',
        currNum: stateArg,
        oldNum: stateArg,
        currOp: stateArg,
        errText: stateArg
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>;

export const NumberButton: Story = {
    args: {}
}

export const OperatorButton: Story = {
    args: {
        label: '+',
        buttonType: 'operator',
    }
}

export const NumberButtonLastRow: Story = {
    decorators: [
        (Story) => (
            <div style={{ width: '100px', height: '120px' }}>
                <Story />
            </div>
        ),],
    args: {
        label: '0',
    }
}

export const OperatorButtonLastRow: Story = {
    decorators: [
        (Story) => (
            <div style={{ width: '100px', height: '120px' }}>
                <Story />
            </div>
        ),],
    args: {
        label: 'C',
        buttonType: 'operator',
        btnRow: '4',
    }
}


export const NumberButtonLastColumn: Story = {
    decorators: [
        (Story) => (
            <div style={{ width: '120px', height: '100px' }}>
                <Story />
            </div>
        ),],
    args: {
        btnRow: '0',
    }
}

export const OperatorButtonLastColumn: Story = {
    decorators: [
        (Story) => (
            <div style={{ width: '120px', height: '100px' }}>
                <Story />
            </div>
        ),],
    args: {
        label: '+',
        buttonType: 'operator',
        btnRow: '4',
    }
}


