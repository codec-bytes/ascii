import _decode from './_decode' ;

export default function decode ( bytes ) {

	return [ ..._decode(bytes) ].join('') ;

}
