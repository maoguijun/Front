
import React from 'react'
import { Form, Row, Col, Input, Button, Icon,DatePicker  } from 'antd'
import {injectIntl} from 'react-intl'
import './title.scss'

class Title extends React.PureComponent {
  static  contextTypes={
    router: React.PropTypes.object.isRequired
  }

  render(){
    const {intl:{formatMessage},rightContent}=this.props;
    return(
      <div className="title_all">
        <span className="title_words">{this.props.title}</span>
        <div>{rightContent&&rightContent}</div>
      </div>

    )

  }

}


export default  injectIntl(Title)
