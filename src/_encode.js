import char2byte from './char2byte' ;
import ASCIIEncodeError from './ASCIIEncodeError' ;

export default function* _encode ( string , options = null ) {

	let start = 0 ;

	for ( const chr of string ) {

		if ( !char2byte.hasOwnProperty(chr) ) {
			const reason = `cannot find character ${chr}` ;
			const object = string ;
			const position = { start : start , end : start + 1 } ;
 			throw new ASCIIEncodeError( reason , object , position ) ;
		}

		yield char2byte[chr] ;

		++start ;

	}

}
