'use strict';

exports.sum = function(a,b) {
   if(isNaN(a) || isNaN(b)){
        return "Two numbers are required";
   }

   return a + b;
};
