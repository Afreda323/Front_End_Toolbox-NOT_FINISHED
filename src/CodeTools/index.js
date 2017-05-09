import React from 'react';
import { Route } from 'react-router-dom'
import CodeToolsHome from './CodeToolsHome'
import CSSMin from './CSSMin'
import JSMin from './JSMin'
import AP from './AP'

export default class CodeTools extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
          <div>
            <Route exact path='/codetools' component={CodeToolsHome}/>
            <Route path='/codetools/cssmin' component={CSSMin}/>
            <Route path='/codetools/jsmin' component={JSMin}/>
            <Route path='/codetools/autoprefixer' component={AP}/>
          </div>
    );
  }
}
