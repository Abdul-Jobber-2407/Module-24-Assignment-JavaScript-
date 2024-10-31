// problem 1 

function calculateTax(income, expenses) {
    let amount= income - expenses;
    const  tax = amount * 20/100 ;
    if(income>expenses){
         return tax;
    }
    else{
        return 'Invalid Input';
    }
}

// problem 2 

function sendNotification(email) {
    if (!email.includes('@')) {
        return "Invalid Email";
    }
    else{
        const [username, domain] = email.split('@');
        return `${username} sent you an email from ${domain}`;
    }
}

// problem 3
function checkDigitsInName(input) {
    if (typeof input !== 'string') {
        return "Invalid Input";
    }
  else{
    const hasDigits = /\d/; 
    return hasDigits.test(input);
}
  }