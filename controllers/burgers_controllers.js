//dependencies
var express = require( 'express' );
var burger = require( '../models/burger.js' );

//creates router
var router = express.Router();

//all the routes here
router.get( '/', function( req, res ){      //home page
    burger.all( function( data ){
        var hbsObj = { burgers: data }
        console.log( hbsObj );
        res.render( 'index', hbsObj );
    }) ;
} );

router.post( '/api/burgers', function( req, res ){   //api to add new burger

} );  

router.put( 'api/burgers/:id', function( req, res ){ //api to edit a burger state

} );



//exports of router for server.js to use
module.exports = router;