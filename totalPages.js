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
    if(page = Infinity){
      return 1
    }
    // console.log(page)
    return Math.ceil(page)
    
  }

}
module.exports = totalPages
