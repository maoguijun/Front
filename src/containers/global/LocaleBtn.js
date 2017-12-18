import React from 'react'
import { connect } from 'react-redux'
import { injectIntl, intlShape } from 'react-intl'
import { Button,Icon } from 'antd'
import { LOCALE_CHANGE } from '../../store/locale'
import * as config from 'config'
const LocaleBtn = props => {
  const { formatMessage } = props.intl
  const toLocale = props.locale === config.locale.cn ? config.locale.en : config.locale.cn
  const onClick = () => {
    props.localeChange(toLocale)
    if (props.onLocaleChangeAfter) {
      props.onLocaleChangeAfter()
    }
  }
  return (
    <Button onClick={onClick}   className='locale-btn'>
      <Icon type="global" />{formatMessage({ id:'locale' })}
    </Button>
  )
}

const mapDispatchToProps = {
  localeChange: (locale = config.cn) => ({ type: LOCALE_CHANGE, payload: locale })
}
const mapStateToProps = (state) => ({
  locale: state.get('locale')
})

LocaleBtn.propTypes = {
  locale: React.PropTypes.string.isRequired,
  localeChange: React.PropTypes.func.isRequired,
  onLocaleChangeAfter: React.PropTypes.func,
  intl: intlShape.isRequired
}
export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(LocaleBtn))
