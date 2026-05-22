import { describe, expect, it } from 'vitest'
import numberFunctionHelper from './numberFunc'
import { setValue, testState } from '../testState'

describe('numberFunctionHelper', () => {
    it('concatenates digits to the right', () => {
        const currNum = testState('12')
        const errText = testState('ERROR')
        numberFunctionHelper(currNum, errText, testState(''), testState(''), '3')
        expect(setValue(currNum)).toHaveBeenCalledWith('123')
        expect(setValue(errText)).toHaveBeenCalledWith('')
    })
    it('ignores digits after the ninth character', () => {
        const currNum = testState('123456789')
        numberFunctionHelper(currNum, testState(), testState(), testState(), '0')
        expect(setValue(currNum)).not.toHaveBeenCalled()
    })
})
