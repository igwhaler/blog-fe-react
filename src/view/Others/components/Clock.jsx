import React, { Component } from 'react';

const getLocalTime = () => new Date().toLocaleTimeString();

class Clock extends Component {
  constructor (props) {
    super(props)

    this.state = {
      time: getLocalTime()
    }
    this.timer = null
  }

  runClock () {
    this.timer = setInterval(() => {
      this.setState((preState, props) => ({
        time: getLocalTime() + props.tip
      }))
    }, 1000)
  }

  componentDidMount () {
    this.runClock()
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>{this.state.time}</div>
    )
  }
}

export default Clock
