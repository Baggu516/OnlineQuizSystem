import React from 'react'
// import Data from "../Static-Data/Data"
import "./SubmitComponent.css"
import { Link } from 'react-router-dom'
const SubmitComponent = () => {
  return (
    <div>
        <div className="total-marks-container">
            <p className='total-marks-text'>Total Marks</p>
            <p className='total-marks'>8/10</p>
        </div>
        <div className="keys">
            <Link to="/answers" className='view-answers'>View answers & your responeses</Link>
        </div>
    </div>
  )
}

export default SubmitComponent