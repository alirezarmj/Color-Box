import React from 'react'

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (

    <section className="square" style={{
      background: colorValue,
      color: isDarkText ? "#333" :"#fff" 
    }} >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>

  )
}
Square.defaultProps = {
  colorValue: "Empty Color Value"
}



export default Square;