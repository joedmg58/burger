//dependencies

var mySqlConnection = require( '../config/connection.js' );

//Object Relational Mapping
var orm = {

    selectAll = function( cbFunction ) {
        var qStr = 'SELECT * FROM burgers;';
        mySqlConnection.query( qStr, function( err, result ){
            if ( err ) { throw err }
            console.log( qStr );
            cbFunction( result );
        } );
    },

    insertOne = function( burgerName, cbFunction ) {
        var qStr = 'INSERT INTO burgers ( burger_name, devoured ) VALUES ( "' + burgerName + '", false );';
        mySqlConnection.query( qStr, function( err, result ){
            if ( err ) { throw err }
            console.log( qStr );
            cbFunction( result );
        } );
    },

    updateOne = function( id, newValue, cbFunction  ) {
        var qStr = 'UPDATE burgers SET devoured = ' + newValue + ' WHERE id = ' + id + ';';
        mySqlConnection.query( qStr, function( err, result ){
            if ( err ) { throw err }
            console.log( qStr );
            cbFunuction( result );
        });
    }

}

module.exports = orm;