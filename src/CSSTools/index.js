import React from 'react';
import {Route } from 'react-router-dom'
import BoxShadow from './BoxShadow'
import TextShadow from './TextShadow'
import Transforms from './Transforms'
import Filters from './Filters'
import CSSToolsHome from './CSSToolsHome'
export default class CSSTools extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
          <div>
            <Route exact path='/csstools/' component={CSSToolsHome}/>
            <Route path='/csstools/boxshadow' component={BoxShadow}/>
            <Route path='/csstools/textshadow' component={TextShadow}/>
            <Route path='/csstools/transforms' component={Transforms}/>
            <Route path='/csstools/filters' component={Filters}/>
          </div>
    );
  }
}
