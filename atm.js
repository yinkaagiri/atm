var checkingBalance = 0;
var savingsBalance = 0;

var getUserCheckingInput = function(){
  amount = parseInt( document.querySelector('#checkingAmount').value );
  targetValue = event.target.getAttribute('value');

  console.log(targetValue);

  //need to refactor this...
  if ( targetValue == "Withdraw" && amount > checkingBalance + savingsBalance ){
    alert("You're overdrawn!");
    document.querySelector('#checkingAmount').value = '';
    return checkingBalance = 0;

  } else if ( targetValue == "Withdraw" && amount > checkingBalance && amount < (checkingBalance + savingsBalance) ) {
    savingsBalance = (checkingBalance + savingsBalance) - amount;
    checkingBalance = 0;
    savingsDeposit();
    return 0;

  } else {
    checkingBalanceDiv = document.querySelector('#checkingBalanceDiv');
    document.querySelector('#checkingAmount').value = '';
    return amount;
  }
}

var getUserSavingsInput = function(){
  amount = parseInt( document.querySelector('#savingsAmount').value );
  savingsBalanceDiv = document.querySelector('#savingsBalanceDiv');
  document.querySelector('#savingsAmount').value = '';
  return amount;
}

var checkingDeposit = function(){  
  checkingBalance += getUserCheckingInput();
  checkingBalanceDiv.innerHTML = "$" + checkingBalance;

  // add class using if/else
  if (checkingBalance == 0) {
    checkingBalanceDiv.classList.add("zero");
  } else {
    checkingBalanceDiv.classList.remove("zero");
  }

 }

function checkingWithdrawal(){
  checkingBalance -= getUserCheckingInput();
  checkingBalanceDiv.innerHTML = "$" + checkingBalance;

  // add class using if/else
  if (checkingBalance == 0) {
    checkingBalanceDiv.classList.add("zero");
  } else {
    checkingBalanceDiv.classList.remove("zero");
  }
}

function savingsDeposit(){
  savingsBalance += getUserSavingsInput();
  savingsBalanceDiv.innerHTML = "$" + savingsBalance;

  // add class using if/else
  if (savingsBalance == 0) {
    savingsBalanceDiv.classList.add("zero");
  } else {
    savingsBalanceDiv.classList.remove("zero");
  }
}

function savingsWithdrawal(){
  savingsBalance -= getUserSavingsInput();
  savingsBalanceDiv.innerHTML = "$" + savingsBalance;

  // add class using if/else
  if (savingsBalance == 0) {
    savingsBalanceDiv.classList.add("zero");
  } else {
    savingsBalanceDiv.classList.remove("zero");
  }

}

// an eventListener for each button, each one a "click"
document.querySelector('#checkingDepositButton').addEventListener('click', checkingDeposit);
document.querySelector('#checkingWithdrawalButton').addEventListener('click', checkingWithdrawal);
document.querySelector('#savingsDepositButton').addEventListener('click', savingsDeposit);
document.querySelector('#savingsWithdrawalButton').addEventListener('click', savingsWithdrawal);


