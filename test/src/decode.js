import test from 'ava' ;

import { decode , ASCIIDecodeError , byte2char } from '../../src' ;

import { range } from '@aureooms/js-itertools' ;

function success ( t , bytes , options , expected ) {

	const string = decode( bytes ) ;

	t.deepEqual( string , expected ) ;

}

success.title = ( _ , bytes , options , expected ) => `decode '${bytes}' succeed` ;

function failure ( t , bytes , options , ExpectedError ) {

	t.throws( ( ) => decode( bytes ) , ExpectedError ) ;

}

failure.title = ( _ , bytes , options , expected ) => `decode '${bytes}' should fail` ;


test( success , [ 0x61 ] , null , 'a' ) ;

test( failure , [ 0x80 ] , null , ASCIIDecodeError ) ;

test( success , [ ...range(0x80) ] , null , byte2char.join('') ) ;
