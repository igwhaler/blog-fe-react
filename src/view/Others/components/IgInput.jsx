import React, { Component } from 'react';

class IgInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      temperature: this.props.temperature
    }
  }

  handleChange = (e, scale, temperature) => {
    this.props.changeMyValue(scale, temperature, e.target.value)
  }

  render () {
    let { scale, temperature } = this.props

    return (
      <div>
        <input value={temperature} onChange={(e) => { this.handleChange(e, scale, temperature)} } type="text"/>
      </div>
    )
  }
}

export default IgInput;