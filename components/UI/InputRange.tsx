import React from 'react'
import styles from './InputRange.module.css'

interface InputRangeProps {
  value?: string
  setValue?: (e: React.ChangeEvent<HTMLInputElement>) => void
  min: string
  max: string
  text: string
}

const InputRange: React.FC<InputRangeProps> = ({ value, setValue, min, max, text }) => {
  return (
    <>
      <label className={styles.label}>{text}</label>
      <input
        className={styles.inputRange}
        type='range'
        onChange={setValue}
        value={Number(value)}
        min={min}
        max={max}
      />
    </>
  )
}

export default InputRange
