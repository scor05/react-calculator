import { describe, expect, it } from 'vitest'
import equalFunctionHelper from './equalFunc'
import { setValue, testState } from '../testState'

describe('equalFunctionHelper', () => {
    it('returns ERROR for negative results', () => {
        const currNum = testState('5')
        const errText = testState('')
        equalFunctionHelper(currNum, testState('3'), errText, testState('-'))
        expect(setValue(errText)).toHaveBeenCalledWith('ERROR')
    })
    it('returns ERROR for incomplete expressions', () => {
        const errText = testState('')
        equalFunctionHelper(testState(''), testState('6'), errText, testState('*'))
        expect(setValue(errText)).toHaveBeenCalledWith('ERROR')
    })
    it('formats decimals to always show exactly 9 display characters', () => {
        const currNum = testState('7')
        const oldNum = testState('22')
        equalFunctionHelper(currNum, oldNum, testState(), testState('/'))
        expect(setValue(currNum)).toHaveBeenCalledWith('3.1428571')
        expect(setValue(oldNum)).toHaveBeenCalledWith('3.1428571')

        const currNum2 = testState('7')
        const oldNum2 = testState('2200')
        equalFunctionHelper(currNum2, oldNum2, testState(), testState('/'))
        expect(setValue(currNum2)).toHaveBeenCalledWith('314.28571')
        expect(setValue(oldNum2)).toHaveBeenCalledWith('314.28571')
    })
})
