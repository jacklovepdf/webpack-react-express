/**
 * Created by chengyong.lin on 18/3/12.
 */

'use strict';
import actionType from '../common/actionType';

const initState = {
  sum: undefined
};

export default function sumState(state=initState, action) {
  let { data, type } = action;

  switch (type) {
    case actionType.NUMBER_SUM :
      return {
        ...state,
        sum: data
      };
    default:
      return {
        ...state
      }
  }
}
