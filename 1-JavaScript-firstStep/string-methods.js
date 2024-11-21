// Finding the length of a string
const browserType = "Mozilla";
browserType.length;


// Retrieving a specific string character
browserType[0]; 
browserType[browserType.length -1] // To retrieve the last character of a string


// Testing if a string contains substring 
if (browserType.includes ("zilla")) {  //this is done through includes() method that takes single parameter
   // condition here
}


// Finding the position of a substring in a string 
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers"));
         //finding the subsequent occurrences
const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);


// Extracting substring from a string
/* You can extract a substring from a string using the slice() method. You pass it:

- the index at which to start extracting
- the index at which to stop extracting. This is exclusive, meaning that the character at this index is not included in the extracted substring.
*/
browserType.slice(1, 4);