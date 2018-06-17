myApp.controller('AddgenreController', function(LibraryService){
    console.log( 'NG Add genre' );
    let vm = this;
    vm.genreArray = [];
    vm.newGenre = [];
    vm.getIt = function(){
        LibraryService.getGenre().then(function(){
          vm.newGenres = LibraryService.results;
          console.log( 'back from the server with:', vm.newGenre );
        })
      }


    vm.addGenre = function(){
    
        LibraryService.addGenre( {genre: vm.newgenreIn} )
        .then(function(response){

        })
    };
  
    

});