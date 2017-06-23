import test from 'ava' ;

import { decode , ASCIIDecodeError } from '../../src' ;

function success ( t , bytes , options , expected ) {

	const string = [ ...decode( bytes ) ].join('') ;

	t.deepEqual( string , expected ) ;

}

success.title = ( _ , bytes , options , expected ) => `decode '${bytes}' succeed` ;

function failure ( t , bytes , options , ExpectedError ) {

	t.throws( ( ) => [ ...decode( bytes ) ].join('') , ExpectedError ) ;

}

failure.title = ( _ , bytes , options , expected ) => `decode '${bytes}' should fail` ;


test( success , [ 0x61 ] , null , 'a' ) ;

test( failure , [ 0x80 ] , null , ASCIIDecodeError ) ;
