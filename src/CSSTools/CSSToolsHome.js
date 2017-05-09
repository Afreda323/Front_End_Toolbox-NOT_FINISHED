import React from 'react';
import {Link} from 'react-router-dom'

export default class CSSToolsHome extends React.Component {
  //  CHANGE PAGE TITLE
  componentDidMount() {
    document.title = 'CSS Tools'
  }
  render() {
    return (
      <div className='full'>
        <header>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-10 col-lg-8'>
                <h1 className='display-4'>CSS Tools</h1>
                <p className='lead'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </header>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12'>
              <Link to='/csstools/boxshadow' className='link'>
                <h4>Box-Shadow Generator</h4>
              </Link>
              <Link to='/csstools/textshadow' className='link'>
                <h4>Text-Shadow Generator</h4>
              </Link>
              <Link to='/csstools/transforms' className='link'>
                <h4>Transform Generator</h4>
              </Link>
              <Link to='/csstools/filters' className='link'>
                <h4>Image Filter Generator</h4>
              </Link>
              <h4>More coming soon...</h4>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
