const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')
const path = require('path')

const app = express()

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))

const posts = []

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/posts', (req, res) => {
  res.json(posts)
})

app.post('/compose', (req, res) => {
  const post = {
    title: req.body.title,
    content: req.body.content
  }
  if (posts.length === 0) {
    post.id = 1
  } else {
    post.id = posts[posts.length - 1].id + 1
  }
  posts.push(post)
})

app.get('/posts/:id', (req, res) => {
  const postRequested = posts.find(p => p.id === parseInt(req.params.id))
  if (postRequested !== undefined) {
    res.json(postRequested)
  } else {
    res.json({ errorMsg: 'Post not found....' })
  }
})

app.delete('/posts/delete/:id', (req, res) => {
  const postRequestedToDelete = posts.find(p => p.id === parseInt(req.params.id))
  if (postRequestedToDelete !== undefined) {
    const index = posts.indexOf(postRequestedToDelete)
    posts.splice(index, 1)
    res.json(posts)
  } else {
    res.json({ errorMsg: 'Post not found....' })
  }
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
})