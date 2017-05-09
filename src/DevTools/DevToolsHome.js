import React from 'react';
import {Link} from 'react-router-dom'

export default class DevToolsHome extends React.Component {
    componentDidMount() {
        document.title = 'Development Tools'
    }
    render() {
        return (
            <div className='full'>
                <header>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-12 col-md-10 col-lg-8'>
                                <h1 className='display-4'>Dev Tools</h1>
                                <p className='lead'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-12'>
                            <Link to='/devtools/checklist' className='link'>
                                <h4>Site Deployment Checklist</h4>
                            </Link>
                            <h4>More coming soon...</h4>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
