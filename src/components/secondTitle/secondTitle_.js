import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'title_all_': {
    'height': [{ 'unit': 'px', 'value': 50 }],
    'display': 'flex',
    'textIndent': '13px',
    'backgroundColor': '#404040',
    'flexDirection': 'row',
    'justifyContent': 'start',
    'alignItems': 'center',
    'marginLeft': [{ 'unit': 'px', 'value': -10 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'position': 'fixed',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'zIndex': '999'
  },
  'title_all_ action-btn_': {
    'position': 'absolute',
    'right': [{ 'unit': 'px', 'value': 10 }],
    'top': [{ 'unit': 'px', 'value': 30 }]
  },
  'title_all_ action-btn_ ant-btn + ant-btn': {
    'marginLeft': [{ 'unit': 'px', 'value': 5 }]
  },
  'title_all_ title_words_': {
    'width': [{ 'unit': '%H', 'value': 0.3 }],
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'color': 'white'
  },
  'title_all_ right_content_': {
    'width': [{ 'unit': '%H', 'value': 0.6 }],
    'padding': [{ 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 16 }, { 'unit': 'px', 'value': 8 }]
  },
  'title_all_ right_content_ switch': {
    'textAlign': 'right',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }]
  },
  'title_all_ right_content_ switch span': {
    'color': '#fff'
  }
});
