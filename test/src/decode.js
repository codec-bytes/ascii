import test from 'ava' ;
import { CodecError } from '@aureooms/js-codec' ;
import { range } from '@aureooms/js-itertools' ;

import { decode , ASCIIDecodeError , byte2char } from '../../src' ;

function success ( t , bytes , options , expected ) {

	const string = decode( bytes ) ;

	t.deepEqual( string , expected ) ;

}

success.title = ( _ , bytes , options , expected ) => `decode '${bytes}' succeed` ;

function failure ( t , bytes , options , ExpectedError , position ) {

	t.throws( ( ) => decode( bytes ) , CodecError ) ;
	t.throws( ( ) => decode( bytes ) , ExpectedError ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.encoding === 'ascii' ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.object === bytes ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.position.start === position.start ) ;
	t.throws( ( ) => decode( bytes ) , ( error ) => error.position.end === position.end ) ;

}

failure.title = ( _ , bytes , options , expected ) => `decode '${bytes}' should fail` ;


test( success , [ 0x41 ] , null , 'A' ) ;
test( success , [ 0x61 ] , null , 'a' ) ;

test( success , [ ...range(0x80) ] , null , byte2char.join('') ) ;

test( failure , [ 0x80 ] , null , ASCIIDecodeError , { start : 0 , end : 1 } ) ;
test( failure , [ ...range(0x81) ] , null , ASCIIDecodeError , { start : 128 , end : 129 } ) ;
