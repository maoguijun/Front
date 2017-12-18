import React from 'react'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import localeDate from '../locale'
import {LocaleProvider} from 'antd'
import {locale} from '../config'
import en from 'antd/lib/locale-provider/en_US';
import moment from 'moment';
moment.locale('zh');

function mapStateToProps (state) {
  const locale = state.get('locale')
  const messages = localeDate[locale]
  return { locale: locale, messages }
}
const I18nWithAntd=props=>{
  const localProps=props.locale===locale.en?en:undefined;
  return <IntlProvider {...props}><LocaleProvider locale={en}>{props.children}</LocaleProvider></IntlProvider>
}

export default connect(mapStateToProps)(I18nWithAntd)
