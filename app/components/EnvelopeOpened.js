import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
  displayName: 'EnvelopeOpened',

  render() {
    const classes = classnames('tilt-icon tilt-icon-envelope-opened', this.props.className);

    return <svg version="1.1" {...this.props} className={classes} x="0px" y="0px" viewBox="-3 -2 41 41" enableBackground="new -3 -2 41 41">
      <title>EnvelopeOpened</title>
      <g transform="translate(-3.000000, -267.000000)">
        <g transform="translate(0.000000, 265.000000)">
          <g transform="translate(3.500000, 2.933333)">
            <path fill="#00A0D8" d="M17,3.9l13.6,8.2v18.5H3.4V12.1L17,3.9L17,3.9z M17,0L1.7,9.2C0.7,9.9,0,10.9,0,12.1v18.5
              C0,32.5,1.5,34,3.4,34h27.2c1.9,0,3.4-1.5,3.4-3.4V12.1c0-1.2-0.7-2.4-1.7-2.9L17,0L17,0z"/>
            <g transform="translate(0.000000, 11.900000)">
              <path fill="#00A0D8" d="M17,10.2L3.4,0L0,0.2v18.5c0,1.9,1.5,3.4,3.4,3.4h27.2c1.9,0,3.4-1.5,3.4-3.4V0.2L30.6,0
                L17,10.2L17,10.2z"/>
            </g>
          </g>
        </g>
      </g>
    </svg>;
  },
});
