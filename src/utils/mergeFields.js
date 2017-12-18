import _ from "lodash"
// const _ = require("lodash")
// let a = {
//   layer1: {
//     layer2: [
//       {layer3: 1},
//       {layer3: 1}
//     ]
//   }
// }

// mergeFields(a.layer1, [{value: 'layer2.layer3', prop: 'test'}])
// console.log(a)

function mergeFields (target, fields) {
  if (_.isArray(target)) {
    for (let i of target) {
      mergeFields(i, fields)
    }
  } else if (_.isObject(target)) {
    let obj = target
    let result = {}

    for (let field of fields) {
      if (field.value.includes('.')) {
        deepFind(obj, field, result)
      }
    }

    Object.assign(obj, result)
  } else {
    throw new Error('target 必须是 object 或者 array')
  }
}


function deepFind (obj, Field, result) {
  let deepValue = Field.value.split('.')
  let [key, field] = deepValue
  let prop = Field.prop

  if (deepValue.length === 2) {
    if (_.isArray(obj[key])) {

      for (let i of obj[key]) {
        if (!result[prop]) {
          result[prop] = [i[field]]
        } else {
          result[prop].push(i[field])
        }
      }
    } else {
      result[prop] = obj[key][field]
    }
  } else {
    deepValue.shift()
    if (_.isArray(obj[key])) {
      for (let i of obj[key]) {
        deepFind(i, {
          value: deepValue.join('.'),
          prop
        }, result)
      }
    } else if (_.isObject(obj[key])) {
      deepFind(obj[key], {
        value: deepValue.join('.'),
        prop
      }, result)
    } else {
      result[key] = obj[key]
    }
  }
}

module.exports = mergeFields
