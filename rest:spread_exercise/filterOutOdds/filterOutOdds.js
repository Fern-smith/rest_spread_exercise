function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

/* Write an ES2015 Version */

const filterOutOdds =  (...args) => args.filter( num => num % 2 === 0) 
