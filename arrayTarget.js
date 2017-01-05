'use strict';

function arrayTarget(array, target) {
  for (let i=0; i<array.length; i++) {
    for (let j=0; j<array.length; j++) {
      if (array[i]+array[j]===target) {
        return [i,j];
      }
    }
  }
  return [-1,-1];
}
