/**
 * Created by chengyong.lin on 18/1/3.
 */

import React, { Component } from 'react'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.add = this.add.bind(this);
  }

  render() {
    let obj1 = {name: "jack", age: 14};
    return (
      <div onClick={this.add} >
        <div>the sum of 1 and 2 is:</div>
        <div>{(this.props.sumState || {}).sum || ''} </div>
        <ComponentA {...obj1}/>
      </div>
    )
  }

  add(){
    this.props.getNumSum(1,2)
  }
}

class ComponentA extends Component {
  render() {
    return <div>{this.props.name}</div>
  }
}
