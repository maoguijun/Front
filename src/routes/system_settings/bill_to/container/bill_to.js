/**
 * Created by Yurek on 2017/7/11.
 */
/**
 * Created by Yurek on 2017/5/11.
 */
import React , { PureComponent }from 'react'
import { injectIntl } from 'react-intl'
import { Row , message , Spin ,Button ,Pagination,Modal,Col,Select,Input ,DatePicker,Icon ,Table  } from  'antd'
import { connect } from 'react-redux'
import {ImmutableTable} from '../../../../components/antd/Table'
import ImmutablePropTypes from 'react-immutable-proptypes'
import SimpleForm from '../../../../components/antd/SimpleForm'
import {Link} from 'react-router'
import { pathJump } from '../../../../utils/'

import TopSearch from '../../../../components/search/topSearch'
import Title from '../../../../components/title/title'
import {titles as _tit ,bill_to_tableField as _billT} from '../../../../config'
import {WORLD_COUNTRY} from '../../../../country_config'
import Immutable from 'immutable'
import {formatDate,formatMoney,configDirectory,configDirectoryObject,configCate} from '../../../../utils/formatData'
import {getFormRequired} from '../../../../utils/common'
import { fetchBillTo ,newBillTo ,altBillTo ,fetchBillToInfo } from '../modules/bill_to'
const Option = Select.Option;
const Search = Input.Search;

import dragula from 'dragula';
import 'dragula/dist/dragula.css';
import './bill_to.scss'



