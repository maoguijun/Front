import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { addLocaleData } from 'react-intl'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import en from 'react-intl/locale-data/en'
import zh from 'react-intl/locale-data/zh'
import LocaleContainer from './LocaleContainer'
import enUS from 'antd/lib/locale-provider/en_US';
import { Modal, Button ,message} from 'antd';
import { pathJump } from '../utils/'
import '../styles/core.scss'
import moment from 'moment';
import '../routes/system_settings/bill_to/container/bill_to.scss'
import { fetchUserInfo } from '../routes/Login/modules/login'
moment.locale('zh');


class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  componentWillMount(){
    const {dispatch} = this.props
    dispatch(fetchUserInfo()).then(e=>{
      if(e.payload){

      }else{
        message.error(e.error.message);
        // dispatch(pathJump('/login'))
      }
    })
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store} = this.props;
    const history = syncHistoryWithStore(browserHistory, store, {
      selectLocationState (state) {
        return state.get('routing')
      }
    })

    addLocaleData([...en, ...zh])
    return (
      <Provider store={store}>
        <LocaleContainer>
          <div style={{ height: '100%' }}>
            <Router history={history} children={routes} />
          </div>
        </LocaleContainer>
      </Provider>
    )
  }
}

export default connect()(AppContainer);
// export default injectIntl(connect(mapStateToProps)(JRDetailsPage))
