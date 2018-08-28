import React, {Component} from 'react'
import Axios from 'axios'
import './styles/index.less'

import IgwHeader from '../../components/IgwHeader'

class ArtDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      isError: false,
      detail: ''
    }
  }

  getId() {
    let { id } = this.props.match.params

    if (id) {
      this.setState({id})
      this.getArtDetai(id)
    } else {
      this.setState({
        isError: true
      })
    }
  }

  getArtDetai(id) {
    Axios.get(`/api/graphql?query={artDetail(id: ${id}){detail}}`).then(res => {
      let { artDetail } = res

      this.setState({
        detail: artDetail.detail.replace(/[\r\n]/g, '')
      })
    }).catch(err => {
      this.setState({
        isError: true
      })
      console.error(err)
    })
  }

  componentDidMount () {
    this.getId()
  }

  render () {
    let { detail } = this.state

    return (
      <div className="g-blog-container">
        <div className="blog-container">
          <IgwHeader />
          <div className="art-detail">
            <div dangerouslySetInnerHTML={{ __html: detail }}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ArtDetail
