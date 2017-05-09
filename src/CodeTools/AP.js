import React from 'react';
import autoprefixer from 'autoprefixer';
import postcss from 'postcss';

import ClipboardButton from 'react-clipboard.js';

export default class AP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      prefixed: '',
      copyText: 'Copy Code',
      err: false,
      errMessage: ' '
    }
  }
  //SET PAGE TITLE
  componentDidMount() {
    document.title = 'AutoPrefixer'
  }
  //HANDLE ERROR CLASS ON TEXTAREA
  getErr(){
    if (this.state.err) {
      return 'err'
    }else {
      return ''
    }
  }
  //AUTOPREFIX USER INPUT CSS
  prefix(){
    //CLEAR ERRORS
    this.setState({err: false, errMessage: ' '})
    //CHECK IF BLANK
    if (this.state.userInput !== '') {
      let self = this;
      //RUN THE CSS THROUGH THE PREFIXER, RETURNS A PROMISE
      postcss([ autoprefixer ]).process(this.state.userInput).then(function (result) {
          result.warnings().forEach(function (warn) {
              console.warn(warn.toString());
          });
          //OUTPUT AP CSS
          self.setState({prefixed: result.css})
      }).catch((err) => {
        //ERROR HANDLING
        self.setState({err: true, errMessage: 'Not Valid CSS'})
      });
    }else {
      //IF NO USER INPUT
      this.setState({err: true, errMessage: 'Enter some CSS'})
    }
  }
  //RENDER COPY CSS BUTTON ONCE THERES OUTPUT
  renderButton(){
    if (this.state.prefixed !== '') {
      return (
        <ClipboardButton className='btn btn-primary' data-clipboard-text={this.state.prefixed} onClick={() => {this.setState({copyText: 'Copied!'})}}>
          {this.state.copyText}
        </ClipboardButton>
      )
    }
  }
  render() {
    return (
      <div className='container'>
        <h1>Browser Prefixer</h1>
        <div className='row'>
          <div className='col-md-6'>
            <div className="form-group">
              <textarea autoFocus value={this.state.userInput} onChange={(e) => this.setState({userInput: e.target.value})} placeholder='Paste your plain old CSS in here.' className={`form-control ${this.getErr()}`} id="exampleTextarea" rows="25"></textarea>
              <p className='text-danger lead'>{this.state.errMessage}</p>
              <button className='btn btn-primary' onClick={this.prefix.bind(this)}>Prefix</button>
              <br />
              <br />
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group">
              <textarea value={this.state.prefixed} placeholder='Prefixed will be here.' className="form-control" id="exampleTextarea" rows="25"></textarea>
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
