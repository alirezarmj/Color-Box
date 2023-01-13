import colorNames from 'colornames';
import React from 'react'

const Input = ({ colorValue, setColorValue, setHexValue, setIsDarktext, isDarkText }) => {


  return (
    <form className="input-color" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="input-color">color name</label>
      <input
        value={colorValue}
        id="input-color"
        type="text"
        placeholder="Add color name"
        onChange={e => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value))
        }}
      />
      <button className="toggle-color" onClick={() => { setIsDarktext(!isDarkText) }}>Toggle Text Color</button>
    </form>
  )
}

export default Input