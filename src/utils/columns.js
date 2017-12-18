import Immutable from 'immutable'

// 根据参数的函数批量修改 column 属性
export function columnMapFuns() {
  const funs=arguments;
  return item=>{
    let result=item;
    Array.prototype.forEach.call(funs,fun=>{
      if(typeof fun==='function'){
        result=fun(result)
      }
    });
    return result;
  }
}

// 表格的column默认属性
export const defaultOption={
  operate:{
    width:100
  }
}


//合并表格的默认属性
export  function mergeColumnDefaultOption(column) {
  return defaultOption[column.dataIndex]?{...defaultOption[column.dataIndex],...column}:column;
}

//添加自动获取immutable值的render
export function immutableValueRender(column) {
  return {...column,render:(text,record,index)=>{
    const value=column.take?record.getIn(column.take):record.get(column.dataIndex);
    return column.render?column.render(value,record,index):value;
  }}
}

//根据数据的 merge 字段 合并单元格
export function mergeCells(column) {
  if(column.mergeCells){
    const mergeRender=(text,$record,index)=>({
      children:column.render?column.render(text,$record,index):text,
      props:{rowSpan:$record.get('merge')===undefined?1:$record.get('merge')}
    })
    return {...column,render:mergeRender}
  }
  return column;
}

//根据数据的 text 自动合并单元格
export function autoMergeCells($dataSource) {
  let $data;
  if($dataSource){
    $data=$dataSource.toList()
  }else{
    return
  }
  return function (column) {

    if( !(column.mergeCells ===true ||
        typeof column.mergeCells==='function')
    ){return column}

    const mergeRender=(text,$record,index)=>{
      const value=column.render?column.render(text,$record,index):text;
      const prevText=index-1<0?undefined:$data.getIn([index-1,column.dataIndex]);
      const nextText=$data.getIn([index+1,column.dataIndex]);
      const nowText=$data.get(index).get(column.dataIndex);
      const prevIsEqual=prevText===nowText
      const nextIsEqual=nextText===nowText

        // //console.log('index=',index,prevText,prevText)

      //  上面相等 Row=0
      if(prevIsEqual){
        return {
          children:value,
          props:{rowSpan:0}
        }
      }else if(nextIsEqual){

        //  上面不相等,下面相等 Row= 向下找到下面相等的个数
        let count=2
        while($data.getIn([index+count,column.dataIndex])===nowText){
          count ++
        }
        return {
          children:value,
          props:{rowSpan:count}
        }
      }

      //  上面不相等,下面不相等 Row= 1 默认值
      return value;
    }

    return {...column,render:mergeRender}
  }
}
