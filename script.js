// complete the given function

function palindrome(str){
let newStr=str;
return newStr.reverse().join('')===newStr.join('');
	
}
module.exports = palindrome
