import React from 'react';
import {connect} from 'react-redux';
import {fetchState} from '../../config';
import {pathJump} from '../../utils'
import { getUserInfo } from '../../store/user'
import { USER_LOGGED_IN } from '../../routes/Login/modules/login'
import {fetchBillTo} from '../../routes/system_settings/bill_to/modules/bill_to'
import { fetchUserInfo } from '../../routes/Login/modules/login'
import { Modal, Button ,message} from 'antd';

//判断用户是否登录的组件

export function requireAuth(Component) {
  class AuthenticatedComponent extends React.PureComponent{
    componentWillMount() {
      const { dispatch } = this.props;

      //刷新后将sessionStorage中保存的user信息填到组件的state中
      // if(sessionStorage.getItem('ifLogin')){
      //   dispatch({
      //    type:USER_LOGGED_IN,
      //    payload:JSON.parse(sessionStorage.ifLogin)
      //   })
      // }
      dispatch(fetchUserInfo()).then(e=>{
        if(e.payload){

        }else{
          message.error(e.error.message);
          dispatch(pathJump('/login'))
        }
      })

      this.check(this.props)
    }

    componentWillReceiveProps(props){
      if(props.location!==this.props.location){
        this.check(props)
      }
    }

    logoutWarning=()=> {
      const { dispatch } = this.props;
      Modal.warning({
      title: '错误信息',
      content: '您当前的会话已超时，请重新登录',
      onOk() {dispatch(pathJump('/login'))},
    });
  }



    check = props => {
      //if (!!props.user && props.user.get('status') === fetchState.success) {
      //  this.hasAuth=true;
      //}else{
      //    props.dispatch(fetchBillTo()).then(e=>{
      //    if(e.error){
      //      //console.log('=========auth false')
      //      this.hasAuth=false;
      //      props.dispatch(pathJump(`/login?next=${props.location.pathname}`))
      //    }
      //   })
      //}
      // if(!window.sessionStorage.ifLogin){
      //   this.logoutWarning()
      //   props.dispatch(pathJump('/login'))
      // }
      if(!props.logout){
        props.dispatch(fetchUserInfo()).then(e=>{
          if(e.payload){
            console.log('=====已登录=====')
          }else{
            // message.error(e.error.message);
            if(props.location.pathname !=='/login'){
              this.logoutWarning()
            }

            // props.dispatch(pathJump('/login'))
          }
        })
      }


    };
    render(){
        return <Component {...this.props} />
    }
  }
  const mapStateToProps = (state) =>{
    console.log(90,state&&state.toJS())
    return({
      logout: state.getIn(['userInfo','userLogout']),
      userInfo  : state.getIn(['userInfo','userLoginInfo']),
    });

  }

  return connect(mapStateToProps)(AuthenticatedComponent);
}
