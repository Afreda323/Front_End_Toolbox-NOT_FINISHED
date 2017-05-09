import React from 'react';
import ReactDOM from 'react-dom';
import App from './home/App';
import Tools from './CSSTools/';
import CodeTools from './CodeTools/';
import DevTools from './DevTools/';
import './index.css';
import gh from './gh.png'
import ant from './AntLogo.png'
import { BrowserRouter, Route } from 'react-router-dom'

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './reducers';
import Nav from './Nav'

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <BrowserRouter>
      <div className='site-wrap'>
        <Nav />
        <Route exact path="/" component={App}/>
        <Route path="/csstools" component={Tools}/>
        <Route path="/codetools" component={CodeTools}/>
        <Route path="/devtools" component={DevTools}/>
        <footer>
          <a href='http://antfreda.com'>
            <div className='left'>
                <img src={ant} alt='AntFreda logo' />
            </div>
          </a>
          <div className='right'>
            <img src={gh} alt='Github logo' />
          </div>
        </footer>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
