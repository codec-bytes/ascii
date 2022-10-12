import { DecodeError } from '@codec-bytes/error' ;

export default class ASCIIDecodeError extends DecodeError {

	constructor ( reason , object , position ) {
		super( 'ascii' , reason , object , position ) ;
	}

}
