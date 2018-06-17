myApp.controller('CatalogController', function( LibraryService ) {
    console.log( 'NG CatalogController' );
    let vm = this;
    vm.message = "My Catalog";
    vm.bookArray = [];
    vm.deleteBookArray =[];
  
    vm.getCatalog = function(){
      LibraryService.getBooks()
      .then(function(response){
        vm.bookArray = LibraryService.results;
        console.log( 'in getBooks controller:', vm.bookArray );
      });
    }

    vm.getCatalog();

    vm.deleteBook = function( book ){
      console.log( 'Deleting book:', book );
      
      LibraryService.deleteBook( book )
      .then(function(response){
        vm.getCatalog();
        console.log( 'In deleteBook controller:', vm.deleteBookArray );

        

      })
      
    }

  });
  

