myApp.controller('CatalogController', function( LibraryService ) {
    console.log( 'NG CatalogController' );
    let vm = this;
    vm.message = "My Catalog";
    vm.bookArray = [];
  
    vm.getCatalog = function(){
      LibraryService.getBooks().then(function(response){
        vm.bookArray = LibraryService.results;
        console.log( 'in getBooks:', vm.bookArray );
      });
    }

    vm.getCatalog();
  
  });
  