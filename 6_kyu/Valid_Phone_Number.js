function validPhoneNumber(phoneNumber) {
  return phoneNumber.length === 14 && phoneNumber[0] === '(' && phoneNumber[4] === ')' && phoneNumber[9] === '-'

}


console.log(validPhoneNumber("(123) 456-7890"))//, true);
console.log(validPhoneNumber('(098) 123 4567'))//  => false))//,