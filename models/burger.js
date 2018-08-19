//dependencies 
var orm = require( '../config/orm.js' );

var burger = {

    all: function( cb ){
        orm.selectAll( function( result ){
            cb( result );
        } );
    },

    add: function( name, cb ){
        orm.insertOne( name, function( result ){
            cb( result );
        } );
    },

    update: function( id, newState, cb ){
        orm.updateOne( id, newState, function( result ){
            cb( result );
        });
    }
}

module.exports = burger;