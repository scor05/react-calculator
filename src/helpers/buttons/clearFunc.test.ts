import { describe, expect, it } from 'vitest'
import clearFunctionHelper from './clearFunc'
import { setValue, testState } from '../testState'

describe('clearFunctionHelper', () => {
    it('clears operator, operands, and error text', () => {
        const currOp = testState('+')
        const oldNum = testState('3')
        const currNum = testState('9')
        const errText = testState('ERROR')
        clearFunctionHelper(currOp, oldNum, currNum, errText)
        expect(setValue(currOp)).toHaveBeenCalledWith('')
        expect(setValue(oldNum)).toHaveBeenCalledWith('')
        expect(setValue(currNum)).toHaveBeenCalledWith('')
        expect(setValue(errText)).toHaveBeenCalledWith('')
    })
})
