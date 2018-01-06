/**
 * Created by chengyong.lin on 18/1/3.
 */
import React from 'react'
import {
  Route,
  BrowserRouter,
  Link,
} from 'react-router-dom'
import Home from '../views/home/index'
import Detail from '../views/detail/index'

export default () => (
  <BrowserRouter>
    <div>
      <ul>
        <li key="menu-home"><Link to="/">Home</Link></li>
        <li key="menu-detail"><Link to="/detail">Detail</Link></li>
      </ul>
      <hr />
      <Route path="/" component={Home} key="home" />
      <Route path="/detail" component={Detail} key="detail" />
    </div>
  </BrowserRouter>
)
