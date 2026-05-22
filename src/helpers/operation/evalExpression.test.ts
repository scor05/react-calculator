import { describe, expect, it } from 'vitest'
import evalExpression from './evalExpression'

describe('evalExpression', () => {
    it('evaluates arithmetic expressions', () => {
        expect(evalExpression('3+3*2')).toBe('9')
        expect(evalExpression('10*100/100')).toBe('10')
    })
    it('returns an error message for invalid expressions', () => {
        expect(evalExpression('3+')).not.toBe('3')
    })
})
