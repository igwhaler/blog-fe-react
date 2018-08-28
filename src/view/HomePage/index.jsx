import React, { Component } from 'react';
import Axios from 'axios'
import './styles/index.less'

import IgwHeader from '../../components/IgwHeader'
import ArtItem from './components/ArtItem'

class HomePage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      articleList: []
    }
  }

  // graphql获取文章列表
  graphqlArticleList() {
    Axios.get(`/api/graphql?query={articles{list{id,title,summary,cover,created}}}`).then(res => {
      // console.log(res)

      this.setState({
        articleList: res.articles.list
      })
    }).catch(err => {
      console.log(err)
    })
  }

  componentWillMount() {
    this.graphqlArticleList()
  }

  render() {
    let { articleList } = this.state

    return (
      <div className="g-blog-container">
        <div className="blog-container">
          <IgwHeader />

          <div className="home-page">
            {
              articleList.map((article, index) => <div className="grid-article" key={index}> <ArtItem article={article} /> </div>)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
