import char2byte from './char2byte' ;
import ASCIIEncodeError from './ASCIIEncodeError' ;

export default function* _encode ( string ) {

	for ( const chr of string ) {

		if ( !char2byte.hasOwnProperty(chr) ) throw new ASCIIEncodeError( `cannot find character ${chr}` ) ;

		yield char2byte[chr] ;

	}

}
