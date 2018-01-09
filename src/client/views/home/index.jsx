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
  AppState
} from '../../store/appState'

@inject('appState') @observer
export default class Home extends Component {
  componentDidMount() {
    // do sth                // eslint-disable-line
  }

  render() {
    return (
      <div> {this.props.AppState.msg} </div>
    )
  }
}

Home.propTypes = {
  AppState: PropTypes.instanceOf(AppState).isRequired,
};
