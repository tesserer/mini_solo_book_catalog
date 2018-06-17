myApp.controller('AddgenreController', function(LibraryService){
    console.log( 'NG Add genre' );
    let vm = this;
    vm.genreArray = [];
    vm.newGenre = [];

    vm.getallGenre = function(){
        LibraryService.getGenre()
        .then(function(){
          vm.genreArray = LibraryService.results;
          console.log( 'in getallGenre controller:', vm.newGenre );
        })
      }
      
    vm.getallGenre();

    vm.addGenre = function(){
        LibraryService.addGenre( {genre: vm.newgenreIn} )
        .then(function(response){
        vm.getallGenre();
        })
    };

    vm.deleteGenre = function( genre ){
        console.log( 'Deleting genre:', genre );
        
        LibraryService.deleteGenre( genre )
        .then(function(response){
          vm.getallGenre();
          console.log( 'In deleteGenre controller:' );

        vm.getallGenre();
        });
    }
    
});