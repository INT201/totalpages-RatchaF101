const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if(rowsPerPage == null || undefined || 0){
    // console.log(1)
    return 1
  }
  else if(arrayItems == null || undefined){
    // console.log(undefined)
    return undefined
  }
  else{
    page = arrayItems.length/rowsPerPage
    // console.log(page)
    return Math.round(page)
    
  }

}
module.exports = totalPages
