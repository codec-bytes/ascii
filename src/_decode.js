import byte2char from './byte2char' ;
import ASCIIDecodeError from './ASCIIDecodeError' ;

export default function* _decode ( bytes , options = null ) {

	let start = 0 ;

	for ( const b of bytes ) {

		if ( b < 0x00 || b >= 0x80 ) {
			const reason = `byte out of range 0x00 <= ${b} <= 0xFF` ;
			const object = bytes ;
			const position = { start : start , end : start + 1 } ;
			throw new ASCIIDecodeError( reason , object , position ) ;
		}

		yield byte2char[b] ;

		++start ;

	}

}
