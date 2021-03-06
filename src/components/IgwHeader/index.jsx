import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './styles/index.less'
import logo from '../../assets/images/logo.png'

class IgwHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="igw-header">
        <div className="header-main">
          <div className="self-info">
            <div className="logo">
              <img src={ logo } alt="大鱼你个锅锅LOGO" title="大鱼你个锅锅" />
            </div>
            <h1 className="desc">
              <div>大鱼你个锅锅</div>
              <p>锅锅太懒, 啥都没留下~</p>
            </h1>
            <div className="menu">
              <ul className="clearfix">
                <li>
                  <Link to="/">首页</Link>
                </li>
                <li>
                  <Link to="/">HTML</Link>
                </li>
                <li>
                  <Link to="/">CSS</Link>
                </li>
                <li>
                  <Link to="/">Javascript</Link>
                </li>
                <li>
                  <Link to="/">杂项</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IgwHeader;
