const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  if(rowsPerPage == null || undefined){
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
    else{return Math.ceil(page)}
    // console.log(page)
  }

}
module.exports = totalPages
