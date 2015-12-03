const React = require('react');
const { defineSvg } = require('../defineSvg');
const classnames = require('classnames');

module.exports = defineSvg('GroupCircled', {
  className: 'tilt-icon-group-circled',

  propTypes: {
    maskId: React.PropTypes.string,
    isLocked: React.PropTypes.bool,
  },

  getDefaultProps() {
    return {
      maskId: `group-circled-mask-${Math.floor(Math.random() * 16384)}`,
      isLocked: false,
    };
  },

  render() {
    const { maskId, isLocked } = this.props;

    return (
      <svg className={this.getClassNames()} viewBox="0 0 30 30">
        <title>GroupCircled</title>
        <g className="tilt-icon-main">
          <g>
            <mask id={maskId}>
              <ellipse className="tilt-icon-border" cx="15" cy="15" rx="15" ry="15"></ellipse>
            </mask>
            <g id="icon-group" style={{ mask: `url(#${maskId})` }}>
              <g transform="translate(-0.714286, -0.285714)">
                <path className="person person-left" d="M7.03679568,27.4227014 C6.10061509,27.3692509 5.2425448,27.2589137 4.48735151,27.0943623 C3.72834795,26.9305746 3.10003627,26.7003554 2.61994366,26.4090499 C2.09870026,26.0933099 1.83388727,25.6790681 1.83388727,25.1789237 L1.83388727,23.8510593 C1.83388727,23.4226914 1.99391814,22.9973777 2.30940757,22.5873356 C2.61041801,22.196383 3.01697263,21.8283378 3.51764064,21.4927447 C4.01526044,21.160206 4.58794234,20.8708094 5.2204453,20.6318091 C5.85218621,20.3931906 6.51288509,20.2183309 7.18615782,20.111048 C7.28103327,20.0411805 7.3595246,19.9583322 7.42506105,19.8598305 C7.50431443,19.7605651 7.55765806,19.6525187 7.59461757,19.5250009 C7.62624272,19.4131366 7.62776682,19.2714926 7.59842783,19.103887 C7.40982002,18.8473243 7.24978915,18.5880892 7.1225265,18.3334355 C6.98992949,18.0684735 6.88895764,17.8313821 6.82151606,17.6286518 C6.74683498,17.423249 6.68625187,17.2186097 6.64243389,17.0216063 C6.43515581,16.9219592 6.27398186,16.7803152 6.16157923,16.5989651 C5.99049861,16.4111246 5.83504005,16.0915667 5.71958921,15.6761796 C5.60528144,15.2619378 5.57098911,14.8874022 5.61823632,14.562881 C5.66053019,14.2605036 5.70129996,14.0421199 5.83046774,13.9722524 C5.56260654,13.2945758 5.47458956,12.5691755 5.56908398,11.813232 C5.66815071,11.0168188 5.90895907,10.2643115 6.28503161,9.57594474 C6.64853031,8.93911962 7.10538034,8.48364458 7.64415093,8.22020973 C8.69616339,7.70059403 9.77713382,7.73037363 10.6028169,8.12132622 C10.9682207,8.29427692 11.2337958,8.50464301 11.3945887,8.7482248 C12.106345,8.64437802 12.6645479,8.8035843 13.0505272,9.21553532 C13.4380305,9.62557739 13.7089399,10.1497746 13.8552538,10.7740006 C13.9992816,11.3837187 14.0503391,12.012908 14.0061401,12.6432427 C13.9665134,13.2002738 13.9112646,13.6324597 13.8384887,13.9573626 C13.8682087,13.9909601 13.8960236,14.032957 13.9215523,14.0829714 C14.0038539,14.2753934 14.0290016,14.5999146 14.0065211,15.1160942 C14.0065211,15.4364157 13.945557,15.7258122 13.8251528,15.9686305 C13.7123691,16.1931228 13.6007285,16.3947077 13.4925172,16.5672766 C13.3690648,16.7547353 13.2257991,16.9154688 13.063482,17.0487133 C13.0394774,17.2483893 12.944602,17.5206053 12.7758075,17.8752879 C12.5887238,18.2727309 12.3387708,18.6965174 12.0335691,19.1344301 C11.9112598,19.3837388 11.9017341,19.528437 11.9177372,19.6017407 C11.9421229,19.7181865 11.9943234,19.8143975 12.076625,19.8968641 C12.1619748,19.9827667 12.2983821,20.0545432 12.4827986,20.1102845 C13.1244462,20.2106951 13.7893363,20.3882273 14.4344132,20.6318091 C15.0665351,20.8704276 15.6342637,21.1605878 16.1219768,21.4938901 C16.6119761,21.829865 17.0074809,22.198292 17.2982037,22.5900082 C17.6018813,22.9985231 17.7558158,23.4230732 17.7558158,23.8510593 L17.7558158,25.1789237 C17.7558158,25.5152804 17.4959561,25.8188031 16.9613768,26.1070543 C16.4858565,26.3609444 15.8644033,26.5949815 15.1137823,26.8019115 C14.3631613,27.0080779 13.5176649,27.1787378 12.6005356,27.3089281 C11.6860735,27.4383548 10.7586565,27.5036408 9.84305129,27.5036408 C8.90344147,27.5036408 7.95964036,27.4765338 7.03679568,27.4227014 Z"></path>
                <path className="person person-right" d="M19.0367957,27.4227014 C18.1006151,27.3692509 17.2425448,27.2589137 16.4873515,27.0943623 C15.728348,26.9305746 15.1000363,26.7003554 14.6199437,26.4090499 C14.0987003,26.0933099 13.8338873,25.6790681 13.8338873,25.1789237 L13.8338873,23.8510593 C13.8338873,23.4226914 13.9939181,22.9973777 14.3094076,22.5873356 C14.610418,22.196383 15.0169726,21.8283378 15.5176406,21.4927447 C16.0152604,21.160206 16.5879423,20.8708094 17.2204453,20.6318091 C17.8521862,20.3931906 18.5128851,20.2183309 19.1861578,20.111048 C19.2810333,20.0411805 19.3595246,19.9583322 19.4250611,19.8598305 C19.5043144,19.7605651 19.5576581,19.6525187 19.5946176,19.5250009 C19.6262427,19.4131366 19.6277668,19.2714926 19.5984278,19.103887 C19.40982,18.8473243 19.2497891,18.5880892 19.1225265,18.3334355 C18.9899295,18.0684735 18.8889576,17.8313821 18.8215161,17.6286518 C18.746835,17.423249 18.6862519,17.2186097 18.6424339,17.0216063 C18.4351558,16.9219592 18.2739819,16.7803152 18.1615792,16.5989651 C17.9904986,16.4111246 17.83504,16.0915667 17.7195892,15.6761796 C17.6052814,15.2619378 17.5709891,14.8874022 17.6182363,14.562881 C17.6605302,14.2605036 17.7013,14.0421199 17.8304677,13.9722524 C17.5626065,13.2945758 17.4745896,12.5691755 17.569084,11.813232 C17.6681507,11.0168188 17.9089591,10.2643115 18.2850316,9.57594474 C18.6485303,8.93911962 19.1053803,8.48364458 19.6441509,8.22020973 C20.6961634,7.70059403 21.7771338,7.73037363 22.6028169,8.12132622 C22.9682207,8.29427692 23.2337958,8.50464301 23.3945887,8.7482248 C24.106345,8.64437802 24.6645479,8.8035843 25.0505272,9.21553532 C25.4380305,9.62557739 25.7089399,10.1497746 25.8552538,10.7740006 C25.9992816,11.3837187 26.0503391,12.012908 26.0061401,12.6432427 C25.9665134,13.2002738 25.9112646,13.6324597 25.8384887,13.9573626 C25.8682087,13.9909601 25.8960236,14.032957 25.9215523,14.0829714 C26.0038539,14.2753934 26.0290016,14.5999146 26.0065211,15.1160942 C26.0065211,15.4364157 25.945557,15.7258122 25.8251528,15.9686305 C25.7123691,16.1931228 25.6007285,16.3947077 25.4925172,16.5672766 C25.3690648,16.7547353 25.2257991,16.9154688 25.063482,17.0487133 C25.0394774,17.2483893 24.944602,17.5206053 24.7758075,17.8752879 C24.5887238,18.2727309 24.3387708,18.6965174 24.0335691,19.1344301 C23.9112598,19.3837388 23.9017341,19.528437 23.9177372,19.6017407 C23.9421229,19.7181865 23.9943234,19.8143975 24.076625,19.8968641 C24.1619748,19.9827667 24.2983821,20.0545432 24.4827986,20.1102845 C25.1244462,20.2106951 25.7893363,20.3882273 26.4344132,20.6318091 C27.0665351,20.8704276 27.6342637,21.1605878 28.1219768,21.4938901 C28.6119761,21.829865 29.0074809,22.198292 29.2982037,22.5900082 C29.6018813,22.9985231 29.7558158,23.4230732 29.7558158,23.8510593 L29.7558158,25.1789237 C29.7558158,25.5152804 29.4959561,25.8188031 28.9613768,26.1070543 C28.4858565,26.3609444 27.8644033,26.5949815 27.1137823,26.8019115 C26.3631613,27.0080779 25.5176649,27.1787378 24.6005356,27.3089281 C23.6860735,27.4383548 22.7586565,27.5036408 21.8430513,27.5036408 C20.9034415,27.5036408 19.9596404,27.4765338 19.0367957,27.4227014 Z"></path>
                <path className="person person-front" d="M15.8430513,32.5036408 C14.9034415,32.5036408 13.9596404,32.4765338 13.0367957,32.4227014 C12.1006151,32.3692509 11.2425448,32.2589137 10.4873515,32.0943623 C9.72834795,31.9305746 9.10003627,31.7003554 8.61994366,31.4090499 C8.09870026,31.0933099 7.83388727,30.6790681 7.83388727,30.1789237 L7.83388727,28.8510593 C7.83388727,28.4226914 7.99391814,27.9973777 8.30940757,27.5873356 C8.61041801,27.196383 9.01697263,26.8283378 9.51764064,26.4927447 C10.0152604,26.160206 10.5879423,25.8708094 11.2204453,25.6318091 C11.8521862,25.3931906 12.5128851,25.2183309 13.1861578,25.111048 C13.2810333,25.0411805 13.3595246,24.9583322 13.4250611,24.8598305 C13.5043144,24.7605651 13.5576581,24.6525187 13.5946176,24.5250009 C13.6262427,24.4131366 13.6277668,24.2714926 13.5984278,24.103887 C13.40982,23.8473243 13.2497891,23.5880892 13.1225265,23.3334355 C12.9899295,23.0684735 12.8889576,22.8313821 12.8215161,22.6286518 C12.746835,22.423249 12.6862519,22.2186097 12.6424339,22.0216063 C12.4351558,21.9219592 12.2739819,21.7803152 12.1615792,21.5989651 C11.9904986,21.4111246 11.83504,21.0915667 11.7195892,20.6761796 C11.6052814,20.2619378 11.5709891,19.8874022 11.6182363,19.562881 C11.6605302,19.2605036 11.7013,19.0421199 11.8304677,18.9722524 C11.5626065,18.2945758 11.4745896,17.5691755 11.569084,16.813232 C11.6681507,16.0168188 11.9089591,15.2643115 12.2850316,14.5759447 C12.6485303,13.9391196 13.1053803,13.4836446 13.6441509,13.2202097 C14.6961634,12.700594 15.7771338,12.7303736 16.6028169,13.1213262 C16.9682207,13.2942769 17.2337958,13.504643 17.3945887,13.7482248 C18.106345,13.644378 18.6645479,13.8035843 19.0505272,14.2155353 C19.4380305,14.6255774 19.7089399,15.1497746 19.8552538,15.7740006 C19.9992816,16.3837187 20.0503391,17.012908 20.0061401,17.6432427 C19.9665134,18.2002738 19.9112646,18.6324597 19.8384887,18.9573626 C19.8682087,18.9909601 19.8960236,19.032957 19.9215523,19.0829714 C20.0038539,19.2753934 20.0290016,19.5999146 20.0065211,20.1160942 C20.0065211,20.4364157 19.945557,20.7258122 19.8251528,20.9686305 C19.7123691,21.1931228 19.6007285,21.3947077 19.4925172,21.5672766 C19.3690648,21.7547353 19.2257991,21.9154688 19.063482,22.0487133 C19.0394774,22.2483893 18.944602,22.5206053 18.7758075,22.8752879 C18.5887238,23.2727309 18.3387708,23.6965174 18.0335691,24.1344301 C17.9112598,24.3837388 17.9017341,24.528437 17.9177372,24.6017407 C17.9421229,24.7181865 17.9943234,24.8143975 18.076625,24.8968641 C18.1619748,24.9827667 18.2983821,25.0545432 18.4827986,25.1102845 C19.1244462,25.2106951 19.7893363,25.3882273 20.4344132,25.6318091 C21.0665351,25.8704276 21.6342637,26.1605878 22.1219768,26.4938901 C22.6119761,26.829865 23.0074809,27.198292 23.2982037,27.5900082 C23.6018813,27.9985231 23.7558158,28.4230732 23.7558158,28.8510593 L23.7558158,30.1789237 C23.7558158,30.5152804 23.4959561,30.8188031 22.9613768,31.1070543 C22.4858565,31.3609444 21.8644033,31.5949815 21.1137823,31.8019115 C20.3631613,32.0080779 19.5176649,32.1787378 18.6005356,32.3089281 C17.6860735,32.4383548 16.7586565,32.5036408 15.8430513,32.5036408 L15.8430513,32.5036408 Z"></path>
                <ellipse className="group-circle-main" cx="15.7142857" cy="15.2857143" rx="15" ry="15"></ellipse>
              </g>
            </g>
          </g>
          {isLocked ?
            <g className="tilt-icon-group-circled-lock" transform="translate(1, 1) scale(.41, .387)">
              <ellipse cx="55.8170567" cy="60.9429148" rx="12.3151497" ry="12.3151497" />
              <path d="M59.3067223,58.5728082 L59.3067223,57.5584877 C59.3067223,55.4593145 58.3405428,54.2255604 56.4093034,54.2255604 C54.478064,54.2255604 53.5118846,55.4593145 53.5118846,57.5584877 L53.5118846,58.5728082 L52.0631751,58.5728082 C51.662373,58.5728082 51.3388204,59.0419035 51.3388204,59.4427056 L51.3388204,65.0920007 C51.3388204,65.4905637 51.6489383,65.9171157 52.0284688,66.0391477 L52.8950075,66.3190374 C53.274538,66.4410694 53.9104476,66.5407101 54.3090106,66.5407101 L58.5107158,66.5407101 C58.9092788,66.5407101 59.5451884,66.4410694 59.9247189,66.3190374 L60.7912576,66.0391477 C61.1707881,65.9171157 61.480906,65.4905637 61.480906,65.0920007 L61.480906,59.4427056 C61.480906,59.0419035 61.0118107,58.5728082 60.6110086,58.5728082 L59.3067223,58.5728082 Z M54.9617135,57.2685219 C54.9617135,56.2217342 55.5382865,55.6742698 56.4093034,55.6742698 C57.2803204,55.6742698 57.8591324,56.2217342 57.8591324,57.2685219 L57.8591324,58.5728082 L54.9617135,58.5728082 L54.9617135,57.2685219 L54.9617135,57.2685219 Z"></path>
            </g>
          : null }
        </g>
      </svg>
    );
  },
});
