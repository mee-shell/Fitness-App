import React, {Component} from 'react'
import{BrowserRouter, Route, Switch} from 'react-router-dom'
import App from './App'
import About from './About'
import NotFound from './NotFound'
import TaskDetails from './TaskDetails'

class Routes extends Component{

// data
  state ={
  }


// renders html
// defining all routes within the browser router tag
  render(){
    return(
      <BrowserRouter>
      <Switch>
      <Route path="/" component={App} exact/>
      <Route path="/about" component={About}/>
      <Route path="/tasks/:id" component={TaskDetails}/>
      <Route component={NotFound}/>
      </Switch>

      </BrowserRouter>

    )
  }
}

export default Routes;
