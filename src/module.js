function main ( param1, param2, params ) {  
   console.log( " hello ", param1 ); 
   console.log( " hello ", params );
   console.log( " hello ", arguments );
   console.log( " hello ", typeof(arguments) );

}

module.exports = main