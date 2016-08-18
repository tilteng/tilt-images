import React from 'react';
import classnames from 'classnames';

module.exports = React.createClass({
  displayName: 'PermissionEmailEnvelope',

  render() {
    const classes = classnames('tilt-icon tilt-icon-permission-email-envelope', this.props.className);

    return <svg {...this.props} className={classes} viewBox="0 0 33 23">
      <title>PermissionEmailEnvelope</title>
      <g className="tilt-icon-main" transform="translate(-20, -4)">
        <path d="M49.7182609,4 L22.3360557,4 C21.2448278,4 20,5.308125 20,6.45525 L20,24.2701875 C20,25.4173125 21.2448278,26.724 22.3360557,26.724 L49.7182609,26.724 C50.8108243,26.724 52.0556522,25.4173125 52.0556522,24.2701875 L52.0556522,6.45525 C52.0556522,5.308125 50.8108243,4 49.7182609,4 L49.7182609,4 Z M22.3360557,5.38 L49.7182609,5.38 C49.9373078,5.38 50.2364939,5.60425 50.4635548,5.865875 L37.2739896,13.49325 C36.6342122,13.8626875 35.4201043,13.8626875 34.7816626,13.49325 L21.5907617,5.865875 C21.8178226,5.60425 22.1183443,5.38 22.3360557,5.38 L22.3360557,5.38 Z M49.7182609,25.344 L22.3360557,25.344 C21.9513878,25.344 21.2822261,24.6611875 21.2822261,24.2701875 L21.2822261,7.2545 L34.1752765,14.709375 C34.6788174,14.99975 35.3359583,15.1593125 36.0278261,15.1593125 C36.7183583,15.1593125 37.3768348,14.99975 37.8803757,14.709375 L50.7734261,7.2545 L50.7734261,24.2701875 C50.7734261,24.6611875 50.1029287,25.344 49.7182609,25.344 L49.7182609,25.344 Z" ></path>
      </g>
    </svg>;
  },
});
