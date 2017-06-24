import { DecodeError } from '@aureooms/js-codec' ;

export default class ASCIIDecodeError extends DecodeError {

	constructor ( reason , object , start , end ) {
		super( 'ASCII' , reason , object , start , end ) ;
	}

}
