// complete the given function

function palindrome(str){
let newStr=str.match(/[a-z0-9]/g);
return newStr.reverse().join('')===newStr.join('');
	
}
module.exports = palindrome
