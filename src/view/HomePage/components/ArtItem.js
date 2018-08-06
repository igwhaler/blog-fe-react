import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/artItem.less'

class ArtItem extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  filters () {
    return {
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
  }

  render() {
    let { article } = this.props
    let { getDate, getMonth, getYear } = this.filters()

    return (
      <div className="art-item">
        <div className="article clearfix">
          <div className="article-date">
            <span className="date day">{ getDate(article.created) }</span>
            <span className="date month">{ getYear(article.created) }-{ getMonth(article.created) }</span>
          </div>
          <div className="article-main">
            <div className="content">
              <h2>
                <Link to={`/react/article/${article.id}`}>{article.title}</Link>
              </h2>
              <p>{ article.summary }</p>
              <div className="g-cover">
                <img src={ article.cover } alt={ article.title } />
              </div>
            </div>
            <div className="more">
              <span>
                <Link to={`/react/article/${article.id}`}>更多>>></Link>
              </span>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default ArtItem;
