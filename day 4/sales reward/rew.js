let sales = Number(prompt("Enter the Sales:- "));
// let sales = 20000;
let commission,commissionPercent = null;

if (sales > 0 && sales <= 5000) {
    commissionPercent = 2;
    commission = sales * (commissionPercent / 100);
}
else if (sales >= 5001 && sales <= 10000) {
    commissionPercent = 5;
    commission = sales * (commissionPercent / 100);
}
else if (sales >= 10001 && sales <= 20000) {
    commissionPercent = 7;
    commission = sales * (commissionPercent / 100);
}
else if (sales > 20000) {
    commissionPercent = 10;
    commission = sales * (commissionPercent / 100);
}
else {
    console.log("Invaild Input!!");
    alert("Invaild Input!!");
}

commission = commission.toFixed(3);
console.log(`As per Your Total Sales:- ${sales} , Your ${commissionPercent}% Commission Is ${commission}.`)
alert(`As per Your Total Sales:- ${sales} , Your ${commissionPercent}% Commission Is ${commission}.`)