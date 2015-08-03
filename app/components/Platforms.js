const React = require('react');
const classnames = require('classnames');

const Platforms = React.createClass({
    displayName: 'Platforms',

    render() {
        const classes = classnames(
            'tilt-icon',
            'tilt-icon-platforms',
            this.props.className
        );

        return (
            <svg className={classes} viewBox="0 0 70 48">
                <g className="tilt-icon-main">
                    <g transform="translate(-1265.000000, -409.000000)">
                        <g transform="translate(453.000000, 383.000000)">
                            <g transform="translate(809.000000, 0.000000)">
                                <g transform="translate(3.000000, 26.000000)">
                                    <path d="M66.3002526,47.9625443 L57.1493701,47.9625443 C55.4018421,47.9625443 53.9798754,46.5307279 53.9798754,44.7710951 L53.9798754,17.4420984 C53.9798754,15.6823082 55.4018421,14.2508066 57.1493701,14.2508066 L66.3002526,14.2508066 C68.0479369,14.2508066 69.469591,15.6823082 69.469591,17.4420984 L69.469591,44.7710951 C69.469591,46.5307279 68.0479369,47.9625443 66.3002526,47.9625443 L66.3002526,47.9625443 Z M57.1493701,14.8803148 C55.7464714,14.8803148 54.6050532,16.029482 54.6050532,17.4420984 L54.6050532,44.7710951 C54.6050532,46.1837115 55.7464714,47.3330361 57.1493701,47.3330361 L66.3002526,47.3330361 C67.7031514,47.3330361 68.8445696,46.1837115 68.8445696,44.7710951 L68.8445696,17.4420984 C68.8445696,16.029482 67.7031514,14.8803148 66.3002526,14.8803148 L57.1493701,14.8803148 L57.1493701,14.8803148 Z"></path>
                                    <path d="M54.2924643,20.0040393 L69.1571584,20.0040393 L69.1571584,20.6335475 L54.2924643,20.6335475 L54.2924643,20.0040393 Z"></path>
                                    <path d="M54.2924643,41.5794885 L69.1571584,41.5794885 L69.1571584,42.2089967 L54.2924643,42.2089967 L54.2924643,41.5794885 Z"></path>
                                    <path d="M61.7248895,46.524118 C60.7647729,46.524118 59.9837696,45.7377049 59.9837696,44.7710951 C59.9837696,43.8041705 60.7647729,43.0179148 61.7248895,43.0179148 C62.6848499,43.0179148 63.4658532,43.8041705 63.4658532,44.7710951 C63.4658532,45.7377049 62.6848499,46.524118 61.7248895,46.524118 L61.7248895,46.524118 Z M61.7248895,43.647423 C61.1095584,43.647423 60.6089473,44.1515016 60.6089473,44.7710951 C60.6089473,45.3903738 61.1095584,45.8946098 61.7248895,45.8946098 C62.3400644,45.8946098 62.8408317,45.3903738 62.8408317,44.7710951 C62.8408317,44.1515016 62.3400644,43.647423 61.7248895,43.647423 L61.7248895,43.647423 Z"></path>
                                    <path d="M63.1431052,17.7568525 L60.3065176,17.7568525 C60.1338122,17.7568525 59.9939287,17.6158426 59.9939287,17.4420984 C59.9939287,17.2681967 60.1338122,17.1273443 60.3065176,17.1273443 L63.1431052,17.1273443 C63.3156542,17.1273443 63.455694,17.2681967 63.455694,17.4420984 C63.455694,17.6158426 63.3156542,17.7568525 63.1431052,17.7568525"></path>
                                    <path d="M33.8716595,39.3780984 L16.0206477,39.3780984 L17.2425576,34.4566033 L32.6495934,34.4566033 L33.8716595,39.3780984 L33.8716595,39.3780984 Z M16.8213441,38.7487475 L33.0709632,38.7487475 L32.1616422,35.0861115 L17.7306651,35.0861115 L16.8213441,38.7487475 L16.8213441,38.7487475 Z"></path>
                                    <path d="M46.2589307,47.9625443 L3.63322027,47.9625443 C1.69829525,47.9625443 0.123785187,46.3771279 0.123785187,44.4286426 L0.123785187,43.3115803 L4.38624682,28.2891541 L4.38624682,3.65366557 C4.38624682,1.70518033 5.9606006,0.119921311 7.89568191,0.119921311 L41.9966254,0.119921311 C43.9315504,0.119921311 45.5060604,1.70518033 45.5060604,3.65366557 L45.5060604,27.2189902 L49.7685221,43.3145705 L49.7685221,44.4286426 C49.7685221,46.3771279 48.194012,47.9625443 46.2589307,47.9625443 L46.2589307,47.9625443 Z M0.748962898,43.3998689 L0.748962898,44.4286426 C0.748962898,46.0299541 2.04292447,47.3330361 3.63322027,47.3330361 L46.2589307,47.3330361 C47.8493828,47.3330361 49.1433444,46.0299541 49.1433444,44.4286426 L49.1433444,43.3968787 L44.8807264,27.3012984 L44.8807264,3.65366557 C44.8807264,2.05219672 43.5869212,0.749429508 41.9966254,0.749429508 L7.89568191,0.749429508 C6.30522981,0.749429508 5.01142454,2.05219672 5.01142454,3.65366557 L5.01142454,28.3772852 L0.748962898,43.3998689 L0.748962898,43.3998689 Z"></path>
                                    <path d="M4.69899197,28.0184656 L45.1933153,28.0184656 L45.1933153,28.6478164 L4.69899197,28.6478164 L4.69899197,28.0184656 Z"></path>
                                    <path d="M0.436374043,43.0408918 L49.4559332,43.0408918 L49.4559332,43.6704 L0.436374043,43.6704 L0.436374043,43.0408918 Z"></path>
                                    <path d="M8.64886476,4.4119082 L41.2434425,4.4119082 L41.2434425,24.3559869 L8.64886476,24.3559869 L8.64886476,4.4119082 Z M9.27404247,23.7264787 L40.6181085,23.7264787 L40.6181085,5.04141639 L9.27404247,5.04141639 L9.27404247,23.7264787 Z"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        );
    }
});

module.exports = Platforms;
