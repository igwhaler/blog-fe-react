import React, { Component } from 'react';
import HelloWorld from './components/HelloWorld.jsx'
import Clock from './components/Clock.jsx'
import IgInput from './components/IgInput.jsx'
import './styles/index.less'


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

class Others extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isShow: true,
      value: 1,
      igValue: 0,

      celsius: 0,
      fahrenheit: 0,
      scale: 'c'
    }

    this.handleClick_1 = this.handleClick_1.bind(this)
  }

  getName(f, l) {
    return (<div>{`${f} ${l}`}</div>)
  }

  handleClick_1 (e) {
    console.log(e, this)
  }

  handleClick_2(a, e) {
    console.log(a, e, this)
  }

  handleClick_3 = (e, a) => {
    console.log(e, this, a)

    this.setState(preState => ({
      isShow: !preState.isShow
    }))
  }

  handelChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  changeIgValue = (scale, temperature, value) => {
    if (scale === 'c') {
      this.setState({
        celsius: value,
        fahrenheit: toFahrenheit(value)
      })
    }

    if (scale === 'f') {
      this.setState({
        celsius: toCelsius(value),
        fahrenheit: value
      })
    }
  }

  render () {
    // let { handleClick_3 } = this

    return (
      <div className="g-others">
        <div className="g-btn">
          <input onClick={this.handleClick_1} type="button" value="按钮1" />

          <input onClick={this.handleClick_2.bind(this, 1)} type="button" value="按钮2" />
          <input onClick={(e) => { this.handleClick_2(2, e)}} type="button" value="按钮2" />

          <input onClick={this.handleClick_3} type="button" value="按钮3" />
          <input onClick={(e) => { this.handleClick_3(e, 456) }} type="button" value="按钮3" />
        </div>

        <div className="g-row">{this.getName('firstName', 'lastName')}</div>

        <div className="g-row">
          <HelloWorld
            myValue={this.state.igValue}
            name="hello world"
            left={
              <IgInput
                scale="c"
                temperature={this.state.celsius}
                changeMyValue={this.changeIgValue}
              />
            }
            right={
              <IgInput
                scale="f"
                temperature={this.state.fahrenheit}
                changeMyValue={this.changeIgValue}
              />
            }>
            <div>789</div>
          </HelloWorld>
        </div>

        <div className="g-row">
          {
            this.state.isShow ? <Clock tip=" hehe" /> : '无'
          }
        </div>

        <div className="g-row">
          <input value={this.state.value} onChange={(e) => {this.handelChange(e)}} type="text"/>
          <p>{this.state.value}</p>
        </div>
      </div>
    )
  }
}

export default Others;
