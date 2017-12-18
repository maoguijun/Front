import React, {Component} from 'react'
import { injectIntl, intlShape } from 'react-intl'
// import ImmutablePropTypes from 'react-immutable-proptypes'
import {Icon, Form, Input, Button, Row, Col, Alert,message} from 'antd'
import LocaleBtn from '../../../containers/global/LocaleBtn'
import {fetchState} from 'config'
const FormItem = Form.Item
import './login.scss'

export class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      loading:false
    }
  }
  //console.log('page',props)
  render(){
    const { getFieldDecorator } = this.props.form
    const { formatMessage } = this.props.intl
    const {loading}  =this.state
    const baseLeft = 6
    const baseRight = 17
    const formItemLayout = {
      labelCol: { span: baseLeft },
      wrapperCol: { span: baseRight }
    }

    const username = formatMessage({ id: 'login_username' })
    const password = formatMessage({ id: 'login_password' })
    return (
      <Row type='flex' justify='center' align='middle' className='login'>
        <Col className='login-wrap'>
          {/*<LocaleBtn />*/}
          <Form
            hideRequiredMark={true}
            onSubmit={e => {
            let page
            e.preventDefault()
            this.setState({loading:true})
            this.props.form.validateFields((err, values) => {
              if (!err) {
                //console.log('Received values of form: ', values)
                this.props.login(values).then(e=>{
                  //console.log('login=',e.payload)
                  if(e.payload){
                  //  if(props.location.query.next){
                  //    props.pathJump(props.location.query.next)
                  //  }else if(Array.isArray(e.payload.roles)){
                  //    e.payload.roles.map(v=>{
                  //      //console.log('role',v.id)
                  //      switch (v.id){
                  //        case 'chief':page = '/finance_approval/approving';
                  //          break;
                  //        case 'finance':page = '/finance/approving';
                  //          break;
                  //        case 'cashier':page = '/cashier/approving';
                  //          break;
                  //        case 'manager':page = '/supervisor/approving';
                  //          break;
                  //        case 'mantainer':page = '/permissions/systemUser';
                  //          break;
                  //        case 'admin':page = '/setting/';
                  //          break;
                  //        case 'hr':page = '/setting/company';
                  //          break;
                  //        case 'applicant':page = '/my-list/waiting';
                  //          break;
                  //        default:page = page;
                  //      }
                  //    })
                  //    //console.log(page)
                  //    props.pathJump(page)
                  //}
                  //}else{
                  //  message.error(e.error.message)
                    this.setState({
                      loading:false
                    })
                    this.props.pathJump('/bill_to')
                    }else{
                      this.setState({
                        loading:false
                      })
                      message.error(e.error.message)
                    }
                });
              }
              //console.log(values)
            })
          }}>
            <h1>{formatMessage({ id: 'Project_Title' })}</h1>
            {/*<Col offset={baseLeft} span={baseRight}>
              <Alert message={formatMessage({ id: 'login_alert' })} type='info' showIcon />
            </Col>*/}
            <FormItem
              label={null}
            >
              { getFieldDecorator('username', {
                initialValue:'developer',// A_general superMan
                rules: [{ required: true, message: formatMessage({ id: 'input_require' }, { name: username }) }]
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder={formatMessage({ id: 'input_placeholder' }, { name: username })} />
              ) }
            </FormItem>
            <FormItem
              label={null}
            >
              { getFieldDecorator('password', {
                initialValue:'123',
                rules: [{ required: true, message: formatMessage({ id: 'input_require' }, { name: password }) }]
              })(
                <Input  prefix={<Icon type="lock" style={{ fontSize: 13 }} />} placeholder={formatMessage({ id: 'input_placeholder' }, { name: password })}
                       type='password' />
              ) }
            </FormItem>
            <Row>
              <Col>
                <Button type='primary' htmlType='submit' style={{width:'100%'}} size='large' loading={loading}>{ formatMessage({ id: 'login_login' }) }</Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    )
  }
}

Login.propTypes = {
  form: React.PropTypes.object.isRequired,
  intl: intlShape.isRequired
}

class CheckLogin extends React.Component{


  // componentWillMount(){
  //   let page = '';
  //   //console.log('CheckLogin',this.props)
  //   if(this.props.user && this.props.user.get('status')===fetchState.success){
  //     let _user = this.props.user.toJS();
  //
  //     // _user.roles.map(v=>{
  //     //   switch (v.id){
  //     //     case 'applicant':page = '/my-list/waiting';
  //     //           break;
  //     //     case 'manager':page = '/supervisor/approving';
  //     //           break;
  //     //     default:page = null;
  //     //   }
  //     // })
  //     //
  //     // this.setState({page})
  //     this.props.pathJump(this.props.location.query.next || '/my-list/waiting')
  //   }
  // }
  render(){

    return <Login {...this.props} page={this.props.user.toJS().roles} />
  }
}

export default Form.create()(injectIntl(CheckLogin))
