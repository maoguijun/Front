import { connect } from 'react-redux'
import {  login } from '../modules/login'
import { pathJump } from '../../../utils/'

import Login from '../components/Login'

const mapDispatchToProps = {
  login,
  pathJump
}


const mapStateToProps = (state) => ({
  user : state.get('user')
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
