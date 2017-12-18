import React from 'react'
import './Alert.scss'

const Aleart=props=>(
  <div className="alert">
    <div className="alert-message">{props.message}</div>
    <div className="alert-description">{props.description}</div>
  </div>
)

export default Aleart