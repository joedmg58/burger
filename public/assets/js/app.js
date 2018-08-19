$( function(){

    //handle submit of the form to send the request to create new burger
    $( '#add-burger' ).on( 'submit', function( event ){
       
        event.preventDefault();
       
        var newBurger = {
            burger_name: $('#bn').val().trim(),
            devoured: false
        }

        //ajax post to the api with the data of the new burger
        $.ajax( '/api/burgers', {
            type: 'POST',
            data: newBurger
        } ).then( function(){
            console.log( 'New burger created' );
            location.reload();
        });

    } );

    $( '.devoure-it' ).on( 'click', function( event ){

        event.preventDefault();

        var id = $(this).data('id');

        console.log( 'devore it button pressed with id %s', id );

        var burger = {
            id: id
        };

        $.ajax( '/api/burgers/' + id, {
            type: 'PUT',
            data: burger
        }).then( function(){
            console.log( 'Burger devoured' );
            location.reload();
        });
    } );

} );