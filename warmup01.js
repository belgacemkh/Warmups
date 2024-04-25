// 1-using + operator create a function 
//that combine your partner first and last name and return it.*//

// function declaration
function MyPartnerName(firstname, lastname) {
	return firstname+' '+lastname  
}

console.log(MyPartnerName('Sabrine','Mohamed'));

function MultipleOf13orNot(number) {
	return number % 13 === 0;

}

console.log('26 multiple of 13 : '+MultipleOf13orNot(26));



// 4-create a function that takes a age as a parametre and return that age in seconds.*//

function AgeInSeconds(age) {

	const secondsInYear = 365 * 24 * 60 * 60;
    
    const ageInsecond = age * secondsInYear;
    
    return ageInsecond;
}

console.log('mon age est 41 en secondes est: '+AgeInSeconds(41));





























