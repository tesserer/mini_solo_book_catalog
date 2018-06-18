myApp.controller( 'AddbookController', function(LibraryService){
    console.log( 'NG AddBook' );
    let vm = this;
  vm.bookArray = [];
  vm.newBook = [];
  vm.genreArray = [];
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
    summary: vm.summaryIn
  };
  LibraryService.addBook ( vm.objectToSend )
  .then(function(response) {
    vm.getIt();
  });
  vm.getIt();

  vm.getallGenre = function(){
    LibraryService.getGenre()
    .then(function(){
      vm.genreArray = LibraryService.results;
      console.log( 'in getallGenre controller:', vm.genreArray );

    })
  }
  vm.getallGenre();
};
});
