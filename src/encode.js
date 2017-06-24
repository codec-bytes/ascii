import _encode from './_encode' ;

export default function encode ( bytes , options = null ) {

	return [ ..._encode(bytes, options) ] ;

}
