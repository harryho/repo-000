function main ( param1, param2, param3, params ) {   
   console.log( " hello ", params );
   console.log( " hello ", param3 );
   console.log( " hello ", arguments );
   if (params!==undefined && typeof params === "object" && params.length > 0  ){
       params.forEach(function(e, idx) {
            console.log( " index: ", idx, " item : ", e);
       });
   }
}

function test_commit_01(){
   console.log( " ssss  " );
}

module.exports = main
