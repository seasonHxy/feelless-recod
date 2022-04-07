import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './style/index.less'

if (module && module.hot) {
  module.hot.accept();
}
ReactDom.render(
  <App/>, document.getElementById("root")
)
