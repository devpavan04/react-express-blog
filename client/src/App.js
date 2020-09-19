import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './home/home';
import About from './about/about';
import Compose from './compose/compose';
import Contact from './contact/contact';
import Post from './singlePost/post';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact render={() => <Home />} />
          <Route path='/about' render={() => <About />} />
          <Route path='/compose' render={() => <Compose />} />
          <Route path='/contact' render={() => <Contact />} />
          <Route path="/posts/:id" component={Post} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
