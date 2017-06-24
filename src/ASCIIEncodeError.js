import { EncodeError } from '@aureooms/js-codec' ;

export default class ASCIIEncodeError extends EncodeError {

	constructor ( reason , object , start , end ) {
		super( 'ASCII' , reason , object , start , end ) ;
	}

}