class BillTo extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      loading : false,
      currentPage:1,
      modal:false,
      modalLoad:false,
      itemId:null,
      modal_t:false,
      status:false,
      modalTLoad: false,
      count:0
    }
  }

  componentWillMount(){
    const {dispatch,params,location} = this.props;
    //console.log('this.props',this.props)
    this.setState({loading:true});
      let json = {
        limit:13,
        offset:0
      }
      dispatch(fetchBillTo(json)).then((e)=>{
        if(e.error){
          message.error(e.error.message);
        }else{
          this.setState({
            loading: false,
            count:e.payload.count
          })
        }
      });
  }
  handleReorder = (dragIndex, draggedIndex) => {
    const {billTo} = this.props
    let _data = billTo.toJS()
    const data = [..._data];
    const item = data.splice(dragIndex, 1)[0];
    data.splice(draggedIndex, 0, item);
    this.setState({
      data
    });
  };
  componentDidMount() {
    const container = document.querySelector('.ant-table-tbody');
    const drake = dragula([container], {
      moves: (el, container, handle, sibling) => {
        this.start = this.getIndexInParent(el);
        return true;
      }
    });

    drake.on('drop', (el, target, source, sibling) => {
      this.end = this.getIndexInParent(el);
      this.handleReorder(this.start, this.end);
    });
  }
  getIndexInParent = el => {
    return Array.from(el.parentNode.children).indexOf(el);
  };

  onFetch = (values,limit,offset,cur=1,p) =>{
    this.setState({ loading:true,currentPage:cur });
    const { dispatch } = this.props;
    values={
      ...values,
      limit:limit,
      offset:offset
    };
    dispatch(fetchBillTo(values)).then((e)=>{
      if(e.error){
        message.error(e.error.message);
        this.setState({loading:false})
      } else {
        //判断从哪里发起的请求
        let count = 0
        if (!p) {
          count = e.payload.objs.length || 0
        } else {
          count =e.payload.count
        }
        this.setState({
          loading: false,
          count:count,
        })
      }
    });
  };


  changeTable=(pagination, filters, sorter) => {
    //console.log(pagination, filters, sorter)
    const limit=13;
    const offset=(pagination.current-1)*limit;
    this.onFetch({},limit,offset,pagination.current,1)
  };

  getRequiredMessage=(e,type)=>{
    return getFormRequired(this.props.intl.formatMessage({id:'input_require'},{name:e}),type)
  };

  handleModal=()=>{
    const {dispatch,params,intl:{formatMessage}} = this.props;
    this.form.validateFields((err, values) => {
      if (!err) {
        //console.log('receive form value',values)
        this.setState({modalLoad:true})
        //console.log('value',values)
        if(this.state.itemId == null){
          this.form.resetFields()
          dispatch(newBillTo(values)).then(e=>{
            if(e.error){
              message.error(e.error.message)
              this.setState({modalLoad:false,itemId:null})
            }else{
              this.setState({modalLoad:false,modal:false,itemId:null})
              message.success(formatMessage({id:'save_ok'}))
            }
          })
        }else{
          dispatch(altBillTo('',this.state.itemId,values)).then(e=>{
            if(e.error){
              message.error(e.error.message)
              this.setState({modalLoad:false,itemId:null})
            }else{
              this.setState({modalLoad:false,modal:false,itemId:null,currentPage:1})
              message.success(formatMessage({id:'save_ok'}))
            }
          })
        }
      }
    });
  };



  billDetails=(id)=>{
    const {dispatch} = this.props;
    this.setState({loading:true})
    dispatch(fetchBillToInfo(id)).then(e=>{
      //console.log("eeee",e)
      if(e.payload){
        this.setState({itemId:id,modal:true})
        this.setState({loading:false})
      }else{
        this.setState({loading:false})
        message.error(e.error.message)
      }
    })
  }

  handleStatus=(status,id)=>{
    const {dispatch} = this.props;
    this.setState({loading:true})
      dispatch(fetchBillToInfo(id)).then(e=>{
        //console.log("eeee",e)
        if(e.payload){
          this.setState({itemId:id,status:status==1,modal_t:true})
          this.setState({loading:false})
        }else{
          this.setState({loading:false})
          message.error(e.error.message)
        }
      })
  }


  handleModal_t=()=>{
    const {dispatch,billToInfo,intl:{formatMessage}} = this.props;
    this.setState({modalTLoad:true})
    let _record = billToInfo.toJS()
    let action =_record.status===1?'disable':'enable'
    let json = {
      ..._record,
      status:_record.status==1?0:1
    }
    dispatch(altBillTo(action,this.state.itemId,json)).then(e=>{
      //console.log("eeee",e)
      if(e.payload){
        this.setState({itemId:null,modal_t:false,currentPage:1})
        this.setState({modalTLoad:false})
        message.success(_record.status===1?formatMessage({id:'abandonSuccess'}):formatMessage({id:'enabledSuccess'}))
      }else{
        this.setState({modalTLoad:false})
        message.error(e.error.message)
      }
    })
  }

  getcontent=()=>{
    const {intl:{formatMessage}} = this.props
    return (
      <Col>
        <Button onClick={()=>{this.setState({modal:true,itemId:null})}} type='primary'>{formatMessage({id:'new_btn'})}</Button>
      </Col>)
  };

  render(){
    const {intl:{formatMessage},location:{pathname},count,billTo,billToInfo} = this.props;
    const { loading ,currentPage ,modal ,modalLoad ,itemId ,modal_t,status,modalTLoad } = this.state
    //console.log('state',this.state)
    console.log('hhhhh',billToInfo&&billToInfo.toJS())
    const columns = [
      {dataIndex:_billT.id,render: text => <a onClick={this.billDetails.bind(this,text)}>{text}</a>,},
      {dataIndex:_billT.nameEN},
      {dataIndex:_billT.nameCN},
      {dataIndex:_billT.country},
      {dataIndex:_billT.city},
      {dataIndex:_billT.address},
      {dataIndex:_billT.postCode},
      {dataIndex:_billT.status,render:text=><span style={text==1?{color:'green'}:{color:'red'}} >{text==1?formatMessage({id:'normal'}):formatMessage({id:'disabled'})}</span>},
      {dataIndex:_billT.operation,
        render: (text, record) => (
          <a onClick={this.handleStatus.bind(this,record.get('status'),record.get('id'))} >{record.get('status')==1?formatMessage({id:'toDisabled'}):formatMessage({id:'toNormal'})}</a>
        ),},
    ].map(
      item=>({

        ...item,
        title:formatMessage({id:`bill_to_${item.dataIndex}`}),
      })
    );



    const formColumns = [
      {dataIndex:_billT.id,props:{disabled:this.state.itemId!==null},option:this.getRequiredMessage(formatMessage({id:'required_fields'}))},
      {dataIndex:_billT.country,option:this.getRequiredMessage(formatMessage({id:'required_fields'})),FormTag:
        <Select
          showSearch
          optionFilterProp="children"
          allowClear={true}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
      {WORLD_COUNTRY.map(v=><Option  key={v.name} value={v.name}>{v.name}</Option>)}
    </Select>},
      {dataIndex:_billT.nameEN,option:this.getRequiredMessage(formatMessage({id:'required_fields'}))},
      {dataIndex:_billT.city,option:this.getRequiredMessage(formatMessage({id:'required_fields'}))},
      {dataIndex:_billT.nameCN,option:this.getRequiredMessage(formatMessage({id:'required_fields'}))},
      {dataIndex:_billT.address,option:this.getRequiredMessage(formatMessage({id:'required_fields'}))},
      {dataIndex:_billT.postCode},
    ].map(
      item=>({
        ...item,
        title:formatMessage({id:`bill_to_${item.dataIndex}`}),
      })
    );


    const renderForm=(v,column)=>{
      if(v == undefined || v=='') return

      if(column.trans){
        return column.trans(v,column.config)
      }else if(column.format){
        return column.format(v).map((t,i)=>(
          <Row key={i} >
            {t}
          </Row>
        ))
      }else{
        return v
      }
    }


    const columnMap=column=>{
      let bold = column.bold
      let text
      if(billToInfo){
        text=column.deep?billToInfo.getIn(column.deep):billToInfo.get(column.dataIndex)
      }else{
        text= ''
      }
      return (
        <Col key={column.dataIndex} span={column.span || 12 } className='payment-item'>
          <Col span={12}  className="payment-label" style={{fontWeight:'bold'}}>{formatMessage({id:`bill_to_${column.dataIndex}`})}</Col>
          <Col span={12}  className="payment-value" style={bold&&{fontWeight:"bold"}}>{
            renderForm(text,column)
          }</Col>
        </Col>
      )};
    this.formColumns=[
      {dataIndex:'id_like',formTag:'input'},
      {dataIndex:'nameEN_like',formTag:'input'},
    ].map(
      item=>({
        ...item,
        title:formatMessage({id:`search_${item.dataIndex}`}),
      })
    )

    let searchProps={
      formColumns:this.formColumns,
      onSave:this.onFetch,
      rightContent:this.getcontent()
    };


    return (
      <Row>
        <Title title={formatMessage({id:`${_tit.bill_to}`})} />
        <TopSearch  {...searchProps} />
        <ImmutableTable
          loading={loading}
          columns={columns}
          dataSource={billTo}
          pagination={{ pageSize: 20,total:count,showQuickJumper:count>20,showTotal:total => `Total ${total} items , Each page : 20  items` }}
          //onChange={this.changeTable}
          rowKey={record => record.get('id')}
        />
        <Modal
          visible={modal}
          onCancel={()=>this.setState({modal:false,itemId:null})}
          title={itemId?formatMessage({id:'edit'}):formatMessage({id:'newInfo'})}
          onOk={this.handleModal}
          maskClosable={false}
          width={1000}
        >
          <Spin  spinning={ modalLoad } tip="creating..." >
            <Row>
              <SimpleForm columns={ formColumns } initial={itemId==null?Immutable.fromJS([]):billToInfo} colSpan={12} labelCol={{span:7}} ref={f=>this.form=f} />
            </Row>
          </Spin>
        </Modal>
        <Modal
          visible={modal_t}
          title={status?formatMessage({id:'toDisabled'}):formatMessage({id:'toNormal'})}
          maskClosable={false}
          width={700}
          onCancel={()=>this.setState({modal_t:false,itemId:null})}
          footer={
          <Row>
          <Button onClick={()=>this.setState({modal_t:false,itemId:null})} >{formatMessage({id:'cancel'})}</Button>
          <Button type="danger" onClick={this.handleModal_t}>{status?formatMessage({id:'disableThis'}):formatMessage({id:'enableThis'})}</Button>
          </Row>
          }
        >
          <Spin  spinning={ modalTLoad } tip="creating..." >
            <Row className="payment-read">
              {formColumns.map(columnMap)}
            </Row>
          </Spin>
        </Modal>
      </Row>
    )
  }
}


BillTo.propTypes = {
  pathJump : React.PropTypes.func,
};

const mapStateToProps = (state) => ({
  billTo : state.getIn(['billTo','billTo']),
  count : state.getIn(['billTo','count']),
  billToInfo: state.getIn(['billTo','billToInfo']),
});

export default injectIntl(connect(mapStateToProps)(BillTo))



//const WrappedSystemUser = Form.create()();



