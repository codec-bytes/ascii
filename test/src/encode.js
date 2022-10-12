import test from 'ava' ;
import { range } from '@iterable-iterator/range' ;

import { CodecError } from './_fixtures.js' ;

import { encode , ASCIIEncodeError , byte2char } from '../../src/index.js' ;

function success ( t , string , options , expected ) {

	const bytes = encode( string ) ;

	t.deepEqual( bytes , expected ) ;

}

success.title = ( _ , string , options , expected ) => `encode '${JSON.stringify(string)}' should succeed` ;

function failure ( t , string , options , ExpectedError , position ) {

	const error = t.throws( ( ) => encode( string ) ) ;
	t.true( error instanceof CodecError ) ;
	t.true( error instanceof ExpectedError ) ;
	t.is( error.encoding , 'ascii' ) ;
	t.is( error.object , string ) ;
	t.is( error.position.start , position.start ) ;
	t.is( error.position.end , position.end ) ;

}

failure.title = ( _ , string , options , expected ) => `encode '${JSON.stringify(string)}' should fail` ;


test( success , 'A' , null , [ 0x41 ] ) ;
test( success , 'a' , null , [ 0x61 ] ) ;

test( success , byte2char.join('') , null , [ ...range(0x80) ] ) ;

test( failure , 'ç' , null , ASCIIEncodeError , { start : 0 , end : 1 } ) ;
test( failure , byte2char.join('')+'ç' , null , ASCIIEncodeError , { start : 128 , end : 129 } ) ;
