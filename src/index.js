module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix) || matrix === null) return [];
        let l = matrix.length;
        let m = matrix;
        let result = [];
        for (let i = 0; i < l; i++) {
          if (m[i] === 'number') {
            result.push(m[i]);
          } else {
            if (i % 2 === 0){
              for (let j = 0; j < m[i].length; j++){
              result.push(m[i][j]);
              }
               } else {
              for(let j = m[i].length - 1; j >= 0; j--){
                result.push(m[i][j]);
              }
            }
          }
          }
     return result;   
  }