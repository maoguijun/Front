/**
 * Created by Yurek on 2017/5/12.
 */
import React from 'react'
import { Form, Row, Col, Input, Button, Icon,DatePicker ,Card,Select ,Table  } from 'antd'
const Search = Input.Search;
const FormItem = Form.Item;
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
import Immutable from 'immutable'
import { injectIntl } from 'react-intl'
const monthFormat = 'YYYY/MM';
import { getFormTag } from '../../components/'
import {formatDate,formatMoney,configDirectory,configCate} from '../../utils/formatData'
import { clientPO_tableField as _cliPOT ,invoice_tableField as _inT,client_tableField as _cliT,placed_to_tableField as _plaT} from '../../config'
import './invoice.scss'
const Option = Select.Option;
import {ImmutableTable} from '../../components/antd/Table'
const newData=Immutable.fromJS([{description:'',serviceDate:moment(),net:''}]);
import { List, Set } from 'immutable'

class Invoice_template extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      detail:Immutable.fromJS([{description:props.desc,serviceDate:moment(),net:props.net/100}]),
      editIndex:-1,
    }
  }

  //componentDidMount(){
  //  const {invoicesInfo,detail,newInv,net,desc} = this.props
  //  console.log('inininini',invoicesInfo)
  //  //if(invoicesInfo!= undefined){
  //    ////console.log('inininini',invoicesInfo.toJS())
  //    if(newInv){
  //      console.log('111',newInv)
  //      this.setState({approver:'',detail:Immutable.fromJS([{description:desc,serviceDate:moment(),net:net/100}])})
  //      this.props.setSuperState({detail:Immutable.fromJS([{description:desc,serviceDate:moment(),net:net/100}])})
  //    }else{
  //      console.log('3333')
  //      this.setState({detail:detail})
  //    }
  //  //}
  //}

  componentWillReceiveProps(nextProps){
    if(nextProps.invoicesInfo!= undefined&&!nextProps.newInv){
      this.setState({detail:nextProps.detail,approver:nextProps.approver})
    }else if(nextProps.newInv&&this.props.invoicesInfo&&nextProps.invoicesInfo.get('bpId')!==this.props.invoicesInfo.get('bpId')){
      this.setState({approver:'',detail:Immutable.fromJS([{description:nextProps.desc,serviceDate:moment(),net:nextProps.net/100}])})
      this.props.setSuperState({detail:Immutable.fromJS([{description:nextProps.desc,serviceDate:moment(),net:nextProps.net/100}])})
    }
  }

  triggerChange = (e) => {
     const{setSuperState} = this.props

    let json = {
      approver:e
    }
    this.setState({approver:e},()=>setSuperState(json))
  }

  toUpper=(e)=>{
    return e.toUpperCase()
  }

  addNewData=()=>{
    const dataSource=this.state.detail;
    const newDataSource=Immutable.List.isList(dataSource)?dataSource.concat(newData):newData
    this.setState({detail:newDataSource})
  }

  removeData=()=>{this.setState(
    state=>{
      const newStataSource=state.detail.delete(state.editIndex)
      ////console.log(state.editIndex)
      return {
        detail:newStataSource,
        editIndex:state.editIndex >= newStataSource.size ?-1 :state.editIndex
      }
    })
    this.props.setSuperState({detail:this.state.detail.delete(this.state.editIndex)})
  };

  addColumnsRender=columns=>{
    return columns.map(column=>({
      ...column,
      render:(text,record,index)=>{
        if(this.state.editIndex!==index){
          return column.shouldRender?column.render(text,record,index):column.time?moment(text).format('YYYY-MM'):text;
        }else{
          const FormTag=column.formTag || Input;
          const formValue=column.shouldRenderDetail?column.render(text,record,index):text;
          return (
            <FormTag
              {...column.formProps}
              value={formValue}
              placeholder={column.title}
              onChange={
                (e,es)=>{
                //console.log('eeee====',e)

                  let  value=e && e.target?e.target.value:column.time?es:e;
                  if(column.getValueFromTag){
                    value=column.getValueFromTag(value)
                  }

                  //this.setState({changed:true})
                  let newDateSource=this.state.detail.update(index,$p=>$p.set(column.dataIndex,value))

                  this.setState({detail:newDateSource});
                  this.props.setSuperState({detail:newDateSource})
                }
              }
            />
          )
        }
      }
    }));
  };

  render(){
    const {getFieldDecorator}=this.props.form;
    const {intl:{formatMessage},formColumns,rightContent,logo,footer,clientPOInfo,invoicesInfo,clientInfo,setApprove,invoicesInfo_data,placedToInfo,readOnly} = this.props;
    const {editIndex ,detail} = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 13 },
      },
      wrapperCol: {
        xs: { span: 8 },
        sm: { span: 11 },
      },
    };

    let logoHeader = (
      <Row className="logo-container">
        <img src={require("../../../public/logo.png")} alt="LOGO" />
      </Row>
    )


    const leftColumn = [
      {dataIndex:_cliPOT.id},
      {dataIndex:_cliPOT.address},
      {dataIndex:_cliPOT.city},
      {dataIndex:_cliPOT.postCode},
      {dataIndex:_cliPOT.country},
      {dataIndex:_inT.approverId,render:clientInfo&&clientInfo},
    ].map(
      item=>({
        ...item,
        title:formatMessage({id:`clientPO_${item.dataIndex}`}),
      })
    );


    const rightColumn =[
      {dataIndex:_inT.id},
      {dataIndex:_inT.INVDate,format:formatDate},
      {dataIndex:_inT.dueDate},
      {dataIndex:_inT.clientPoId},
      {dataIndex:_cliPOT.billToId},
      {dataIndex:_cliPOT.placedToId},
    ].map(
      item=>({
        ...item,
        title:formatMessage({id:`clientPOS_${item.dataIndex}`}),
      })
    );

    const renderForm=(v,column)=>{
      ////console.log('renderForm',readOnly)
      // //console.log('form',v)
      if(column.format){
        return column.format(v)
      }else if(column.render){
        if(readOnly){
          return v
        }else{
          return (
            <Select  style={{width:150,marginTop:'-3px'}} value={this.state.approver} allowClear={true}  onChange={this.triggerChange}>
              {column.render.get('approvers').toJS().map(t=>(
                <Option  key={t.id} value={t.id}>{t.id}</Option>
              ))}
            </Select>
          )
        }
      }else{
        return v
      }
    }


    const renderSimpleColumn =(column,data)=>{
      let text
      if(data){
        if(column.title){
          text = this.toUpper(formatMessage({id:column.title}))
        }else{
          text=formatMoney(column.deep?data.getIn(column.deep)/100:data.get(column.dataIndex)/100)
        }
      }else{
        text= ''
      }
      return (
        <Col key={column.dataIndex} span={column.span || 12 } className='payment-item' style={column.title?{textAlign:'center'}:{textAlign:'right',paddingRight:'93px'}}>
          <span  style={column.title&&{fontWeight:'bold'}}>{text}</span>
        </Col>
      )};


    const renderColumn =(column,data,data2)=>{
      let text
      if(data&&data2){
        if(data.has(column.dataIndex)){
          text=column.deep?data.getIn(column.deep):data.get(column.dataIndex)
        }else{
          text=column.deep?data2.getIn(column.deep):data2.get(column.dataIndex)
          ////console.log('data2',text)
        }
      }else{
        text= ''
      }
      return (
        <Col key={column.dataIndex} span={column.span || 24 } className='payment-item'>
          <Col  span={12} className="payment-label" style={{fontWeight:'bold'}}>{this.toUpper(column.title)}</Col>
          <Col span={12} className="payment-value">{
          renderForm(text,column)
          }</Col>
        </Col>
      )};


    let props = {
      title: logoHeader,
      className: "invoice",
      style: {borderRadius: 0, marginBottom: 10},
      bodyStyle: {padding: '0', backgroundColor: '#f7f7f7'},
      footer:footer
    };





    const columns = [
      {  dataIndex: _inT.description,width:232},
      {  dataIndex: _inT.serviceDate,width:232,formTag:MonthPicker,render:text=>moment(text),time:true,shouldRenderDetail:true },
      {  dataIndex: _inT.net ,width:232,render:text=>formatMoney(text),shouldRender:true,className:'inv-money'},
    ].map(
      item=>({
        ...item,
        title:this.toUpper(formatMessage({id:`invoice_${item.dataIndex}`})),
      })
    );

    const amountColumn=[
      {dataIndex: '_net',title:'net_total'},
      {dataIndex: _inT.net},
      {dataIndex: '_tax',title:'tax'},
      {dataIndex: _inT.tax},
      {dataIndex: '_inv',title:'inv_total'},
      {dataIndex: _inT.gross},
    ]

    const bankColumn= [
      {dataIndex:_plaT.nameEN},
      {dataIndex:_plaT.bankAccount,},
      {dataIndex:_plaT.swiftCode,},
      {dataIndex:_plaT.bankNum,},
    ].map(
      item=>({
        ...item,
        span:12,
        title:formatMessage({id:`placed_to_${item.dataIndex}`}),
      })
    );

    return(
      <Card {...props}  onDoubleClick={()=>this.setState({editIndex:-1})} >
        <Row className="title-container">
          <p className="title">INVOICE</p>
        </Row>
        <Row className="info">
          <Row className="item">
            <p style={{fontWeight:'bold'}}>CLIENT INFORMATION</p>
            <Row className="payment-read" >
              {leftColumn.map(v=>renderColumn(v,clientPOInfo,invoicesInfo))}
            </Row>
          </Row>
          <Row className="item">
            <p style={{fontWeight:'bold'}}>INVOICE INFORMATION</p>
            <Row className="payment-read">
              {rightColumn.map(v=>renderColumn(v,invoicesInfo,clientPOInfo))}
            </Row>
          </Row>
        </Row>
        <Row >
          {invoicesInfo &&
          <ImmutableTable
            columns={this.addColumnsRender(columns)}
            dataSource={detail}
            onRowClick={(record,index)=>readOnly?this.setState({editIndex:-1}):this.setState({editIndex:index})}
            rowClassName={(e,index)=>index===editIndex?'editRow':index%2===0?'row-a':'row-b'}
            className="invoice-table"
            footer={data=>(!readOnly&&
              <Row type="flex" justify='space-between'>
                <Col>
                  <Button disabled={readOnly} onClick={this.addNewData}><Icon type="plus" />{formatMessage({id:'add'})}</Button>
                  <Button onClick={this.removeData} style={{marginLeft:5}}
                    disabled={editIndex==-1 || editIndex >= detail.size}
                  >
                    <Icon type="minus" />{formatMessage({id:'delete'})}
                  </Button>
                </Col>
              </Row>
            )}
          />
          }
        </Row>

        <Row className="amount-all">
          <div className="payment-read container">
            {amountColumn.map(v=>renderSimpleColumn(v,invoicesInfo))}
          </div>
        </Row>
        <Row className=" bankI-info">
          <p className="title">BANK INFORMATION</p>
          {placedToInfo&&
          <Row className="payment-read">
          {bankColumn.map(v=>renderColumn(v,placedToInfo,placedToInfo))}
          </Row>
          }
        </Row>
        {footer}
      </Card>
    )
  }
}



export default  injectIntl(Form.create()(Invoice_template))
