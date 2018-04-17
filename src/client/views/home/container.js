/**
 * Created by chengyong.lin on 18/3/18.
 */

'use strict';

import React from 'react'
import { connect } from 'react-redux'
import Home from './index.jsx'
import getNumSum from '../../actions/index'

const mapState2Props = (state) => {
    return {
      sumState: state
    }
};
const  mapDispatch2Props = {
    getNumSum
  };
export default connect(mapState2Props, mapDispatch2Props)(Home)
