import React from 'react'
import {Table,Button} from 'antd'
import Immutable from 'immutable'
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import {immutableValueRender,autoMergeCells,columnMapFuns} from '../../utils/columns'
import ListSort from '../../components/ListSort';
import './Table.scss'

export const SmallTable = props => <Table bordered={true} size="small" pagination={false} {...props} />


//添加选择项，click row 自动选择
export class SmallSelectionTable extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      selectedRowKeys:[]
    }
  }
  onChange=()=>{
    const {dataSource,rowSelection}=this.props;
    if(dataSource && rowSelection && rowSelection.onChange){
      rowSelection.onChange(this.state.selectedRowKeys,this.state.selectedRowKeys.map(index=>dataSource[index]));
    }
  }


  render(){
    const props={

      //单击行自动选择
      onRowClick:(record,index)=>{
        ////console.log('onRowClick',index);
        if(this.state.selectedRowKeys.indexOf(index)<0){
          if(this.props.rowSelection && this.props.rowSelection.type==='radio'){
            this.setState({selectedRowKeys:[index]},this.onChange)
          }else{
            this.setState({selectedRowKeys:this.state.selectedRowKeys.concat(index)},this.onChange)
          }
        }
      },
      ...this.props,
      rowSelection:{
        ...this.props.rowSelection,
        selectedRowKeys:this.state.selectedRowKeys,

        //单选框改变时自动设置 selectedRowKeys,并回调props onChange
        onChange:(keys,rows)=>{
          this.setState({selectedRowKeys:keys},this.onChange)
        }
      }
    }
    ////console.log('selectedRowKeys',this.state.selectedRowKeys)
    return <SmallTable {...props} />
  }
}




/**
 * 参数说明
 * dataSource    表格数据              类型：Immutable.List()
 * mergeCells    是否自动合并单元格      类型：boolean   //需要在columns中设置表单 mergeCells为 true
 *
 * **/
export class ImmutableTable extends React.PureComponent{
  static defaultProps={
    dataSource:Immutable.List(),
  }


  constructor(props) {
    super(props)
  }


  render(){
    // //console.log('渲染Immutable Table',this.props.dataSource)
    ////console.log('table',this.props)
    const columns=this.props.columns.map(
      this.props.mergeCells?
      columnMapFuns(immutableValueRender,autoMergeCells(this.props.dataSource)):
      immutableValueRender
    );
    return <Table   bordered size="small"  pagination={false} {...this.props} rowClassName={(record,index)=>index%2===0?'row-a':'row-b'} columns={columns} dataSource={this.props.dataSource.toArray()} />
  }
}

