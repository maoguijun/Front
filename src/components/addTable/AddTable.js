import React from 'react'
import {Table,Button,Select,Icon} from 'antd'
import Immutable from 'immutable'
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import {immutableValueRender,autoMergeCells,columnMapFuns} from '../../utils/columns'
import ListSort from '../../components/ListSort';
import './AddTable.css'
const { Option } = Select
const ButtonGroup  = Button.Group

const SmallTable = (props) => <Table bordered={true} size="small" {...props} />


//格子里加Select
export class SelectableCell extends React.Component {
  componentWillReceiveProps(nextProps) {
    nextProps.option.map(item => {
      <Option key={itme.dataIndex}>{item.dataIndex}</Option>
    })
  }
  render() {
    const { value, editable } = this.state;
    return (
      <Select className="editable-cell">
        {options}
      </Select>
    );
  }
}

//添加add按钮
// export class SmallAddTable extends React.PureComponent {
//   constructor(props) {
//     super(props)
//     this.state={
//       dataSource:[]
//     }
//     this.handleAdd = this.handleAdd.bind(this)
//   }
//   handleAdd() {
//     const { dataSource } = this.state;
//     let newData = new Map()
//     this.setState({
//       dataSource:[...dataSource,newData]
//     })
//   }
//   componentWillReceiveProps(nextprops) {
//     this.setState({
//       dataSource:nextprops.dataSource
//     })
//   }
//   render() {
//     const { dataSource } = this.state
//     //console.log(29999,dataSource)
//     return (
//       <div>
//         <SmallTable {...this.props} dataSource={dataSource}/>
//       </div>
//     )
//   }
// }

//添加选择项，click row 自动选择,
export class SmallSelectionTable extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      selectedRowKeys:[],
      dataSource:[],
      upable:true,
      downable:true,
    }
    this.handleAdd = this.handleAdd.bind(this)
  }
  onChange=()=>{
    const {dataSource,rowSelection}=this.props;
    if(dataSource && rowSelection && rowSelection.onChange){
      rowSelection.onChange(this.state.selectedRowKeys,this.state.selectedRowKeys.map(index=>dataSource[index]));
    }
  }
  componentWillReceiveProps(nextprops) {
    // //console.log(811111111,nextprops.dataSource,this.state.dataSource)
    // let dataSource = []
    // for(let i=0;i<nextprops.dataSource.length;i++){
    //   let obj = {}
    //   obj.index = nextprops.dataSource[i].get('index')||i+1
    //   obj.id = nextprops.dataSource[i].get('id')
    //   obj.clientPoId = nextprops.dataSource[i].get('clientPoId')
    //   obj.gross = nextprops.dataSource[i].get('gross')
    //   obj.description = nextprops.dataSource[i].get('description')
    //   dataSource.push(obj)
    // }
    // //console.log(944444,dataSource)
    this.setState({
      // dataSource:Immutable.fromJS(dataSource),
      dataSource:nextprops.dataSource
    })
  }
  componentDidUpdate(nextProps, nextState){
    const {selectedRowKeys,dataSource} = this.state
    ////console.log(90,selectedRowKeys,dataSource)
    // //对被选中的index排序

      selectedRowKeys.sort((a,b)=>a-b)
      if(selectedRowKeys[0]>0){
        this.setState({upable:false})
      }else{
        this.setState({upable:true})

      }


      if(selectedRowKeys[selectedRowKeys.length-1]<dataSource.length-1){
        this.setState({downable:false})
      }else{
        this.setState({downable:true})

      }
  }
  handleAdd() {
    ////console.log('aaa')
    const { dataSource } = this.state;
    let newData = new Map().set('index',99999)
    this.setState({
      dataSource:[...dataSource,newData]
    })
  }
  handleUp() {
    let dataSource = []
    ////console.log(this.state.dataSource.length,this.state.selectedRowKeys,this.state.selectedRowKeys[0])
    for(let i=0;i<this.state.dataSource.length;i++){
      ////console.log(i)
      ////console.log(this.state.selectedRowKeys.indexOf(1))
      if(this.state.selectedRowKeys.indexOf(i)!=-1){
        ////console.log(133,i)
        dataSource[i-1] = this.state.dataSource[i]
      }else if(i ==(this.state.selectedRowKeys[0]-1)){
        ////console.log(136,i)
        dataSource[i+this.state.selectedRowKeys.length] =this.state.dataSource[i]
      }else{
        ////console.log(139,i)
        dataSource[i] = this.state.dataSource[i]
      }
    }
    this.setState({
      dataSource:dataSource,
      selectedRowKeys:this.state.selectedRowKeys.map(item=>item-1),
    })
   }

  handleDown() {
    let dataSource = []
    ////console.log(this.state.dataSource.length,this.state.selectedRowKeys,this.state.selectedRowKeys[0])
    for(let i=0;i<this.state.dataSource.length;i++){
      ////console.log(i)
      ////console.log(this.state.selectedRowKeys.indexOf(1))
      if(this.state.selectedRowKeys.indexOf(i)!=-1){
        ////console.log(133,i)
        dataSource[i+1] = this.state.dataSource[i]
      }else if(i ==(this.state.selectedRowKeys[this.state.selectedRowKeys.length-1]+1)){
        ////console.log(136,i)
        dataSource[i-this.state.selectedRowKeys.length] =this.state.dataSource[i]
      }else{
        ////console.log(139,i)
        dataSource[i] = this.state.dataSource[i]
      }
    }
    this.setState({
      dataSource:dataSource,
      selectedRowKeys:this.state.selectedRowKeys.map(item=>item+1),
    })
  }

  render() {
    const { dataSource} = this.state
    const props={

      //单击行自动选择
      onRowClick: (record, index,e) => {
        ////console.log('onRowClick', index, e,record);
        //有数据的行才执行下面的选择操作
        if (record.size>1) {
          if (this.state.selectedRowKeys.indexOf(index) < 0) {
            ////console.log(103, this.props.rowSelection)
            if (this.props.rowSelection && this.props.rowSelection.type === 'radio') {
              this.setState({ selectedRowKeys: [index] }, this.onChange)
            } else {
              this.setState({ selectedRowKeys: this.state.selectedRowKeys.concat(index) }, this.onChange)
            }
          } else {
            if (this.props.rowSelection && this.props.rowSelection.type === 'radio') {
              this.setState({ selectedRowKeys: this.state.selectedRowKeys.filter(item=>item!==index) }, this.onChange)
            } else {
              this.setState({ selectedRowKeys: this.state.selectedRowKeys.filter(item=>item!==index) }, this.onChange)
            }
          }
        }
      },
      ...this.props,
      rowSelection:{
        ...this.props.rowSelection,
        selectedRowKeys:this.state.selectedRowKeys,

        //单选框改变时自动设置 selectedRowKeys,并回调props onChange
        onChange: (keys, rows) => {
          this.setState({selectedRowKeys:keys},this.onChange)
        }
      }
    }
    ////console.log('selectedRowKeys',this.state.selectedRowKeys)
    const {upable,downable} = this.state
    return (
      < SmallTable {...props }
        dataSource={dataSource}
        footer={()=>(
          <div>
            <Button className="editable-add-btn" onClick={this.handleAdd} disabled={this.props.isable}>
              <Icon type="plus" />
              增加条目
            </Button>
            <ButtonGroup style={{marginLeft:'16px'}}>
              <Button onClick={()=>this.handleUp()} disabled={upable}>
                <Icon type='up'></Icon>
              </Button>
              <Button onClick={()=>this.handleDown()} disabled={downable}>
                <Icon type='down'></Icon>
              </Button>
            </ButtonGroup>
          </div>
        )}
      />
    )
  }
}




