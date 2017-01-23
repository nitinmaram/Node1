let log4js = require('log4js');
let logger = log4js.getLogger();

let library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
1223}];
function compare() {
for (let i = 0; i < library.length; i++) {
  for (let j = 0; j < library.length-1; j++) {
    if(library[j].title>library[j+1].title)
    {
      let temp=library[j];
      library[j]=library[j+1];
      library[j+1]=temp;
    }
  }
}
}
compare();
logger.debug(library);
