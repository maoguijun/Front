/**
 * Created by Yurek on 2017/8/21.
 */
import React from 'react'
import Immutable from 'immutable'
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import {immutableValueRender,autoMergeCells,columnMapFuns} from '../../utils/columns'
import ListSort from '../../components/ListSort';
import './EditableCell.css'
import { Table, Input, Icon, Button, Popconfirm,Select } from 'antd';
const Option = Select.Option;
import {formatDate,formatMoney,configDirectory,configDirectoryObject,configCate,renderPic,add,sub,mul,div,divHundred} from '../../utils/formatData'

export class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: false,
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  handleInputChange = (e) => {
    const value = e.target.value;

    this.setState({ value });
  };

  check = () => {
    this.setState({ editable: false });
    if (this.props.onChange) {
      this.props.onChange(this.state.value);
    }
  };


  edit = () => {
    this.setState({ editable: true });
  };

  jumpFun=(v)=>{
    const {jump} = this.props
      return <a onClick={jump}>
        {v}
      </a>
  }

  render() {
    const { value, editable } = this.state;
    const { option,tag,renderHighLight,jump } = this.props
    let sub
    if(tag==='input'){
      sub = <Input
        value={value}
        onChange={this.handleInputChange}
        onPressEnter={this.check}
      />
    }else if(tag==='select'){
      sub = <Select
        value={value}
        onChange={this.handleChange}
        style={{width:'100%',height:28}}
        allowClear={true}
      >
        {option&&option.map((v,i)=><Option key={v.description} >{v.description}</Option>)}
      </Select>
    }
    return (
      <div className="editable-cell">
        {
          editable ?
            <div className="editable-cell-input-wrapper">
              {sub}
              <Icon
                type="check"
                className="editable-cell-icon-check"
                onClick={this.check}
              />
            </div>
            :
            <div className="editable-cell-text-wrapper">
              {jump?this.jumpFun(value):value || ' '}
              <Icon
                type="edit"
                className="editable-cell-icon"
                onClick={this.edit}
              />
            </div>
        }
      </div>
    );
  }
}
