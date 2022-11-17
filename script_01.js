
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}

/*** Funktion mit Array als Parameter */



/********************************************************/
/*******                  Output                  *******/
/********************************************************/
    // output
        function output( outputStr1 ) { console.log( outputStr1 ); }

/********************************************************/
/*******                Example 01                *******/
/********************************************************/
    // mögliche Tests:
        output( getSentence1( [ "Ich", "bin", "Max" ], "S" ) );
        output( getSentence1( [ "Bist", "du", "Max" ], "Q" ) );
        output( getSentence1( [ "Ich", "bin" ],"E" ) );
        output( getSentence1( [ "Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die" ], "Q" ) );

    // get the strings
        function getSentence1( iArr, iSng ) {
            let iArrStr = "";

            for ( let i = 0; i < iArr.length; i ++ ) {
                if ( i < iArr.length - 1 ) {
                    iArrStr += iArr[ i ] + " ";
                } else {
                    iArrStr += iArr[ i ];
                }
            }
            return iArrStr + getMarks( iSng );        
        }

    // get the marks
        function getMarks( iSng ) {
            switch ( iSng ) {
                case "Q":
                    return "?";
                case "E":
                    return "!";
                default:
                    return ".";
            }
        }

/********************************************************/
/*******                Example 02                *******/
/********************************************************/
    // mögliche Tests:
        output( getSentence2( [ "Ich", "bin", "Max" ], "S" ) );
        output( getSentence2( [ "Bist", "du", "Max" ], "Q" ) );
        output( getSentence2( [ "Ich", "bin" ],"E" ) );
        output( getSentence2( [ "Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die" ], "Q" ) );

    // get the strings
        function getMarks2( iArr, iSng ) {
            let iArrStr = "";

            for ( let i = 0; i < iArr.length; i ++ ) {
                if ( i < iArr.length - 1 ) {
                    iArrStr += iArr[ i ] + " ";
                } else {
                    iArrStr += iArr[ i ];
                }
            }
            return iArrStr + iSng;        
        }

    // get the marks
        function getSentence2( iArr, iSng ) {
            switch ( iSng ) {
                case "Q":
                    return getMarks2( iArr, "?" );
                case "E":
                    return getMarks2( iArr, "!" );
                default:
                    return getMarks2( iArr, "." );
            }
        }

/********************************************************/
/*******                Example 03                *******/
/********************************************************/
    // mögliche Tests:
        output( getSentence3( [ "Ich", "bin", "Max" ], "S" ) );
        output( getSentence3( [ "Bist", "du", "Max" ], "Q" ) );
        output( getSentence3( [ "Ich", "bin" ],"E" ) );
        output( getSentence3( [ "Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die" ], "Q" ) );

    // get the strings
    function getSentence3( iArr, iSng ) {
        let iArrStr = "";
        let iSngStr = ( iSng == "Q" ) ? "?" : ( iSng == "E" ) ? "!" : ".";

        for ( let i = 0; i < iArr.length; i ++ ) {
            ( i < iArr.length - 1 ) ? iArrStr += ( iArr[ i ] + " " ) : iArrStr += iArr[ i ];
        }
        return iArrStr + iSngStr;
    }

/********************************************************/
/*******                Example 04                *******/
/********************************************************/
    // mögliche Tests:
        output( getSentence4( [ "Ich", "bin", "Max" ], "S" ) );
        output( getSentence4( [ "Bist", "du", "Max" ], "Q" ) );
        output( getSentence4( [ "Ich", "bin" ],"E" ) );
        output( getSentence4( [ "Ich", "hätt", "gern", "die", "Platt", "von", "dene", "zwei", "diwodaso", "Spass", "mache,", "habbe", "Sie", "die" ], "Q" ) );

    // get the strings
    function getSentence4( iArr, iSng, iArrStr = "" ) {
        for ( let i = 0; i < iArr.length; i ++ ) { ( i < iArr.length - 1 ) ? iArrStr += ( iArr[ i ] + " " ) : iArrStr += iArr[ i ]; }
        return iArrStr + (( iSng == "Q" ) ? "?" : ( iSng == "E" ) ? "!" : ".");
    }
