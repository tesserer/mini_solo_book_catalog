myApp.service('LibraryService', function($http) {
    let sv = this;
    console.log('LibraryService');
    sv.results=[];
    

    sv.getBooks = function() {
        return $http({
                method: 'GET',
                url: '/home'
            })
            .then(function(response) {
                console.log("in GET with:", response.data);
                sv.results = response.data;
            }).catch(function(error) {
                console.log('Error in GET', error);
            });
    };

    sv.addBook = function(object) {
        console.log('in service addBooks');
        return $http({
            method: 'POST',
            url: '/home/add_book',
            data: object
        }).then(function(response) {
            console.log('New book created:', response);
        }).catch(function(error) {
            console.log('Error creating new book:', error);
        });
    };

    sv.addGenre = function(object) {
        console.log( 'in service addGenre' );
        return $http({
            method: 'POST',
            url: '/home/manage_genres',
            data: object
        }).then(function(response) {
            console.log( 'New genre created:', response );
        }).catch(function(error) {
            console.log( 'Error creating new genre:', error ); 
        });  
    };




    sv.deleteBook = function( book ){
        // let bookToRemove = sv.results[index];
        return $http({
            method: 'DELETE',
            //fix mongoose syntax for url
            url: `/home/` + book, 
        }).then(function(response){
            sv.getBooks();
            console.log( 'Deleted', book );
        }).catch(function(error){
            console.log( 'Error deleting book', error );
            
        })
    }
    //does getBooks need to run twice?
    sv.getBooks();

});