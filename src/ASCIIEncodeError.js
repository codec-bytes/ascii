import { EncodeError } from '@aureooms/js-codec' ;

export class ASCIIEncodeError extends EncodeError {

	constructor ( reason , object , start , end ) {
		super( 'ASCII' , reason , object , start , end ) ;
	}

}

