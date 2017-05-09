import React from 'react';
import Slider from './Slider'
import ClipboardButton from 'react-clipboard.js';

export default class Transforms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateVal: 0,
      translateX: 0,
      translateY: 0,
      scaleW: 10,
      scaleH: 10,
      skewY: 0,
      skewX: 0,
      copyText: 'Copy Code'
    }

  }
  componentDidMount() {
    document.title = 'CSS Transforms'
  }
  getRotate(){
    if (String(this.state.rotateVal) !== '0') {
      return `rotate(${this.state.rotateVal}deg)`;
    }else { return ''; }
  }
  getTY(){
    if (String(this.state.translateY) !== '0') {
      return `translateY(${this.state.translateY}px)`;
    }else{ return ''; }
  }
  getTX(){
    if (String(this.state.translateX) !== '0') {
      return `translateX(${this.state.translateX}px)`;
    }else{ return ''; }
  }
  getSX(){
    if (String(this.state.skewX) !== '0') {
      return `skewX(${this.state.skewX}deg)`;
    }else{ return `` }
  }
  getSY(){
    if (String(this.state.skewY) !== '0') {
      return `skewY(${this.state.skewY}deg)`;
    }else{ return `` }
  }
  renderStyle(){
    let rotate = this.getRotate();
    let translateY = this.getTY();
    let translateX = this.getTX();
    let skewX = this.getSX();
    let skewY=this.getSY();

    let scale;
    if (String(this.state.scaleH) !== '10' || String(this.state.scaleW) !== '10') {
      scale = `scale(${this.state.scaleW/10}, ${this.state.scaleH/10})`;
    }else{ scale = `scale(1, 1)` }
    return {
      transform: `${rotate} ${translateX} ${translateY} ${scale} ${skewX} ${skewY}`,
    }
  }
  renderCode(){
    let rotate = this.getRotate();
    let translateY = this.getTY();
    let translateX = this.getTX();
    let skewX = this.getSX();
    let skewY=this.getSY();
    let scale;
    if (String(this.state.scaleH) !== '10' || String(this.state.scaleW) !== '10') {
      scale = `scale(${this.state.scaleW/10}, ${this.state.scaleH/10})`;
    }else{ scale = '' }
    return `transform: ${rotate} ${translateX} ${translateY} ${scale} ${skewX} ${skewY};`
  }
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
        <div className="toggles">
          <Slider val={this.state.rotateVal} min='-360' max='360' label='Rotate' onChange={(e) => this.setState({rotateVal: e.target.value, copyText: 'Copy Code'})} />
          <Slider val={this.state.translateX} min='-100' max='100' label='Translate X' onChange={(e) => this.setState({translateX: e.target.value, copyText: 'Copy Code'})} />
          <Slider val={this.state.translateY} min='-100' max='100' label='Translate Y' onChange={(e) => this.setState({translateY: e.target.value, copyText: 'Copy Code'})} />
          <Slider val={this.state.scaleH} min='1' max='40'  label='Scale Height' onChange={(e) => this.setState({scaleH: e.target.value, copyText: 'Copy Code'})} />
          <Slider val={this.state.scaleW} min='1' max='40'  label='Scale Width' onChange={(e) => this.setState({scaleW: e.target.value, copyText: 'Copy Code'})} />
          <Slider val={this.state.skewX} min='-360' max='360'  label='Skew X' onChange={(e) => this.setState({skewX: e.target.value, copyText: 'Copy Code'})} />
          <Slider val={this.state.skewY} min='-360' max='360'  label='Skew Y' onChange={(e) => this.setState({skewY: e.target.value, copyText: 'Copy Code'})} />
        </div>
        <br />
        <br/>
      </div>
    );
  }
}
