var blurBg = require('../images/blur.jpg')

var styles = {
  homeContainer: {
    backgroundImage: 'url(' + blurBg + ')',
    height: '100vh',
    margin: 'auto'
  },
  centerContainer: {
    border: '3px solid red'
  },
  homeSpacer: {
    height: '25vh'
  },
  centerVerticalSpacer: {
    height: '50vh'
  },
  homeTitle: {
    color: "#ffffff",
    fontFamily : "'Ubuntu', sans-serif"
  },

  centerAbsolute: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  spinnerBox: {
    textAlign: 'center'
  },

  spinnerCircle: {
    margin: '10px',
    width: '18px',
    height: '18px',
    backgroundColor: '#fff',
    borderRadius: '100%',
    display: 'inline-block',
    WebkitAnimation: 'sk-bouncedelay 1.4s infinite ease-in-out both',
    animation: 'sk-bouncedelay 1.4s infinite ease-in-out both'
  },

  spinnerCircle1: {
    margin: '10px',
    width: '18px',
    height: '18px',
    backgroundColor: '#fff',
    borderRadius: '100%',
    display: 'inline-block',
    WebkitAnimation: 'sk-bouncedelay 1.4s infinite ease-in-out both',
    animation: 'sk-bouncedelay 1.4s infinite ease-in-out both',

    WebkitAnimationDelay: '-0.32s',
    animationDelay: '-0.32s',
  },

  spinnerCircle2: {
    margin: '10px',
    width: '18px',
    height: '18px',
    backgroundColor: '#fff',
    borderRadius: '100%',
    display: 'inline-block',
    WebkitAnimation: 'sk-bouncedelay 1.4s infinite ease-in-out both',
    animation: 'sk-bouncedelay 1.4s infinite ease-in-out both',

    WebkitAnimationDelay: '-0.16s',
    animationDelay: '-0.16s',
  },

  fiveDaysForecastContainer: {
      background: 'rgba(255, 255, 255, 0.2)',
      position: 'fixed',
      bottom: '100px',
      left: 0,
      right: 0,
      height: '200px'
  },

  forecastItem: {
    paddingTop: '20px',
    height: 'inherit',
    color: '#fff'
  },

  forecastIcon: {
    fontSize: '96px'
  },

  forecastTextTemp: {
    fontSize: '27px'
  },

  dateContainer: {
    color: '#fff',
    position: 'relative',
    padding: '20px',
    fontSize: '36px',
    margin: 'auto'
  },

  placeContainer: {
    color: '#fff',
    position: 'relative',
    padding: '20px',
    fontSize: '64px',
    margin: 'auto'
  },

  todayWeatherIconContainer: {
    color: '#fff',
    fontSize: '400px',
    textAlign: 'center'
  },

  todayWeatherIcon: {
    verticalAlign: 'middle'
  },

  todayWeatherContainer: {
    position: 'fixed',
    bottom: '300px',
    width: '480px',
    padding: '20px',
    color: '#fff'
  },

  todayWeatherTemp: {
    fontSize: '80px',
    display: 'inline-block'
  },

  todayWeatherMetric: {
    fontSize: '18px',
    display: 'inline-block',
    position: 'relative',
    bottom: '38px'
  },

  todayWeatherDesc: {
    fontSize: '24px',
  },

  todayWeatherMinmaxContainer: {
    fontSize: '18px',
    borderBottom: '1px solid #fff',
    marginBottom: '10px'
  },

  todayWeatherMin: {
    display: 'inline-block'
  },

  todayWeatherAdditionalInfoContainer: {
    fontSize: '18px',
    margin: 'auto'
  },

  todayWeatherMax: {
    display: 'inline-block',
    marginLeft: '20px'
  }



};

module.exports = styles;
