import byte2char from './byte2char.js' ;
import ASCIIDecodeError from './ASCIIDecodeError.js' ;

export default function* _decode ( bytes , options = null ) {

	let start = 0 ;

	for ( const b of bytes ) {

		if ( b < 0x00 || b > 0x7F ) {
			const reason = `byte out of range 0x00 <= ${b} <= 0x7F` ;
			const object = bytes ;
			const position = { start : start , end : start + 1 } ;
			throw new ASCIIDecodeError( reason , object , position ) ;
		}

		yield byte2char[b] ;

		++start ;

	}

}
