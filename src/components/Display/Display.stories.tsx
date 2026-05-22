import type { Meta, StoryObj } from '@storybook/react-vite'
import Display from './Display.tsx'

const meta = {
    title: 'components/Display',
    component: Display,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        text: '-',
        config: {
            maxLength: 120,
            maxChars: 9,
        },
    },
} satisfies Meta<typeof Display>

export default meta
type Story = StoryObj<typeof meta>

export const Empty: Story = {
    args: {}
}

export const Error: Story = {
    args: { text: 'ERROR' }
}

export const Numeric: Story = {
    args: { text: '3.141592' }
}
