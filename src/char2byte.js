import { byte2char } from './byte2char' ;

export const char2byte = { } ;

for ( let i = 0x00 ; i < 0x80 ; ++i ) char2byte[byte2char[i]] = i ;
