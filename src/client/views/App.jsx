/**
 * Created by chengyong.lin on 17/12/19.
 */
import React, { Component } from 'react' // eslint-disable-line
import {
  Route,
  BrowserRouter,
  Link,
} from 'react-router-dom'

import Home from './home/container'
import Detail from './detail/index.jsx'

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li key="menu-home"><Link to="/">Home</Link></li>
            <li key="menu-detail"><Link to="/detail">Detail</Link></li>
          </ul>
          <hr />
          <Route path="/" component={Home} key="home" exact />
          <Route path="/detail" component={Detail} key="detail" />
        </div>
      </BrowserRouter>
    )
  }
}

