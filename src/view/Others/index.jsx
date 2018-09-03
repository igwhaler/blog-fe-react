import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld.jsx'
import Clock from './components/Clock.jsx'
import './styles/index.less'

class Others extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isShow: true
    }
  }

  getName(f, l) {
    return (<div>{`${f} ${l}`}</div>)
  }

  render () {
    return (
      <div className="g-others">
        <div className="g-btn">
          <input type="button" value="按钮" />
        </div>

        <div className="g-row">{this.getName('firstName', 'lastName')}</div>

        <div className="g-row">
          <HelloWorld name="hello world" />
        </div>

        <div className="g-row">
          <Clock tip=" hehe" />
        </div>
      </div>
    )
  }
}

export default Others;