/**
 * 参数说明
 * dataSource    表格数据              类型：Immutable.List()
 * mergeCells    是否自动合并单元格      类型：boolean   //需要在columns中设置表单 mergeCells为 true
 *
 * **/
export class AddTable extends React.PureComponent{
  static defaultProps={
    dataSource:Immutable.List(),
  }

  constructor(props) {
    super(props)
    this.enterAnim = [
      { opacity: 0, x: 30, backgroundColor: '#fffeee', duration: 0 },
      {
        height: 0,
        duration: 200,
        type: 'from',
        delay: 250,
        ease: 'easeOutQuad',
        onComplete: this.onEnd,
      },
      { opacity: 1, x: 0, duration: 250, ease: 'easeOutQuad' },
      { delay: 1000, backgroundColor: '#fff' },
    ];
    this.leaveAnim = [
      { duration: 250, opacity: 0 },
      { height: 0, duration: 200, ease: 'easeOutQuad' },
    ];
    this.currentPage = 1;
    this.newPage = 1;
    this.state={
      data:[]
    }
  }

  getBodyWrapper = (body) => {
    if (this.currentPage !== this.newPage) {
      this.currentPage = this.newPage;
      return body;
    }
    return (<TweenOneGroup
      component="tbody"
      className={body.props.className}
      enter={this.enterAnim}
      leave={this.leaveAnim}
      appear={false}
    >
      {body.props.children}
    </TweenOneGroup>);
  }
  componentDidUpdate(nextProps,nextState){
    this.setState({
      data:this.data
    })
  }
  render(){
    // //console.log('渲染Immutable Table',this.props.dataSource)
    //console.log(292929292,this.props.columns,this.props.mergeCells)
    const columns=this.props.columns.map(
      this.props.mergeCells?
      columnMapFuns(immutableValueRender,autoMergeCells(this.props.dataSource)):
      immutableValueRender
    );
    return <SmallSelectionTable
      ref={f=>this.data = f}
      rowClassName={(record,index)=>{return index%2===0?'row-a':'row-b'}}  {...this.props}
      columns={columns}
      dataSource={this.props.dataSource.toArray()} />
  }

}
