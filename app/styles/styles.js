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



};

module.exports = styles;
