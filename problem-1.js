
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
console.log(calculateTax(10000, 7000));
console.log(calculateTax(1000, 7000));



