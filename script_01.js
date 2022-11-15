
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}

/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));


/*** Example 01  */

// output
    function output( outputStr1 ) { console.log( outputStr1 ); }

// get the strings
    function getSentence( iArr, iSng ) {
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