import _decode from './_decode' ;

export default function decode ( bytes , options = null ) {

	return [ ..._decode(bytes, options) ].join('') ;

}
