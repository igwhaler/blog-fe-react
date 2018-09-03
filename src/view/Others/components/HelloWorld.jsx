import React, { Component } from 'react';

const Welcome = (props) => (
  <span>{props.name}</span>
)

class HelloWorld extends Component {
  render() {
    let { name } = this.props

    return (
      <div>
        <Welcome name="welcome "/>
        <span>{name}</span>
      </div>
    )
  }
}

export default HelloWorld
