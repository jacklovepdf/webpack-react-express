/**
 * Created by chengyong.lin on 18/3/12.
 */

'use strict';

import actionType from '../common/actionType';

const  getNumSum = (add1,add2) => {
  return {
    type: actionType.NUMBER_SUM,
    data: add1 + add2
  }
}

export default getNumSum
