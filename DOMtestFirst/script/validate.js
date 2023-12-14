const validateUsername = (username) => {
  // Define character sets
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numericChars = '0123456789';
  const disallowedSpecialChars = '$#%^&*()_+!';

  // Check if the username meets the criteria
  const hasUppercase = [...username].some(char => uppercaseChars.includes(char));
  const hasNumber = [...username].some(char => numericChars.includes(char));
  const isLengthValid = username.length >= 5;
  const containsNoSpecialChars = !([...username].some(char => disallowedSpecialChars.includes(char)));

  // Return true if all criteria are met, otherwise false
  if (hasUppercase && hasNumber && isLengthValid && containsNoSpecialChars){
    // console.log("Username is valid")
    return true
  } else{
    // alert("Username does not match!")
    return false
  }
};

const validateEmail = (email) => {
    const hasAtSymbol = email.includes('@');
    const endsWithDotCom = email.endsWith('.com');
  
    if(hasAtSymbol && endsWithDotCom ){
        // console.log("Email is valid")
        return true
    } else {
        // alert("Email does not match!")
        return false
    }
};

const validatePassword = (password) => {
    const specialChars = '!@#$%^&*()_-+=<>?/';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numericChars = '0123456789';
  
    // Check if the password meets the criteria
    const hasSpecialChar = [...password].some(char => specialChars.includes(char));
    const hasUppercase = [...password].some(char => uppercaseChars.includes(char));
    const hasLowercase = [...password].some(char => lowercaseChars.includes(char));
    const hasNumber = [...password].some(char => numericChars.includes(char));
    const isLengthValid = password.length >= 8;
  
    // Return true if all criteria are met, otherwise false
    if(hasSpecialChar && hasUppercase && hasLowercase && hasNumber && isLengthValid){
        // console.log("Password is valid")
        return true
    }else{
        // alert("Password does not match!")
        return false
    }
};

export { validateEmail, validatePassword, validateUsername };
