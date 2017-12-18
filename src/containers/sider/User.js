import React from 'react'
import {connect} from 'react-redux'

const User = props => {
  return (
    <div className="sider-user">
      <div className="user-name">{props.user.get('name') || null}</div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  user:state.get('user')
})
export default connect(mapStateToProps)(User)
