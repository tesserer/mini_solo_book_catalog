myApp.controller('AddbookController', function(LibraryService){
    console.log( 'NG AddBook' );
    let vm = this;
  vm.bookArray = [];
  vm.newBook = [];
  vm.getIt = function(){
    LibraryService.getBooks().then(function(){
      vm.newBooks = LibraryService.results;
      console.log( 'back from the server with:', vm.newBook );
    })
  }
  
  vm.addBook = function(){
  vm.objectToSend = {
    title: vm.titleIn,
    author: vm.authorIn,
    year: vm.yearIn,
    summary: vm.summaryIn,
    genre: vm.genreIn
  };
  LibraryService.addBook ( vm.objectToSend )
  .then(function(response) {
  
    vm.getIt();

  });

};
});
