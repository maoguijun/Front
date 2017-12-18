import React from 'react'
import {Form,Input,Col,Button,Icon} from 'antd'
const FormItem = Form.Item;
import {setFormDefaultValue} from '../../utils/common'
import './SimpleForm.css'
/*
* 简易的antd Form
* props
* labelCol:4          //label 宽度
* wrapperCol:14       //容器宽度
* columns:[]          //渲染表格的数组
*
* columns.dataIndex   //form字段名称
* columns.title       //该字段的标签
* columns.FormTag     //该字段的组件 默认 Input
* columns.option      //表单选项参考antd form
* */
let uuid = 0;
class SimpleForm extends React.PureComponent{
  static defaultProps={
    labelCol:{span:4},
    wrapperCol:{span:14}
  }



  componentDidMount(){
    console.log('========',this.props)
    setFormDefaultValue(this.props);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.initial!==this.props.initial){
      setFormDefaultValue(nextProps)
    }
  }

  remove = (k) => {
    const { form } = this.props;
    // can use data-binding to get
    const steps = form.getFieldValue('steps');
    // We need at least one passenger
    if (steps.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      steps: steps.filter(key => key !== k),
    });
  }


  add = () => {
    uuid++;
    const { form } = this.props;
    // can use data-binding to get
    const steps = form.getFieldValue('steps');
    const nextSteps = steps.concat(uuid);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      steps: nextSteps,
    });
  }


  render(){
    const {columns,form:{getFieldDecorator,getFieldValue},labelCol,wrapperCol,layout,colSpan,stepArr}=this.props;
    ////console.log('999',this.props.form)
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 15, offset:5 },
      },
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 },
      },
    };
    getFieldDecorator('steps', { initialValue: stepArr });
    const steps = getFieldValue('steps')||[];
    const formItems = steps.map((k, index) => {
      return (
        <FormItem
          {...formItemLayout}
          label={index === 0 ? 'Steps1' : `Steps${index+1}`}
          required={false}
          key={index}
        >
          {getFieldDecorator(`steps-${index+1}`, {
            validateTrigger: ['onChange', 'onBlur'],
            rules: [{
              required: true,
              whitespace: true,
              message: "Please add steps.",
            }],
            initialValue: stepArr.length>0?stepArr[index]['content']:""
          })(
            <Input placeholder="steps details" style={{ width: '60%',marginRight: '10px' }} />
          )}
          <Icon
            className="dynamic-delete-button"
            type="minus-circle-o"
            disabled={steps.length === 1}
            onClick={() => this.remove(k)}
          />
        </FormItem>
      );
    });
    return(
      <Form layout={layout}>
        {
          columns.map(column=>{
            if(column.show === 'step'){
              return (
                <Col span={colSpan}>
                {formItems}
                <FormItem {...formItemLayoutWithOutLabel}>
                  <Button type="dashed" onClick={this.add} style={{ width: '60%'}}>
                    <Icon type="plus" />Add Step
                  </Button>
                </FormItem>
              </Col>
              )
            }else{
              if(!column.jumpOver){
                const FormTag=column.FormTag;
                if(column.dataIndex){
                  return (
                    <Col span={column.colSpan?column.colSpan:colSpan} key={column.dataIndex} style={column.style}>
                      <FormItem
                        label={column.label?column.label:column.title}
                        key={column.dataIndex}
                        labelCol={column.labelCol || labelCol}
                        wrapperCol={column.wrapperCol || wrapperCol}
                        disabled={column.disabled}
                      >
                        {getFieldDecorator(column.dataIndex,column.option||{})(
                          FormTag ? FormTag : <Input placeholder={column.title}  {...column.props} />
                        )}
                      </FormItem>
                    </Col>
                  )
                }else{
                  throw new Error('这个formItem dataIndex 没有值！')
                }
              }
            }
          })
        }
      </Form>
    )
  }
}
  export default Form.create()(SimpleForm)
