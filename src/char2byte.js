import { byte2char } from './byte2char' ;

export const char2byte = { } ;

for ( const i = 0x00 ; i <= 0xFF ; ++i ) char2byte[byte2char[i]] = i ;
