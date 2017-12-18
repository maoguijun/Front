/**
 * Created by Yurek on 2017/7/11.
 */

import { injectReducer } from 'store/reducers'
import { rootPath,chilPath } from '../../../config'


export default (store) => ({
  path : rootPath.bill_to,
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const bill_to = require('./container/bill_to').default;
      const reducer = require('./modules/bill_to').default
      injectReducer(store, { key: 'billTo', reducer })
      cb(null, bill_to)
    }, 'bill_to')
  },
})


