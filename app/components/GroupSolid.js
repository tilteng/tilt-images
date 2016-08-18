import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
  displayName: 'GroupSolid',

  render() {
    const classes = classnames('tilt-icon tilt-icon-group-solid', this.props.className);
    return <svg className={classes} x="0px" y="0px" viewBox="0 0 24 24" enableBackground="new 0 0 24 24">
      <title>GroupSolid</title>
      <g className="tilt-icon-main" >
        <path d="M9,9c0-1.7,1.3-3,3-3s3,1.3,3,3c0,1.7-1.3,3-3,3S9,10.7,9,9z M12,14c-4.6,0-6,3.3-6,3.3V19h12v-1.7C18,17.3,16.6,14,12,14z" />
        <circle cx="18.5" cy="8.5" r="2.5"/>
        <path d="M18.5,13c-1.2,0-2.1,0.3-2.8,0.8c2.3,1.1,3.2,3,3.2,3.2l0,0.1H23v-1.3C23,15.7,21.9,13,18.5,13z"/>
        <circle cx="18.5" cy="8.5" r="2.5"/>
        <path d="M18.5,13c-1.2,0-2.1,0.3-2.8,0.8c2.3,1.1,3.2,3,3.2,3.2l0,0.1H23v-1.3C23,15.7,21.9,13,18.5,13z"/>
        <circle cx="5.5" cy="8.5" r="2.5"/>
        <path d="M5.5,13c1.2,0,2.1,0.3,2.8,0.8c-2.3,1.1-3.2,3-3.2,3.2l0,0.1H1v-1.3C1,15.7,2.1,13,5.5,13z"/>
      </g>
    </svg>;
  },
});
