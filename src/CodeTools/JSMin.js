//=======================================
//  THIS IS NOT MAKING IT TO THE BUILD 
//=======================================

import React from 'react';
import ClipboardButton from 'react-clipboard.js';
export default class JSMin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      minified: '',
      copyText: 'Copy Code'
    }
  }
  minify(){
  }
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
        <h1>JavaScript Minifier</h1>
        <div className='row'>
          <div className='col-md-6'>
            <div className="form-group">
              <textarea autoFocus value={this.state.userInput} onChange={(e) => this.setState({userInput: e.target.value})} placeholder='Enter your JavaScript here.' className="form-control" id="exampleTextarea" rows="25"></textarea>
              <br />
              <button className='btn btn-primary' onClick={this.minify.bind(this)}>Minify</button>
              <br />
              <br />
            </div>
          </div>
          <div className='col-md-6'>
            <div className="form-group">
              <textarea value={this.state.minified} placeholder='Minified JavaScript will be here.' className="form-control" id="exampleTextarea" rows="25"></textarea>
              <br />
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
