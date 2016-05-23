'use strict';

function thousands_separators(num) {
	num = num.toString();
    var reg = /\B(?=(\d{3})+$)/g;
    if(num.indexOf('.') > -1) {
      var p = num.split('.');
      var n1 = p[0].replace(reg,',');
      var n2 = p[1];
       
      if(/^0+$/g.test(n2)) {
        return n1;
      }
      return n1 + '.' + n2;
    } else {
      return num.replace(reg,',');
    }
}
console.log(format('100'));
console.log(format('1000'));
console.log(format(1000000));
console.log(format(1000.0));
console.log(format('100.2342'));
module.exports = thousands_separators;