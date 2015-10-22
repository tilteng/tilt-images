const React = require('react');
const classnames = require('classnames');

const Cards = React.createClass({
  displayName: 'Cards',

  render() {
    const classes = classnames('tilt-icon tilt-icon-cards', this.props.className);
    return (
      <svg className={classes} viewBox="0 0 30 30">
        <title>Cards</title>
        <g className="tilt-icon-main">
          <g transform="translate(-589.000000, -414.000000)" className="tilt-icon-inner">
            <g transform="translate(546.000000, 304.000000)">
              <g transform="translate(43.000000, 110.000000)">
                <g>
                  <path d="M3.57461176,17.5404687 L1.43275294,8.55726562 C1.24677647,7.67503125 1.38134118,6.82814062 1.83287059,6.04015625 C2.28663529,5.2471875 2.93174118,4.76914062 3.81155294,4.57746875 L19.5538353,0.639359375 C20.3594353,0.453578125 21.1511765,0.589515625 21.9093882,1.0458125 C22.6765412,1.504375 23.1566824,2.16004687 23.3770824,3.04907812 L25.5198353,12.0404375 L25.9476706,11.9362187 L23.8044706,2.94259375 C23.5568,1.94390625 22.9948471,1.1763125 22.1338118,0.6615625 C21.2754588,0.14590625 20.3746353,-0.00815625 19.4523529,0.205265625 L3.71275294,4.14292187 C2.72475294,4.35815625 1.96430588,4.9209375 1.45197647,5.81585937 C0.944117647,6.702625 0.793011765,7.65645312 1.00357647,8.65604687 L3.14990588,17.6560156 C3.32515294,18.2613906 3.61887059,18.7924531 4.02122353,19.2333437 C4.42447059,19.6805781 4.90014118,19.9986719 5.43392941,20.1790156 L5.57341176,19.7557969 C5.11115294,19.5999219 4.69851765,19.3226094 4.34534118,18.9315625 C3.98814118,18.5405156 3.72795294,18.0688125 3.57461176,17.5404687" ></path>
                  <path d="M28.2848941,13.4496563 C27.5494824,12.7559219 26.6772706,12.4038438 25.6937412,12.4038438 L9.69797647,12.4038438 C8.68225882,12.4038438 7.78545882,12.7550156 7.03395294,13.4473906 C6.27574118,14.1442969 5.89127059,15.0242656 5.89127059,16.062375 L5.89127059,25.4538438 C5.89127059,26.4584219 6.27529412,27.328875 7.03171765,28.0420938 C7.78322353,28.7521406 8.68047059,29.1119219 9.69797647,29.1119219 L25.6937412,29.1119219 C26.6790588,29.1119219 27.5517176,28.7516875 28.2871294,28.0407344 C29.0265647,27.3266094 29.4016471,26.4566094 29.4016471,25.4538438 L29.4016471,16.062375 C29.4016471,15.025625 29.0256706,14.1465625 28.2848941,13.4496563 L28.2848941,13.4496563 Z M6.33162353,17.5495313 L28.9612941,17.5495313 L28.9612941,20.8075 L6.33162353,20.8075 L6.33162353,17.5495313 Z M28.9612941,25.4538438 C28.9612941,26.3419688 28.6416471,27.082375 27.9831294,27.7176563 C27.3232706,28.3556563 26.5744471,28.6660469 25.6937412,28.6660469 L9.69797647,28.6660469 C8.78284706,28.6660469 8.00898824,28.3552031 7.33169412,27.7158438 C6.65887059,27.0814688 6.33162353,26.3415156 6.33162353,25.4538438 L6.33162353,21.2538281 L28.9612941,21.2538281 L28.9612941,25.4538438 L28.9612941,25.4538438 Z M6.33162353,17.1032031 L6.33162353,16.062375 C6.33162353,15.1425313 6.65797647,14.3953281 7.32990588,13.7781719 C8.00764706,13.1537656 8.7824,12.8501719 9.69797647,12.8501719 L25.6937412,12.8501719 C26.5748941,12.8501719 27.3241647,13.1528594 27.9853647,13.7763594 C28.6420941,14.3944219 28.9612941,15.1420781 28.9612941,16.062375 L28.9612941,17.1032031 L6.33162353,17.1032031 L6.33162353,17.1032031 Z" ></path>
                  <path d="M17.2948471,5.03965625 L18.4008706,9.4105 L22.7118588,8.2341875 L21.6058353,3.86289062 L17.2948471,5.03965625 L17.2948471,5.03965625 Z M18.7164941,8.86267187 L17.8290824,5.3559375 L21.2902118,4.41071875 L22.1776235,7.91790625 L18.7164941,8.86267187 L18.7164941,8.86267187 Z" ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
});

module.exports = Cards;
