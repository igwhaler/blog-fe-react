import React, { Component } from 'react';
import Axios from 'axios'
import './styles/index.less'
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
    return Axios.get(`/api/graphql?query={articles{list{id,title,summary,cover,created}}}`).then(res => {
      console.log(res)

      return res
    }).catch(err => {
      console.log(err)
    })
  }

  async componentWillMount() {
    const res = await this.graphqlArticleList()

    this.setState({
      articleList: res.articles.list
    })
  }

  render() {
    let { articleList } = this.state

    return (
      <div className="home-page">
        {
          articleList.map((article, index) => <div className="grid-article" key={index}> <ArtItem  article={article} /> </div>)
        }
      </div>
    );
  }
}

export default HomePage;
