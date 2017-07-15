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
      <ul className="publick_header clear">
        <div className="header_logo"></div>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/Template">模板</Link></li>
        <li><Link to="/Meal">套餐</Link></li>
        <li>关于</li>
      </ul>
      <div></div>
      <Route exact path="/" component={Home}/>
      <Route path="/Template" component={Template}/>
      <Route path="/Meal" component={Meal}/>
    </div>
  </Router>
)

export default App;
