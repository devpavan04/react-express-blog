import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom"
import './post.css'

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: this.props.match.params.id,
      post: null,
      error: null,
      idToDelete: null
    }
  }

  componentDidMount = () => {
    axios.get(`/posts/${this.state.id}`)
      .then(response => {
        if (!response.data.errorMsg) {
          this.setState({ post: response })
        } else {
          this.setState({ error: response.data.errorMsg })
        }
      })
  }

  deletePost = (id) => {
    this.setState({ idToDelete: id }, () => {
      axios.delete(`/posts/delete/${this.state.idToDelete}`)
        .then(response => {
          if (!response.data.errorMsg) {
            this.setState({ posts: response.data })
            this.props.history.push("/")
          } else {
            this.setState({ error: response.data.errorMsg })
          }
        })
    })
  }

  render() {
    const { post, error } = this.state
    return (
      <div className='container'>
        {
          post !== null && error === null ?
            <React.Fragment>
              <h1>{post.data.title}</h1>
              <p>{post.data.content}</p>
              <button onClick={() => { this.deletePost(post.data.id) }}>Delete Post</button>
            </React.Fragment> :
            <h1>{error}</h1>
        }
      </div>
    )
  }
}

export default withRouter(Post)
