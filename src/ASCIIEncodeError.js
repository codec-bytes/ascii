import { EncodeError } from '@aureooms/js-codec' ;

export default class ASCIIEncodeError extends EncodeError {

	constructor ( reason , object , position ) {
		super( 'ascii' , reason , object , position ) ;
	}

}

