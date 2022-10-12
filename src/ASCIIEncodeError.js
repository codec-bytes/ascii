import {EncodeError} from '@codec-bytes/error';

export default class ASCIIEncodeError extends EncodeError {
	constructor(reason, object, position) {
		super('ascii', reason, object, position);
	}
}
