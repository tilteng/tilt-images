const React = require('react');
const classnames = require('classnames');

module.exports = React.createClass({
  displayName: 'Dots',

  render() {
    const classes = classnames('tilt-icon tilt-icon-dots', this.props.className);
    return <svg viewBox="0 0 19 5" className={classes}>
      <title>Dots</title>
      <g transform="translate(0, 5) rotate(270)">
        <path d="M0.771555351,2.8244446 C0.771555351,3.96583309 1.69683354,4.89111128 2.83822203,4.89111128 C3.97961053,4.89111128 4.90488872,3.96583309 4.90488872,2.8244446 C4.90488872,1.68305611 3.97961053,0.757777915 2.83822203,0.757777915 C1.69683354,0.757777915 0.771555351,1.68305611 0.771555351,2.8244446 L0.771555351,2.8244446 Z M0.771555351,9.50666674 C0.771555351,10.6480552 1.69683354,11.5733334 2.83822203,11.5733334 C3.97961053,11.5733334 4.90488872,10.6480552 4.90488872,9.50666674 C4.90488872,8.36527825 3.97961053,7.44000006 2.83822203,7.44000006 C1.69683354,7.44000006 0.771555351,8.36527825 0.771555351,9.50666674 L0.771555351,9.50666674 Z M0.771555351,16.1888889 C0.771555351,17.3302774 1.69683354,18.2555556 2.83822203,18.2555556 C3.97961053,18.2555556 4.90488872,17.3302774 4.90488872,16.1888889 C4.90488872,15.0475004 3.97961053,14.1222222 2.83822203,14.1222222 C1.69683354,14.1222222 0.771555351,15.0475004 0.771555351,16.1888889 L0.771555351,16.1888889 Z"/>
      </g>
    </svg>;
  }
});
