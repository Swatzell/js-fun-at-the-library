function shelfBook(object,array){
if (array.length < 3) {
  array.unshift(object)
}
return array
}


function unshelfBook(bookName,array){
for (var i =0; i < array.length; i++)
   if (array[i].title === bookName) {
      array.splice(i,1);
}
}

function listTitles(shelfArray){
var title = [] 
for (var i = 0;i<shelfArray.length; i++){
title.push(shelfArray[i].title)
}
return title.join(', ')
}

function searchShelf(shelfArray,title){
  var titles = []
  for (var i = 0;i<shelfArray.length;i++) {
 titles.push(shelfArray[i].title)
return titles.includes(title)
}



module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};