/**
 * Created by Yurek on 2017/5/12.
 */
import React from 'react'
import { Form, Row, Col, Input, Button, Icon,DatePicker ,Card,Select } from 'antd'
const Search = Input.Search;
const FormItem = Form.Item;
import moment from 'moment';
const { MonthPicker, RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';
import './topSearch.scss'
import { getFormTag } from '../../components/'
import {formatDate,formatMoney,configDirectory,configCate} from '../../utils/formatData'
import {} from '../../config'
import { injectIntl } from 'react-intl'




class TopSearch extends React.Component {
  state = {
    expand: false,
  };

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }

  handleSearch=()=>{
    this.props.form.validateFields((err, fieldsValue) => {
      for( let v in fieldsValue){
        if(fieldsValue[v] == 'All'){
          fieldsValue[v] = undefined
        }
      }

      let values = {
        ...fieldsValue,
      }

      for(let k in values){
        if(Object.prototype.toString.call(values[k]) === '[object Object]'){
          for(let c in values[k]){
            values[`${k}.${c}`] = values[k][c]
          }
        }else if(Object.prototype.toString.call(values[k]) === '[object Array]'){
          //tier4 要求补满5个值
          if(k=='compositionQuery'){
            let value = [null,null,null,null,null]
            values[k].forEach((item,index)=>{
              value[index] = item
            })
            values[k] = value.join(',')
          }else{
            values[k] = values[k].join(',')
          }
        }
      }

      ////console.log('Received values of form: ', values);
      this.props.onSave(values);
    });
  };

  handleReset = () => {
    this.props.form.resetFields();
  };

  render(){
    const {getFieldDecorator}=this.props.form;
    const {formColumns,rightContent,expand,expandForm,intl:{formatMessage}}=this.props;

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

    const labelCol={
      xs: { span: 24 },
      sm: { span: 12 },
      md: { span: 6 },
      lg: { span: 5 },
      xl: { span: 4 },
    }


    const renderColumn =(arr)=>{
      return arr.map(item=> {
        //设置表单初始值
        let options = item.options?item.options:{};
        //初始化FieldProps
        let formDom=getFormTag(item,false,formatMessage);
        return (
          <Col sm={{ span: 12 }} md={{ span:6 }} lg={{ span: 5 }} xl={{ span: null }} key={item.dataIndex}>
            <FormItem
              key={`search_${item.dataIndex}`}
              label={item.noLable?null:item.title}
              style={{width: item.width?item.width:200}}
            >
              {getFieldDecorator(item.dataIndex,options)(formDom)}
            </FormItem>
          </Col>
        )
      }, this);
    }


    let searchHeader = (
      <Row>
        <Col span={12} style={{ textAlign: 'left' }}>
          {rightContent&&rightContent}
        </Col>
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={this.handleSearch} >搜索</Button>
          <Button style={{ marginLeft: 8 }}  onClick={this.handleReset}>
            清除
          </Button>
        </Col>
      </Row>
    );

    let searchProps = {
      title: searchHeader,
      className: "search-bar",
      style: {borderRadius: 0, marginBottom: 10,marginTop:61},
      bodyStyle: {padding: '0px 0px 0px 10px', backgroundColor: '#f7f7f7'}
    };



    return(
      <Card {...searchProps}>
        <Form
          layout="horizontal" >
            <Row className="container">
              {renderColumn(formColumns)}
              {this.state.expand?renderColumn(expandForm):null}
            </Row>
          {expand&&<Row style={{textAlign:'right',marginRight:'4%',paddingBottom:6,display:'inline-block',position:'absolute',right:0,bottom:'-1px'}}>
              <a style={{ marginLeft: 8, fontSize: 12 }} onClick={this.toggle}>
                高级搜索 <Icon type={this.state.expand ? 'up' : 'down'} />
              </a>
            </Row>}
          </Form>
      </Card>
    )
  }
}

export default  injectIntl(Form.create()(TopSearch))
