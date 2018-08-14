//dependencies 
var orm = require( '../config/orm.js' );

var burger = {

    all = function( cb ){
        orm.selectAll( function( result ){
            cb( result );
        } );
    },

    add = function( name, cb ){
        orm.insertOne( name, function( result ){
            cb( result );
        } );
    },

    update = function( id, newValue, cb ){
        orm.updateOne( id, newValue, function( result ){
            cb( result );
        });
    }
}

module.exports = burger;