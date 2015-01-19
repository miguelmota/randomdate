(function(root) {

  function randomDate(startDate, endDate) {
    if (!(startDate instanceof Date)) return;
    if (!endDate) {
      endDate = new Date();
    } else {
      if (!(endDate instanceof Date)) return;
    }
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = randomDate;
    }
    exports.randomDate = randomDate;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return randomDate;
    });
  } else {
    root.randomDate = randomDate;
  }

})(this);
