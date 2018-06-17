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
});