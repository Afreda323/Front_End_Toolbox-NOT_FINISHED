import React from 'react';
import csso from 'csso'; 
import ClipboardButton from 'react-clipboard.js';

export default class CSSMin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      minified: '',
      copyText: 'Copy Code',
      err: false,
      errMessage: ''
    }
  }
  //SET PAGE TITLE
  componentDidMount() {
    document.title = 'CSS Minifier'
  }
  //HANDLE ERROR CLASS ON TEXTAREA
  getErr(){
    if (this.state.err) {
      return 'err'
    }else {
      return ''
    }
  }
  //MINIFY CSS USING CSSO
  minify(){
    this.setState({err: false, errMessage: ''})
    if (this.state.userInput !== '') {
      const minifiedCss = csso.minify(this.state.userInput);
      this.setState({minified: minifiedCss.css})
    }else { //HANDLE IF EMPTY
      console.log('lol');
      this.setState({err: true, errMessage: 'Enter some CSS'})
    }
  }
  //RENDER THE BUTTON FOR COPYING thE MINI CSS
  renderButton(){
    if (this.state.minified !== '') {
      return (
        <ClipboardButton className='btn btn-primary' data-clipboard-text={this.state.minified} onClick={() => {this.setState({copyText: 'Copied!'})}}>
          {this.state.copyText}
        </ClipboardButton>
      )
    }
  }
  render() {
    return (
      <div className='container'>
        <h1>CSS Minifier</h1>
        <div className='row'>
          <div className='col-md-6'>
            <div className="form-group">
              <textarea autoFocus value={this.state.userInput} onChange={(e) => this.setState({userInput: e.target.value})} placeholder='Enter your CSS here.' className={`form-control ${this.getErr()}`} id="exampleTextarea" rows="25"></textarea>
              <p className='text-danger lead'>{this.state.errMessage}</p>
              <button className='btn btn-primary' onClick={this.minify.bind(this)}>Minify</button>
              <br />
              <br />
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group">
              <textarea value={this.state.minified} placeholder='Minified CSS will be here.' className="form-control" id="exampleTextarea" rows="25"></textarea>
              <p className='text-danger lead'></p>
              {this.renderButton()}
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
