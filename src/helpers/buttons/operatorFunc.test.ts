import { describe, expect, it } from 'vitest'
import operatorFunctionHelper from './operatorFunc'
import { setValue, testState } from '../testState'

describe('operatorFunctionHelper', () => {
    it('stores the first operand and clears the current display', () => {
        const currNum = testState('3')
        const oldNum = testState('')
        const currOp = testState('')
        operatorFunctionHelper(currNum, oldNum, testState(), currOp, '+')
        expect(setValue(oldNum)).toHaveBeenCalledWith('3')
        expect(setValue(currNum)).toHaveBeenCalledWith('')
        expect(setValue(currOp)).toHaveBeenCalledWith('+')
    })
    it('evaluates chained operators and keeps the next operator', () => {
        const currNum = testState('3')
        const oldNum = testState('6')
        const currOp = testState('+')
        operatorFunctionHelper(currNum, oldNum, testState(), currOp, '+')
        expect(setValue(currNum)).toHaveBeenCalledWith('9')
        expect(setValue(oldNum)).toHaveBeenCalledWith('9')
    })
    it('formats decimal chain results to the display limit', () => {
        const currNum = testState('7')
        const oldNum = testState('22')
        operatorFunctionHelper(currNum, oldNum, testState(), testState('/'), '+')
        expect(setValue(currNum)).toHaveBeenCalledWith('3.1428571')
    })
})
