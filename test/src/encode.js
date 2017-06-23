import test from 'ava' ;

import { encode , ASCIIEncodeError } from '../../src' ;

function success ( t , string , options , expected ) {

	const bytes = [ ...encode( string ) ] ;

	t.deepEqual( bytes , expected ) ;

}

success.title = ( _ , string , options , expected ) => `encode '${string}' should succeed` ;

function failure ( t , string , options , ExpectedError ) {

	t.throws( ( ) => [ ...encode( string ) ] , ExpectedError ) ;

}

failure.title = ( _ , string , options , expected ) => `encode '${string}' should fail` ;


test( success , 'a' , null , [ 0x61 ] ) ;

test( failure , 'ç' , null , ASCIIEncodeError ) ;
