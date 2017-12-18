import { push } from 'react-router-redux'
import Immutable from 'immutable'

export const pathJump = (path) => {
  return dispatch => dispatch(push(path))
}
export function getLocale () {
  let locale = navigator.language.split('_')[0]
  if (locale.indexOf('en') > -1) {
    return 'en'
  }
  if (locale.indexOf('zh') > -1) {
    return 'zh'
  }
  return 'zh'
}

export const ifFin =(role,userInfo) => {
  if(!userInfo) return
  let ifFin = false
  userInfo.roles.map(v=>{
    if(v.id===role){
      ifFin = true
    }
  })
  return ifFin
}

export const deleteSameData=(smallaccount,account)=>{
  //console.log(smallaccount)

  let _smallacount = smallaccount.toJS();
  let _account = account.toJS();
  _smallacount.map(v=>{
    _account.map((x,i)=>{
      if(x.id ==v.id){
        _account.splice(i,1)
      }
    })
  })
  return Immutable.fromJS(_account)
}

// 防抖动
export function debounce (func, wait, immediate) {
  var timeout, args, context, timestamp, result

  var later = function () {
    var last = +new Date() - timestamp
    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) { context = args = null }
      }
    }
  }

  return function () {
    context = this
    args = arguments
    timestamp = +new Date()
    var callNow = immediate && !timeout

    if (!timeout) { timeout = setTimeout(later, wait) }

    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
};


export function formatLang(language=""){
  //alert(typeof language);
  //alert(JSON.stringify(language));
  if(language) {
    if (language.toLowerCase() == 'zh-cn' || language.toLowerCase() == 'cn') {
      language = 'zh'
    }
    else if (language.toLowerCase() == 'en-US' || language.toLowerCase() == 'en') {
      language = 'en'
    }
    else {
      language = 'all-lan'
    }
  }
  return language;
}


export function takeId(arr){
  let _idArr=[]
  arr.map(v=>{
    _idArr.push(v._root.entries[0][1])
  })
  return _idArr
}


