import { DecodeError } from '@aureooms/js-codec' ;

export default class ASCIIDecodeError extends DecodeError {

	constructor ( reason , object , position ) {
		super( 'ascii' , reason , object , position ) ;
	}

}
