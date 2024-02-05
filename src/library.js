function createLibrary(name) {
  var library = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    },
  };
  return library;
}

function addBook(libraryObject, bookObject) {
  if (bookObject.genre.includes("fantasy")) {
    libraryObject.shelves.fantasy.unshift(bookObject);
  } else if (bookObject.genre.includes("nonFiction")) {
    libraryObject.shelves.nonFiction.unshift(bookObject);
  } else {
    libraryObject.shelves.fiction.unshift(bookObject);
  }
}

function checkoutBook(libraryObject, titleString, genreString) {
  for (var i = 0; i < libraryObject.shelves[genreString].length; i++) {
    if (libraryObject.shelves[genreString][i].title === titleString) {
      libraryObject.shelves[genreString].splice(i, 1);
      return `You have now checked out ${titleString} from the ${libraryObject.name}.`;
    }
  }
  return `Sorry, there are currently no copies of ${titleString} available at the ${libraryObject.name}.`;
}

function takeStock(libraryName, bookGenre) {
  var bookTitleCount =
    libraryName.shelves.fiction.length +
    libraryName.shelves.nonFiction.length +
    libraryName.shelves.fantasy.length;
  if (bookGenre === undefined) {
    return `There are a total of ${bookTitleCount} books at the ${libraryName.name}.`;
  } else {
    return `There are a total of ${libraryName.shelves[bookGenre].length} ${bookGenre} books at the ${libraryName.name}.`;
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock,
};
