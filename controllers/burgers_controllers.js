//dependencies
var express = require( 'express' );
var burger = require( '../models/burger.js' );

//creates router
var router = express.Router();

//all the routes here
router.get( '/', function( req, res ){      //home page

    console.log( 'Entering route /' );

    burger.all( function( data ){
        var hbsObj = { burgers: data }
        console.log( hbsObj );
        res.render( 'index', hbsObj );
    }) ;

} );

router.post( '/api/burgers', function( req, res ){   //api to add new burger
    
    var burger_name = req.body.burger_name;

    burger.add( burger_name, function( data ){
        console.log( data );
        res.send( 'adding burger = ' + burger_name );
    });

} );  

router.put( '/api/burgers/:id', function( req, res ){ //api to edit a burger state

    var burger_id = req.body.id;

    console.log( '>>> devouring burger id = %s <<<', burger_id );

    burger.update( burger_id, true, function( data ){
        console.log( data );
        res.send( 'devouring burger id = ' + burger_id );
    });

} );



//exports of router for server.js to use
module.exports = router;