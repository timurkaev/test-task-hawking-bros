import React from 'react'
import InputRange from '../UI/InputRange'

export const Internet = () => {
  const [value, setValue] = React.useState('200')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <InputRange value={value} setValue={handleChange} min={'5'} max={'35'} text={'Интернет'} />
    </div>
  )
}

export default Internet
