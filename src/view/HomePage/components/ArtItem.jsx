import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/artItem.less'

function ArtDate (props) {
  const Utils = {
    getDate(time) {
      let date = (new Date(time)).getDate()

      return date < 10 ? `0${date}` : date
    },

    getMonth(time) {
      let month = (new Date(time)).getMonth() + 1

      return month < 10 ? `0${month}` : month
    },

    getYear(time) {
      return (new Date(time)).getFullYear()
    }
  }

  let { created } = props

  return (
    <div className="article-date">
      <span className="date day">{Utils.getDate(created)}</span>
      <span className="date month">{Utils.getYear(created)}-{Utils.getMonth(created)}</span>
    </div>
  )
}

class ArtItem extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    let { article } = this.props

    return (
      <div className="art-item">
        <div className="article clearfix">
          <ArtDate created={article.created} />

          <div className="article-main">
            <div className="content">
              <h2>
                <Link to={`/blog/article/${article.id}`}>{article.title}</Link>
              </h2>
              <p>{ article.summary }</p>
              <div className="g-cover">
                <img src={ article.cover } alt={ article.title } />
              </div>
            </div>
            <div className="more">
              <span>
                <Link to={`/blog/article/${article.id}`}>更多>>></Link>
              </span>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default ArtItem;
