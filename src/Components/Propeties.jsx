import React from 'react'
import Conditionalrender from './Conditionalrender'


function Propeties() {
  return (
    <div className='container-fluid'>
        <h2>Conditional rendering</h2>
        <select name="" id="">
            <option value="horizontal">
                horizontal
            </option>
            <option value="vertical"> vertical</option>
        </select>
        <Conditionalrender layout="horizontal"></Conditionalrender>

        
    </div>
  )
}

export default Propeties