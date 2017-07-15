import React from 'react'
import Meal from './Meal'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Template = ({ match }) => (
  <Router>
  <div>
    <h2>Template</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          Rendering with React
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li>
    </ul>
    <Route path={`${match.url}/:rendering`} component={Meal}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
  </Router>
)

export default Template;