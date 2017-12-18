import React from "react";
import { Form, Input, Row, Col, Button, Icon, Select } from "antd";
import Immutable from "immutable";
const FormItem = Form.Item;
const Option = Select.Option;
import { setFormDefaultValue } from "../../utils/common";
import {
  host,
  titles as _tit,
  vendorDetail_tableField as _venDeT,
  venDetail_type as _clientPOType,
  currency as _cur,
  vendorTypeArr
} from "../../config";

import "./AddableForm.css";
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
class AddableForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [],
      returnValues: [],
      values: Immutable.fromJS([{}])
    };
  }
  static defaultProps = {
    labelCol: { span: 7 },
    wrapperCol: { span: 14 }
  };

  componentWillMount() {
    const { initial } = this.props;
    this.setState({
      values: initial
    });
  }
  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.initial !== this.props.initial) {
      const { sessionStorageName } = nextProps;
      if (sessionStorageName) {
        localStorage.setItem(
          sessionStorageName,
          JSON.stringify(nextProps.initial.toJS())
        );
      }
      let values = nextProps.initial.toJS();
      values &&
        values.map(item => {
          for (let key in item) {
            if ((key = "accountNum")) {
              item[key] = item[key]
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ");
            }
          }
          return item;
        });
      this.setState({
        values: Immutable.fromJS(values)
      });
    }
  }

  componentDidUpdate(nextProps, nextState) {
    const { values } = this.state;
    if (values !== nextState.values) {
      //重新渲染组件
      console.log(
        86,
        values && values.toJS(),
        nextState.values && nextState.values.toJS()
      );
    }
  }

  inputChange = (index, dataIndex, value) => {
    const { form, sessionStorageName } = this.props;
    const { values } = this.state;
    console.log(79, index, dataIndex, value, values);
    let _values = values.toJS();
    if (dataIndex === "accountNum") {
      value = value.replace(/\s/g, "").replace(/(\d{4})/g, "$1 ");
      //优化语句：如果当前位置是空格字符，则自动清除掉
      if (value.charAt(value.length - 1) == " ") {
        value = value.substring(0, value.length - 1);
      }
      //没想到好的办法
      let input = document.getElementById(`${dataIndex}_${index}`)
      var pos = input.selectionEnd
      console.dir(input)
      input.value = value
      input.setSelectionRange(pos,pos)
    }
    _values[index][dataIndex] = value;
    this.setState({
      values: Immutable.fromJS(_values)
    });
    if (sessionStorageName) {
      console.log("修改local");
      _values[index]["accountNum"] = _values[index]["accountNum"].replace(
        /\s/g,
        ""
      );
      localStorage.setItem(sessionStorageName, JSON.stringify(_values));
    }
  };

  renderOption = config => {
    if (config && config.length > 0) {
      return config.map(v => <Option key={v}>{v}</Option>);
    }
  };

  getFormItems3 = () => {
    const {
      columns,
      form: { getFieldDecorator, getFieldValue },
      labelCol,
      wrapperCol,
      layout,
      colSpan,
      stepArr,
      initial
    } = this.props;
    const { values } = this.state;
    console.log(340, values, values && values.toJS());
    if (!values) return;
    let content = [];
    let leng = values.toJS().length;
    let _values = values.toJS();
    for (let index = 0; index < leng; index++) {
      let arra = [],
        form;
      console.log(345, index, _values[index]);
      form = (
        <Row key={`bank${index}`}>
          {index && (
            <p
              style={{
                width: "90%",
                height: 32,
                marginLeft: "5%",
                borderTop: "1px dashed #909090"
              }}
            />
          )}
          {columns.map(column => {
            return (
              <Col
                span={column.colSpan ? column.colspan : 12}
                key={column.dataIndex + index}
              >
                <FormItem
                  label={column.label ? column.label : column.title}
                  key={column.dataIndex + index}
                  labelCol={column.labelCol || labelCol}
                  wrapperCol={column.wrapperCol || wrapperCol}
                  disabled={column.disabled}
                >
                  {getFieldDecorator(`${column.dataIndex}_${index}`, {
                    ...column.option,
                    initialValue: _values[index][column.dataIndex]
                  })(
                    column.FormTag ? (
                      <Select
                        showSearch
                        placeholder="please select"
                        optionFilterProp="children"
                        allowClear={true}
                        onChange={value =>
                          this.inputChange(index, column.dataIndex, value)}
                        filterOption={(input, option) =>
                          option.props.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0}
                      >
                        {this.renderOption(_cur)}
                      </Select>
                    ) : (
                      <Input
                        onChange={e =>
                          this.inputChange(
                            index,
                            column.dataIndex,
                            e.target.value
                          )}
                        placeholder={column.title}
                        {...column.props}
                      />
                    )
                  )}
                </FormItem>
              </Col>
            );
          })}
        </Row>
      );
      content.push(form);
    }
    console.log(366, content);
    return content
  };

  // remove = (k) => {
  //   const { form } = this.props;
  //   // can use data-binding to get
  //   const steps = form.getFieldValue('steps');
  //   // We need at least one passenger
  //   if (steps.length === 1) {
  //     return;
  //   }

  //   // can use data-binding to set
  //   form.setFieldsValue({
  //     steps: steps.filter(key => key !== k),
  //   });
  // }

  add = () => {
    const { values } = this.state;
    this.setState({
      values: Immutable.fromJS([...values.toJS(), {}])
    });
  };

  render() {
    const {
      columns,
      form: { getFieldDecorator, getFieldValue },
      labelCol,
      wrapperCol,
      layout,
      colSpan,
      stepArr,
      initial
    } = this.props;
    const { content } = this.state;
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 15, offset: 5 }
      }
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 5 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 }
      }
    };

    return (
      <div>
        <Form layout={layout}>
          {this.getFormItems3()}
          </Form>
        <Row style={{ width: "90%", marginLeft: "5%" }}>
          <Button
            type="dashed"
            onClick={() => this.add()}
            style={{ width: "100%" }}
          >
            <Icon type="plus" /> next
          </Button>
        </Row>
      </div>
    );
  }
}

export default Form.create()(AddableForm);
