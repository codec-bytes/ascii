import test from 'ava' ;
import { range } from '@iterable-iterator/range' ;

import {CodecError} from './_fixtures.js';

import { decode , ASCIIDecodeError , byte2char } from '../../src' ;

function success ( t , bytes , options , expected ) {

	const string = decode( bytes ) ;

	t.deepEqual( string , expected ) ;

}

success.title = ( _ , bytes , options , expected ) => `decode '${bytes}' succeed` ;

function failure ( t , bytes , options , ExpectedError , position ) {

	const error = t.throws( ( ) => decode( bytes ) ) ;
	t.true( error instanceof CodecError ) ;
	t.true( error instanceof ExpectedError ) ;
	t.is( error.encoding , 'ascii' ) ;
	t.is( error.object , bytes ) ;
	t.is( error.position.start , position.start ) ;
	t.is( error.position.end , position.end ) ;

}

failure.title = ( _ , bytes , options , expected ) => `decode '${bytes}' should fail` ;


test( success , [ 0x41 ] , null , 'A' ) ;
test( success , [ 0x61 ] , null , 'a' ) ;

test( success , [ ...range(0x80) ] , null , byte2char.join('') ) ;

test( failure , [ -1 ] , null , ASCIIDecodeError , { start : 0 , end : 1 } ) ;
test( failure , [ 0x80 ] , null , ASCIIDecodeError , { start : 0 , end : 1 } ) ;
test( failure , [ ...range(0x81) ] , null , ASCIIDecodeError , { start : 128 , end : 129 } ) ;
