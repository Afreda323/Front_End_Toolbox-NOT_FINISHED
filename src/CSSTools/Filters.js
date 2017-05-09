import React from 'react';
import Slider from './Slider'
import IMG from '../../public/lit.jpg';

import ClipboardButton from 'react-clipboard.js';

export default class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blur: 0,
      brightness: 10,
      contrast: 100,
      grayScale: 0,
      hueRotate: 0,
      invert: 0,
      saturate: 100,
      sepia: 0,
      copyText: 'Copy Code'

    }
  }
  componentDidMount() {
    document.title = 'CSS Filters'
  }
  getBlur(){
    if (this.state.blur > 0) {
      return `blur(${this.state.blur / 10}px) `;
    }else { return ''; }
  }
  getBright(){
    if (this.state.brightness > 10 || this.state.brightness < 10) {
      return `brightness(${this.state.brightness/10}) `;
    }else { return ''; }
  }
  getCont(){
    if (this.state.contrast > 100 || this.state.contrast < 100) {
      return `contrast(${this.state.contrast}%) `;
    }else { return ''; }
  }
  getGS(){
    if (this.state.grayScale > 0) {
      return `grayscale(${this.state.grayScale}%) `;
    }else { return ''; }
  }
  getIV(){
    if (this.state.invert > 0) {
      return `invert(${this.state.invert}%) `;
    }else { return ''; }
  }
  getSep(){
    if (this.state.sepia > 0) {
      return `sepia(${this.state.sepia}%) `;
    }else { return ''; }
  }
  getSat(){
    if (this.state.saturate > 100 || this.state.saturate < 100) {
      return `saturate(${this.state.saturate}%) `;
    }else { return ''; }
  }
  getHR(){
    if (this.state.hueRotate > 0) {
      return `hue-rotate(${this.state.hueRotate}deg) `;
    }else { return ''; }
  }

  renderStyle(){
    let blur = this.getBlur();
    let bright = this.getBright();
    let contrast = this.getCont();
    let grayscale = this.getGS();
    let hueRotate = this.getHR();
    let invert = this.getIV();
    let sat = this.getSat();
    let sep = this.getSep();

    return {
      maxWidth: '90%',
      maxHeight: '45vh',
      borderRadius: '25px',
      filter: `${blur}${bright}${contrast}${grayscale}${hueRotate}${invert}${sat}${sep}`
    }
  }
  renderCode(){
    let blur = this.getBlur();
    let bright = this.getBright();
    let contrast = this.getCont();
    let grayscale = this.getGS();
    let hueRotate = this.getHR();
    let invert = this.getIV();
    let sat = this.getSat();
    let sep = this.getSep();

    return `filter: ${blur}${bright}${contrast}${grayscale}${hueRotate}${invert}${sat}${sep};`
  }
  render() {
    return (
      <div className='box-shadow container'>

        <div style={{textAlign: 'center'}}>
          <img src={IMG} style={this.renderStyle()} alt='Charlotte, NC'/>
          <pre><code>{this.renderCode()}</code></pre>
          <ClipboardButton className='btn btn-primary' data-clipboard-text={this.renderCode()} onClick={() => {this.setState({copyText: 'Copied!'})}}>
            {this.state.copyText}
          </ClipboardButton>
        </div>
        <br />
        <div className="toggles">
          <div className='row'>
            <div className="col-md-6">
              <Slider val={this.state.blur} min='0' max='100'  label='Blur' onChange={(e) => this.setState({blur: e.target.value})} />
              <Slider val={this.state.brightness} min='0' max='20'  label='Brightness' onChange={(e) => this.setState({brightness: e.target.value})} />
              <Slider val={this.state.contrast} min='0' max='300'  label='Contrast' onChange={(e) => this.setState({contrast: e.target.value})} />
              <Slider val={this.state.grayScale} min='0' max='100'  label='Grayscale' onChange={(e) => this.setState({grayScale: e.target.value})} />
            </div>
            <div className="col-md-6">
              <Slider val={this.state.hueRotate} min='0' max='360'  label='Hue Rotate' onChange={(e) => this.setState({hueRotate: e.target.value, copyText: 'Copy Code'})} />
              <Slider val={this.state.invert} min='0' max='100'  label='Invert' onChange={(e) => this.setState({invert: e.target.value, copyText: 'Copy Code'})} />
              <Slider val={this.state.saturate} min='0' max='300'  label='Saturation' onChange={(e) => this.setState({saturate: e.target.value, copyText: 'Copy Code'})} />
              <Slider val={this.state.sepia} min='0' max='100'  label='Sepia' onChange={(e) => this.setState({sepia: e.target.value, copyText: 'Copy Code'})} />
            </div>
          </div>
        </div>
        <br />
        <br/>
      </div>
    );
  }
}
