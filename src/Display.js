import React, { useContext } from 'react'
import { NumberContext } from './App'

function Display() {
    const value = useContext(NumberContext);
  return (
    <div>value is ${value} Rupees.</div>
    // <NumberContext.Consumer>
    //     {value => <h1>i have {value} Rupees.</h1>}
    // </NumberContext.Consumer>
  )
}

export default Display
