import React from 'react'
import InputRange from '../UI/InputRange'

const Minutes = () => {
  const [value, setValue] = React.useState('200')
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <InputRange value={value} setValue={handleChange} min={'200'} max={'650'} text={'Минуты'} />
    </div>
  )
}

export default Minutes
