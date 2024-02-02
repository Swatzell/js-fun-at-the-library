function shelfBook(object,array){
if (array.length < 3) {
  array.unshift(object)
}
return array
}

// should see if array includes bookname.
// should remove if it does 
function unshelfBook(bookName,array){
// console.log(`>>>>>`,array)
// console.log(`>>>>`, bookName)
//  for (i = 0; i < array; i++)
// if (array.includes(bookName))
// console.log(`>>>>`,array.splice(bookName))
// array[i].remove (bookName)
// return array
for (var i =0; i < array.length; i++)
   if (array[i].title === bookName) {
      array.splice(i,1);
}
}

function listTitles(shelfArray){
var title = [] 
for (var i = 0;i<shelfArray.length; i++){
  // console.log(`>>>>`,shelfArray[i].title)
title.push(shelfArray[i].title)
}
// title.toString()
// return title.toString().replace(/,/g, ', ')
return title.join(', ')
}

function searchShelf(shelfArray,title){
  var titles = []
  for (var i = 0;i<shelfArray.length;i++) {
 titles.push(shelfArray[i].title)
    //   if (shelfArray[i].title === title){
  //   return true
  // } else { 
  //   return false
}
return titles.includes(title)
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};