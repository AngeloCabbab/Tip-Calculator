let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
let BillAmount = document.getElementById('BillAmount').value;
let TipPercentage = document.getElementById('TipPercentage').value;
let TipAmount = document.getElementById('TipAmount').value = BillAmount / TipPercentage;
document.getElementById('TotalBill').value = parseFloat(BillAmount) + parseFloat(TipAmount);
})