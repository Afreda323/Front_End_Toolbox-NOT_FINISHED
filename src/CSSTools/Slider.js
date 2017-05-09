import React from 'react';

const Slider = (props) => {
  return (
    <div className="range-slider">
      <p>{props.label}</p>
      <input
        className="range-slider__range"
        type="range"
        value={props.val}
        onChange={props.onChange}
        min={props.min}
        max={props.max} />
      <span className="range-slider__value">{props.val}</span>
    </div>
  );
}

export default Slider;
