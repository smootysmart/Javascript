const { template } = require('@babel/core')
let result
function totalPages(arrayItems, rowsPerPage) {
  if(arrayItems === null || arrayItems === undefined){
    return undefined
  } else if(rowsPerPage === null || rowsPerPage === undefined || rowsPerPage === 0){
    return 1
  }

  result = arrayItems?.length / rowsPerPage 

  return Math.ceil(result)

}

module.exports = totalPages
