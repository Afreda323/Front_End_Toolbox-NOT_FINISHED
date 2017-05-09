import React from 'react';
import { Route } from 'react-router-dom'
import DevToolsHome from './DevToolsHome'
import CheckList from './CheckList'

export default class DevTools extends React.Component {
  //SCROLL TO TOP ON LOAD
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
          <div>
            <Route exact path='/devtools/' component={DevToolsHome}/>
            <Route exact path='/devtools/checklist/' component={CheckList}/>
          </div>
    );
  }
}
