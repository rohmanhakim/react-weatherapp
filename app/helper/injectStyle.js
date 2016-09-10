const injectStyle = function (style) {
  const styleElement = document.createElement('style');
  var styleSheet = null;

  document.head.appendChild(styleElement);

  styleSheet = styleElement.sheet;

  styleSheet.insertRule(style, styleSheet.cssRules.length);
};

module.exports =  injectStyle;
