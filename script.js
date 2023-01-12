// complete the given function

function palindrome(str){
let newStr=str.toLowerCase().match(/[a-z0-9]/g);
return newStr.reverse().join('')===newStr.join('');
	
}
module.exports = palindrome
