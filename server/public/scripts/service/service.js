myApp.service('LibraryService', function($http) {
    let sv = this;
    console.log('LibraryService');



    sv.getBooks = function() {
        return $http({
                method: 'GET',
                url: '/home'
            })
            .then(function(response) {
                console.log(response.data);
                sv.results = response.data;
            })
    };

    sv.addBooks = function(object) {
        console.log('in service addBooks');
        return $http({
            method: 'POST',
            url: '/add_book',
            data: object
        }).then(function(response) {
            console.log('New book created:', response);
        }).catch(function(error) {
            console.log('Error creating new book:', error);
        });
    };
});