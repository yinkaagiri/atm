$(document).ready(function(){
// var checking = new Account($("#cheking"));
// var checking = new Account($("#savings"));
var checkingBalance = $(".checkingBalance");
var Balance =0
var checkingDepositButton = $("#checkingDepositButton");
var checkingDepositInput = $("#checking_deposit");
var checkingWithdrawButton = $("#checkingWithdrawButton");
checkingDepositButton.on("click", function(){
  var checkingInput = checkingDepositInput.val()
  Balance += parseInt(checkingInput);
  checkingBalance.html(Balance);
  console.log();
});

checkingWithdrawButton.on("click", function(){
var withdraw = Balance - (checkingDepositInput.val());
checkingBalance.html(withdraw);
console.log(checkingBalance.html());
})
// checkingBalance = parseInt(checking_balance.innerHTML.replace("$", "") );

// get savings deposit value
savings_amount = document.querySelectorAll("#savings .deposit").value;

// get checking deposit value
checking_amount = document.querySelectorAll("#savings .deposit").value;

var checkingDeposit = function(checking_amount){
  checkingBalance = parseInt( checking_balance.innerHTML.replace("$", "") );
  checkingBalance+= checking_amount;
  checking_balance.innerHTML = '$'+ checkingBalance;
  checking_amount = "";
}

function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

// an eventListerner for each button, each one a "click"
});
