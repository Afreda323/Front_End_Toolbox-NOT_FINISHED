import React from 'react';
import Slider from './Slider'
import ClipboardButton from 'react-clipboard.js';
import { SketchPicker } from 'react-color';

export default class BoxShadow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inset: false,
      hor: 2,
      ver: 2,
      blur: 2,
      spread: 2,
      color: {
        r: 0,
        g: 0,
        b: 0,
        a: 1
      },
      copyText: 'Copy Code'
    }
  }
  componentDidMount() {
    document.title = 'CSS Box-Shadow'
  }
  renderStyle(){
    let inset = '';
    if (this.state.inset) {
      inset = "inset";
    }
    return {
      boxShadow: `${inset}
                  ${this.state.hor}px
                  ${this.state.ver}px
                  ${this.state.blur}px
                  ${this.state.spread}px
                  rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a}) `};
  }
  renderCode(){
    let inset = '';
    if (this.state.inset) {
      inset = "inset";
    }
    return `box-shadow: ${inset} ${this.state.hor}px ${this.state.ver}px ${this.state.blur}px ${this.state.spread}px rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a});`;
  }
  //box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  render() {
    return (
      <div className='box-shadow container'>
        <div style={this.renderStyle()}
          className='block'>
          <pre><code>{this.renderCode()}</code></pre>
          <ClipboardButton className='btn btn-primary' data-clipboard-text={this.renderCode()} onClick={() => {this.setState({copyText: 'Copied!'})}}>
            {this.state.copyText}
          </ClipboardButton>
        </div>
        <br />
          <div className='row'>
            <div className='col-md-8'>
              <Slider val={this.state.hor} min='-100' max='100' label='Horizontal' onChange={(e) => this.setState({hor: e.target.value, copyText: 'Copy Code'})} />
              <Slider val={this.state.ver} min='-100' max='100' label='Vertical' onChange={(e) => this.setState({ver: e.target.value, copyText: 'Copy Code'})} />
              <Slider val={this.state.blur} min='0' max='100'  label='Blur Radius' onChange={(e) => this.setState({blur: e.target.value, copyText: 'Copy Code'})} />
              <Slider val={this.state.spread} min='-100' max='100'  label='Spread Radius' onChange={(e) => this.setState({spread: e.target.value, copyText: 'Copy Code'})} />
              <p style={{margin: '0 10px 0 0', display: 'inline'}}>Inset?</p>
              <input type='checkbox' checked={this.state.inset} onClick={() => this.setState({inset: !this.state.inset, copyText: 'Copy Code'})}/>
            </div>
            <div className='col-md-4'>
              <p style={{margin: '0 0 10px'}}>Color</p>
              <SketchPicker color={this.state.color} onChange={ (color) => this.setState({color: color.rgb, copyText: 'Copy Code'}) }/>
            </div>
          </div>
        <br />
        <br/>
      </div>
    );
  }
}
