import React from 'react'
import {Table} from 'antd'
import Immutable from 'immutable'
import {immutableValueRender,autoMergeCells,columnMapFuns} from '../../utils/columns'

export const SmallTable=props=><Table rowKey={(r,i)=>i} bordered={true} size="small" pagination={false} {...props} />



/**
 * 参数说明
 * dataSource    表格数据              类型：Immutable.List()
 * mergeCells    是否自动合并单元格      类型：boolean   //需要在columns中设置表单 mergeCells为 true
 *
 * **/

export class ImmutableDragTable extends React.PureComponent{
  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps={
    dataSource:Immutable.List(),
    className: 'list-sort-demo',
  }


  render(){
    // //console.log('渲染Immutable Table',this.props.dataSource)
    const columns=this.props.columns.map(
      this.props.mergeCells?
        columnMapFuns(immutableValueRender,autoMergeCells(this.props.dataSource)):
        immutableValueRender
    );
    return (
      <div className={`${this.props.className}-wrapper`}>
        <div className={this.props.className}>
          <ListSort
            dragClassName="list-drag-selected"
            appearAnim={{ animConfig: { marginTop: [5, 30], opacity: [1, 0] } }}
          >
            <SmallTable {...this.props} columns={columns} dataSource={this.props.dataSource.toArray()} />
          </ListSort>
        </div>
      </div>
    )

  }
}
