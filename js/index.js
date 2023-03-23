00;

// const period = document.getElementById("")
const salary = document.getElementById("txt1");
const contribution = document.getElementById("txt2");
const calculate = document.getElementById("calculate");
const output = document.getElementById("output");
const output1 = document.getElementById("output1");
// const disabilityExemption = document.getElementById("")
// const mortgage = document.getElementById("")
// const homeOwnershipSavingsPlan= document.getElementById("")


calculate.addEventListener('click',paye);




// const taxablePay =basicSalary -(28480)

function paye(cash){
if (cash != " ") {
    if (cash<=24000) {
        return (cash*0.1);
    } else if(cash >24000 && cash <= 32333){
        return (cash*0.25);  
    }else if(cash >= 32333) {
        return (cash*0.3);
    }
    
} else {
    return 'Fill the form';   
}
// const taxablePay = basicSalary-(contributionBenefit+personalRelief+insuranceRelief+allowablePension)
const taxablePay = (salary.value - contribution.value); 
console.log(taxablePay);
output.innerHTML = paye(taxablePay);

// netSalary = basicSalary - deductions;
const netSalary = (salary.value - (paye(taxablePay)));
output1.innerHTML = netSalary;
}




// const contributionBenefit = 1080;
// const personalRelief = 2400;
// const insuranceRelief = 5000;
// const allowablePension = 20000;
// const allowableHospitalRelief = 9000;
// const allowableOwnerOccupierInterest = 25000;
// const disabilityExemption = 150000;