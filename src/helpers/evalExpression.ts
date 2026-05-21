import { evaluate } from 'mathjs'
function evalExpression(expr: string): string {
    try {
        return String(evaluate(expr))
    } catch (error) {
        if (error instanceof Error) {
            return error.message
        }
        return 'Invalid Expression'
    }
}
export default evalExpression
