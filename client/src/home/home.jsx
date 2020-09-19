import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './home.css'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount = () => {
    axios.get('/posts')
      .then(response => {
        this.setState({ posts: response.data })
      })
      .catch(error => {
        console.log('Something went wrong...')
      })
  }

  render() {
    const { posts } = this.state
    return (
      <div className='container'>
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        {
          posts.map(post => {
            const newTo = {
              pathname: `/posts/${post.id}`,
              param1: post.id
            };
            return (
              <div key={post.id}>
                <h3>{post.title}</h3>
                {
                  <p>{post.content.substring(0, 100)}...<Link to={newTo}>Read More</Link></p>
                }
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Home
