//dependencies

var mySqlConnection = require( '../config/connection.js' );

var orm = {

    selectAll = function( tableName, cbFunction ) {
        var qStr = 'SELECT * FROM ' + tableName + ';';
        mySqlConnection.query( qStr, function( err, result ){
            if ( err ) { throw err }
            console.log( qStr );
            cbFunction( result );
        } );
    },

    insertOne = function( tableName, burgerName, cbFunction ) {
        var qStr = 'INSERT INTO ' + tableName + '( burger_name, devoured ) VALUES ( "' + burgerName + '", false );';
        mySqlConnection.query( qStr, function( err, result ){
            if ( err ) { throw err }
            console.log( qStr );
            cbFunction( result );
        } );
    },

    updateOne = function( tableName, fieldName, newValue ) {

    }

}