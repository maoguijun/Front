import React from 'react'
const TitleBody = props=>{
  return (
    <div className="layout-right">
      <header className='header'>{props.title}</header>
      {props.children}
    </div>
  )
}
export default  TitleBody