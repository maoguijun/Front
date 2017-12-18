
import React from 'react'
import { Form, Row, Col, Input, Button, Icon,DatePicker  } from 'antd'
import {injectIntl} from 'react-intl'
import './secondTitle_.scss'


class SecondTitle extends React.Component {
  static  contextTypes={
    router: React.PropTypes.object.isRequired
  }

  render(){
    const {intl:{formatMessage},rightContent}=this.props;
    return(
      <div className="title_all_">
        <div className="title_words_">{this.props.title}</div>
        <div className="right_content_">{rightContent&&rightContent}</div>
      </div>

    )

  }

}


export default  injectIntl(SecondTitle)
