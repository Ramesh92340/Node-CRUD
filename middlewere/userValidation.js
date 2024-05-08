exports.validateEmail=function(mail) {
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailPattern.test(mail);
  }
  
  // Function to validate a password
 exports.validatePassword=function(password) {
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&+=!])(?!.*\s).{8,}$/;
    return passwordPattern.test(password);
    }



    exports.validatePhoneNumber = function(phoneNumber) {
        const phonePattern = /^\d{10}$/;
        return phonePattern.test(phoneNumber);
      }



exports.validateName = function(name) {
  const namePattern = /^[A-Za-z\s]{1,20}$/;
  return namePattern.test(name);
}