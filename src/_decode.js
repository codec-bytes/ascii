import byte2char from './byte2char' ;
import ASCIIDecodeError from './ASCIIDecodeError' ;

export default function* _decode ( bytes ) {

	for ( const b of bytes ) {

		if ( b < 0x00 || b >= 0x80 ) throw new ASCIIDecodeError( `byte out of range 0x00 <= ${b} <= 0xFF` ) ;

		yield byte2char[b] ;

	}

}
