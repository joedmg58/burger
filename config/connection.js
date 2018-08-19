//dependencies 
var mysql = require( 'mysql' );

//MySQL Server connection parameters
var connectionParams = {
    host: 'localhost',
    port:   3306,
    user:   'root',
    password: 'joedmg58',
    database: 'burgers_db'
}

//Creating the connection
var mySqlConnection = mysql.createConnection( connectionParams );

//Making the connection to MySQL Server
mySqlConnection.connect( function( err ){
    if ( err ) {
        console.log( 'error connecting: ' + err.stack );
        return;
    }
    console.log( 'Connected to MySQL Server as id ' + mySqlConnection.threadId );
} );

module.exports = mySqlConnection;

