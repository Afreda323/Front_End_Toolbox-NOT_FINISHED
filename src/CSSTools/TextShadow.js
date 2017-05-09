import React from 'react';
import Slider from './Slider'
import ClipboardButton from 'react-clipboard.js';
import { SketchPicker } from 'react-color';

export default class TextShadow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hor: 6,
      ver: 4,
      blur: 2,
      color: {
        r: 29,
        g: 19,
        b: 19,
        a: 0.3
      },
      copyText: 'Copy Code'
    }
  }
  componentDidMount() {
    document.title = 'CSS Text-Shadow'
  }
  renderStyle(){
    return {
      marginBottom: 0,
      textShadow: `
                  ${this.state.hor}px
                  ${this.state.ver}px
                  ${this.state.blur}px
                  rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a}) `};
  }
  renderCode(){
    return `text-shadow: ${this.state.hor}px ${this.state.ver}px ${this.state.blur}px rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a});`;
  }
  //box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
  render() {
    return (
      <div className='box-shadow container'>
        <div style={{textAlign: 'center'}}>
          <h1 className="display-4" style={this.renderStyle()}>Text Shadow</h1>
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
          </div>
          <div className='col-md-4'>

            <p style={{margin: '5px 0 10px'}}>Shadow Color</p>
            <SketchPicker color={this.state.color} onChange={ (color) => this.setState({color: color.rgb, copyText: 'Copy Code'}) }/>
          </div>
        </div>
        <br />
        <br/>
      </div>
    );
  }
}
