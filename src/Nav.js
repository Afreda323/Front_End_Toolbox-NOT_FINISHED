import React from 'react';
import {NavLink, Link} from 'react-router-dom'
export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navExpandedClass: '',
      navAria: false,
      cssExpandedClass: '',
      cssAria: false,
      codeExpandedClass: '',
      codeAria: false,
      devExpandedClass: '',
      devAria: false
    }
  }
  //======================================================================

  // THIS NAV HAS VARIOUS FUNCTIONS FOR OPENING AND CLOSING SUB MENUS
  //  AS WELL AS FOR TOGGLING THE MOBILE navigation
  //  EVERY LINK HAS A CONDITIONAL ACTIVE CLASS

  // ---------------------------------------------

  //  THERE IS ALSO A NAV RESET FOR WHEN ANY CHANGED ARE MADE ON THE PAGE
  
  //======================================================================
  resetNav() {
    this.setState({
      navExpandedClass: '',
      navAria: false,
      cssExpandedClass: '',
      cssAria: false,
      codeExpandedClass: '',
      codeAria: false,
      devExpandedClass: '',
      devAria: false
    })
  }
  handleNav(){
      if (this.state.navExpandedClass === 'show') {
        this.setState({navExpandedClass: '', navAria: false})
      }else {
        this.setState({navExpandedClass: 'show', navAria: true})
      }
  }
  cssExpand(){
    if (this.state.cssExpandedClass === 'show') {
      this.setState({cssExpandedClass: '', cssAria: false})
    }else {
      this.setState({
        cssExpandedClass: 'show',
        cssAria: true,
        codeExpandedClass: '',
        codeAria: false,
        devExpandedClass: '',
        devAria: false});
    }
  }
  codeExpand(){
    if (this.state.codeExpandedClass === 'show') {
      this.setState({codeExpandedClass: '', codeAria: false})
    }else {
      this.setState({
        codeExpandedClass: 'show',
        codeAria: true,
        cssExpandedClass: '',
        cssAria: false,
        devExpandedClass: '',
        devAria: false})
    }
  }
  devExpand(){
    if (this.state.devExpandedClass === 'show') {
      this.setState({devExpandedClass: '', devAria: false})
    }else {
      this.setState({
        codeExpandedClass: '',
        codeAria: false,
        cssExpandedClass: '',
        cssAria: false,
        devExpandedClass: 'show',
        devAria: true
      })
    }
  }

  render() {
    return (
      <div className='container'>
        <nav className="navbar navbar-toggleable-md navbar-light">
            <button onClick={this.handleNav.bind(this)} className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded={this.state.navAria} aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <Link onClick={this.resetNav.bind(this)} className="navbar-brand" to="/">devTools.io</Link>
            <div className={`collapse navbar-collapse ${this.state.navExpandedClass}`} id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul className="navbar-nav">
                  <li className={`nav-item dropdown ${this.state.cssExpandedClass}`}>
                    <a onClick={this.cssExpand.bind(this)} href='#' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.cssAria}>
                      CSS Tools
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <NavLink activeClassName='active' onClick={this.resetNav.bind(this)} className='dropdown-item' to='/csstools/boxshadow' >
                        Box-Shadow Generator
                      </NavLink>
                      <NavLink activeClassName='active' onClick={this.resetNav.bind(this)} className='dropdown-item' to='/csstools/textshadow'>
                        Text-Shadow Generator
                      </NavLink>
                      <NavLink activeClassName='active' onClick={this.resetNav.bind(this)} className='dropdown-item' to='/csstools/transforms'>
                        Transform Generator
                      </NavLink>
                      <NavLink activeClassName='active' onClick={this.resetNav.bind(this)} className='dropdown-item' to='/csstools/filters'>
                        Image Filter Generator
                      </NavLink>
                    </div>
                  </li>
                  <li className={`nav-item dropdown ${this.state.codeExpandedClass}`}>
                    <a onClick={this.codeExpand.bind(this)} href='#' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.codeAria}>
                      Code Tools
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <NavLink activeClassName='active' onClick={this.resetNav.bind(this)} className='dropdown-item' to='/codetools/cssmin' >
                        CSS Minifier
                      </NavLink>
                      <NavLink activeClassName='active' onClick={this.resetNav.bind(this)} className='dropdown-item' to='/codetools/autoprefixer'>
                        AutoPrefixer
                      </NavLink>
                    </div>
                  </li>
                  <li className={`nav-item dropdown ${this.state.devExpandedClass}`}>
                    <a onClick={this.devExpand.bind(this)} href='#' className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.devAria}>
                      Dev Tools
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <NavLink activeClassName='active' onClick={this.resetNav.bind(this)} className='dropdown-item' to='/devtools/checklist' >
                        Launch Checklist
                      </NavLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
      </div>
    );
  }
}
