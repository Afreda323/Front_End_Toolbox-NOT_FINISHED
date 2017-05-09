import React from 'react';
import {Link} from 'react-router-dom'
export default class CodeToolsHome extends React.Component {
  componentDidMount() {
    document.title = 'Code Tools'
  }
  render() {
    return (
      <div className='full'>
        <header>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-10 col-lg-8'>
                <h1 className='display-4'>Code Tools</h1>
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
              <Link to='/codetools/cssmin' className='link'>
                <h4>CSS Minifier</h4>
              </Link>
              <Link to='/codetools/autoprefixer' className='link'>
                <h4>Browser Prefix Genarator</h4>
              </Link>
              <h4>More coming soon...</h4>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
