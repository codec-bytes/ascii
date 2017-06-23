import { DecodeError } from '@aureooms/js-codec' ;

export class ASCIIDecodeError extends DecodeError {

	constructor ( reason , object , start , end ) {
		super( 'ASCII' , reason , object , start , end ) ;
	}

}
