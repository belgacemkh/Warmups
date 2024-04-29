/**
 * 1-write a function that returns the product of any number by 3.
 */
let productOf3 = (n) => n*3 

console.log(productOf3(4))
/**
 * 2-complete the following function multiply to return the result of multiplying x and y
 */
let multiply = (x,y) => x*y

console.log(multiply(4,5));

/**
 * 3-complete the following function that Convert Fahrenheit to Celsius if the module for converting it
 */
let fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * (5/9)

console.log(fahrenheitToCelsius(360));
/**
 * 4-Define a function named "sqArea", and make it display square area if you knew the length of its side.
 */
let sqArea = (length) => length * length
console.log(sqArea(4));

 /* 5 - Write a function called scoreToGrade that accepts a number as a parameter and returns a string representing a letter grade corresponding to that score.
 */
let scoreToGrade = (score)  => {

    if (score >= 0 && score <= 100) {
        
        if (score >= 90) {
            return 'A';
        } else if (score >= 80) {
            return 'B';
        } else if (score >= 70) {
            return 'C';
        } else if (score >= 60) {
            return 'D';
        } else {
            return 'F';
        }
    } else {
      
        return 'Invalid score. Score must be between 0 and 100.';
    }
}
console.log(scoreToGrade(15));

/**
 * 6 - Write a function sameLength that accepts two strings as arguments, and returns true if those strings have the same length, and false otherwise.
 */
let sameLength = (string1, string2) => string1.length === string2.length

console.log(sameLength('chain1', 'chaine2'));
/**
 *! 1 Write a function named helloWorld that:
 *! takes 1 argument, a language code (e.g. "fr", "es", "en")
 *! returns "Hello, World" for the given language, for at least 3 languages. It should default to returning English.
 *! ex: helloWorld('fr') ==> 'Bonjour tout le monde'
 *!    helloWorld('es') ==> 'Hola, Mundo'
 *!    helloWorld('') ==> 'Hello, World'
 *!
 *! @function helloWorld
 *! @param {string} str
 *! @return {string}
 */

let helloWorld = (languageCode = "en") => {
    switch (languageCode) {
        case "fr":
            return "Bonjour tout le monde";
        case "es":
            return "Hola, Mundo";
        default:
            return "Hello, World";
    }
}
console.log(helloWorld("en"));
console.log(helloWorld("fr"));
console.log(helloWorld("es"));

