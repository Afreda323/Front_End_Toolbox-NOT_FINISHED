import React from 'react';
import {Link} from 'react-router-dom';

const Links = (props) => {
  return (
    <main className='Links'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <Link to='/csstools/' className='link'>
              <h2>CSS Tools</h2>
            </Link>
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
          </div>
          <div className='col-sm-12'>
            <Link to='/codetools/' className='link'>
              <h2>Code Tools</h2>
            </Link>
            <Link to='/codetools/autoprefixer' className='link'>
              <h4>Browser Prefix Generator</h4>
            </Link>
            <Link to='/codetools/cssmin' className='link'>
              <h4>CSS Minifier</h4>
            </Link>
            <h4>More coming soon...</h4>
          </div>
          <div className='col-sm-12'>
            <Link to='/devtools/' className='link'>
              <h2>Development Tools</h2>
            </Link>
            <Link to='/devtools/checklist' className='link'>
              <h4>Site Launch Checklist</h4>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Links
