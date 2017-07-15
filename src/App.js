import React from 'react'
import Home from './Home'
import Template from './Template'
import Meal from './Meal'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/Template">模板</Link></li>
        <li><Link to="/Meal">套餐</Link></li>
        <li><Link to="/About">关于</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={Home}/>
      <Route path="/Template" component={Template}/>
      <Route path="/Meal" component={Meal}/>
      <Route path="/About" component={About}/>
    </div>
  </Router>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

export default App;
