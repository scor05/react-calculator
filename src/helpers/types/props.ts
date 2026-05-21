import type { Dispatch, SetStateAction } from 'react'

export type Props = { value: string, setValue: Dispatch<SetStateAction<string>> }

export type Settings = { maxLength: number, maxChars: number }

export type CalculatorProps = {
    currNum: string, setCurrNum: Dispatch<SetStateAction<string>>
    oldNum: string, setOldNum: Dispatch<SetStateAction<string>>
    currOp: string, setCurrOp: Dispatch<SetStateAction<string>>
    errText: string, setErrText: Dispatch<SetStateAction<string>>
    settings: Settings
}

export type DisplayProps = { text: string, config: Settings }
export type KeyboardProps = { currNum: Props, oldNum: Props, currOp: Props, errText: Props }
export type ButtonType = 'number' | 'operator' | 'equal' | 'clear'
export type ButtonProps = KeyboardProps & { label: string, buttonType: ButtonType, btnRow: string }
