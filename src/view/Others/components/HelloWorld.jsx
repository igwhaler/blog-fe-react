import React, { Component } from 'react';

const Welcome = (props) => (
  <span>{props.name}</span>
)

class HelloWorld extends Component {
  render() {
    let { props } = this
    let { name, myValue } = props

    return (
      <div>
        <Welcome name="welcome "/>
        <span>{name}</span>
        <p>{myValue}</p>

        {props.children}

        {props.left}

        {props.right}
      </div>
    )
  }
}

export default HelloWorld
