const React = require('react');
const classnames = require('classnames');

const LockSolid = React.createClass({
  displayName: 'LockSolid',

  render() {
    const classes = classnames(
      'tilt-icon tilt-icon-lock-solid',
      this.props.className
    );

    return (
      <svg className={classes} viewBox="0 0 40 48">
        <title>LockSolid</title>
        <g className="tilt-icon-main">
          <g transform="translate(-64.000000, -54.000000)" fill="#252525">
            <path d="M95.4251021,70.944 L95.4251021,66.9905455 C95.4251021,58.8087273 91.614527,54 83.9977923,54 C76.3810575,54 72.5704824,58.8087273 72.5704824,66.9905455 L72.5704824,70.944 L66.8568275,70.944 C65.276079,70.944 64,72.7723636 64,74.3345455 L64,96.3534545 C64,97.9069091 65.2230931,99.5694545 66.719947,100.045091 L70.1375428,101.136 C71.6343967,101.611636 74.1423998,102 75.7143173,102 L92.2856827,102 C93.8576002,102 96.3656033,101.611636 97.8624572,101.136 L101.280053,100.045091 C102.776907,99.5694545 104,97.9069091 104,96.3534545 L104,74.3345455 C104,72.7723636 102.149906,70.944 100.569158,70.944 L95.4251021,70.944 Z M78.2885528,65.8603636 C78.2885528,61.7803636 80.5625345,59.6465455 83.9977923,59.6465455 C87.43305,59.6465455 89.7158627,61.7803636 89.7158627,65.8603636 L89.7158627,70.944 L78.2885528,70.944 L78.2885528,65.8603636 L78.2885528,65.8603636 Z" />
          </g>
        </g>
      </svg>
    );
  }
});

module.exports = LockSolid;
