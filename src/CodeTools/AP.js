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
  componentDidMount() {
    document.title = 'AutoPrefixer'
  }
  getErr(){
    if (this.state.err) {
      return 'err'
    }else {
      return ''
    }
  }
  prefix(){
    this.setState({err: false, errMessage: ' '})
    if (this.state.userInput !== '') {
      let self = this;
      postcss([ autoprefixer ]).process(this.state.userInput).then(function (result) {
          result.warnings().forEach(function (warn) {
              console.warn(warn.toString());
          });
          self.setState({prefixed: result.css})
      }).catch((err) => {
        self.setState({err: true, errMessage: 'Not Valid CSS'})
      });
    }else {
      this.setState({err: true, errMessage: 'Enter some CSS'})
    }

  }
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
