/**
 * Created by chengyong.lin on 17/12/19.
 */
import React, { Component } from 'react' // eslint-disable-line
import Routes from '../config/router'

export default class App extends Component {
  componentDidMount() {
    // do sth
  }

  render() {
    return [
      <div key="title">this is a spa web app</div>,
      <Routes key="routes" />,
    ]
  }
}

