import React from 'react'
import './TableTitle.scss'

const TableTitle=(title,amount)=>(
  <div style={{margin:'-4px -9px'}}>
    <p style={{height:26,lineHeight:"20px",marginRight:'8px',paddingLeft:'8px'}}>
      {title}
    </p>
    <hr style={{border:'1px solid #e9e9e9',borderBottom:'1px solid transparent'}}/>
    <p style={{height:26,lineHeight:"26px",marginRight:'8px',paddingLeft:'8px'}}>
      {amount}
    </p>
  </div>
)
export default TableTitle


