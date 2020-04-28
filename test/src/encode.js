import test from 'ava' ;
import { CodecError } from '@aureooms/js-codec' ;
import { range } from '@aureooms/js-itertools' ;

import { encode , ASCIIEncodeError , byte2char } from '../../src' ;

function success ( t , string , options , expected ) {

	const bytes = encode( string ) ;

	t.deepEqual( bytes , expected ) ;

}

success.title = ( _ , string , options , expected ) => `encode '${JSON.stringify(string)}' should succeed` ;

function failure ( t , string , options , ExpectedError , position ) {

	t.throws( ( ) => encode( string ) , CodecError ) ;
	t.throws( ( ) => encode( string ) , ExpectedError ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.encoding === 'ascii' ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.object === string ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.position.start === position.start ) ;
	t.throws( ( ) => encode( string ) , ( error ) => error.position.end === position.end ) ;

}

failure.title = ( _ , string , options , expected ) => `encode '${JSON.stringify(string)}' should fail` ;


test( success , 'A' , null , [ 0x41 ] ) ;
test( success , 'a' , null , [ 0x61 ] ) ;

test( success , byte2char.join('') , null , [ ...range(0x80) ] ) ;

test( failure , 'ç' , null , ASCIIEncodeError , { start : 0 , end : 1 } ) ;
test( failure , byte2char.join('')+'ç' , null , ASCIIEncodeError , { start : 128 , end : 129 } ) ;
