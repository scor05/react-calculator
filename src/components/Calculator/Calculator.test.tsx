import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import { describe, expect, it } from 'vitest'
import Calculator from './Calculator'

function TestCalculator() {
    const [currNum, setCurrNum] = useState('')
    const [oldNum, setOldNum] = useState('')
    const [currOp, setCurrOp] = useState('')
    const [errText, setErrText] = useState('')
    return <Calculator currNum={currNum} setCurrNum={setCurrNum} oldNum={oldNum} setOldNum={setOldNum}
        currOp={currOp} setCurrOp={setCurrOp} errText={errText} setErrText={setErrText}
        settings={{ maxLength: 120, maxChars: 9 }} />
}

async function press(keys: string) {
    const user = userEvent.setup()
    for (const key of keys) await user.click(screen.getByRole('button', { name: key }))
}

function display(container: HTMLElement) {
    return container.querySelector('.display')?.textContent
}

describe('Calculator', () => {
    it('shows ERROR for negative subtraction results', async () => {
        const { container } = render(<TestCalculator />)
        await press('3-5=')
        expect(display(container)).toBe('ERROR')
    })
    it('shows ERROR when a result is greater than 9 digits', async () => {
        const { container } = render(<TestCalculator />)
        await press('999999999+1=')
        expect(display(container)).toBe('ERROR')
    })
    it('shows ERROR for incomplete expressions', async () => {
        const { container } = render(<TestCalculator />)
        await press('6*=')
        expect(display(container)).toBe('ERROR')
    })
    it('fits decimal results inside the 9 character display limit', async () => {
        const { container } = render(<TestCalculator />)
        await press('22/7=')
        expect(display(container)).toBe('3.1428571')
    })
    it('chains operations when operators are pressed repeatedly', async () => {
        const { container } = render(<TestCalculator />)
        await press('3+3+3+')
        expect(display(container)).toBe('9')
    })
})
