import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom"
import './compose.css'

class Compose extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      content: ''
    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    const post = {
      title: this.state.title,
      content: this.state.content
    }
    axios.post('/compose', post)
      .then(response => console.log(response))
      .catch(error => console.log('Error while posting...'))
    this.props.history.push("/")
  }

  render() {
    const { title, content } = this.state
    return (
      <div className='container'>
        <h1>Compose</h1>
        <form onSubmit={this.submitHandler}>
          <label>Title</label>
          <input type='text' name='title' value={title} onChange={this.changeHandler} />
          <label>Content</label>
          <textarea name='content' value={content} onChange={this.changeHandler} />
          <button type='submit'>Post</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Compose);
