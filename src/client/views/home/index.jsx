/**
 * Created by chengyong.lin on 18/1/3.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  inject,
  observer,
} from 'mobx-react'
import {
  AppState,
} from '../../store/appState'

@inject('appState') @observer
export default class Home extends Component {
  componentDidMount() {
    this.timerId = setInterval(() => {
      this.props.appState.add();
    }, 1000)
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId)
    }
  }
  render() {
    return (
      <div> {this.props.appState.msg} </div>
    )
  }
}

Home.propTypes = {
  appState: PropTypes.instanceOf(AppState).isRequired,
};
