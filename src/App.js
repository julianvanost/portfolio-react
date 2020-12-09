import React from 'react'
import Navbar from './components/Navbar'
import Home from './views/Home'
import About from './views/About'
import Portfolio from './views/Portfolio'
import Contact from './views/Contact'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"


const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path="/portfolio-react/" exact>
            <Home />
          </Route>
          <Redirect to="/portfolio-react" />
        </Switch>
      </Router>
    </>
  )
}
// TODO: Enable form functionality so that form actually sends emails when submit button is used.
export default App