$(document).ready(function(){
// var checking = new Account($("#cheking"));
// var checking = new Account($("#savings"));
var checkingSection = $(".checkingBalance");
var chekingBalance =0
var checkingDepositButton = $("#checkingDepositButton");
var checkingDepositInput = $("#checking_deposit");
var checkingWithdrawButton = $("#checkingWithdrawButton");

var savingsSection =  $(".savingsBalance");
var savingsBalance = 0
var savingsDepositInput = $("#savingsDepositInput");
var savingsDepositButton = $("#savingsDepositButton");
var savingsWithdrawButton = $("savingsWithdrawButton");


function Checking(){
checkingDepositButton.on("click", function(){
  var checkingInput = checkingDepositInput.val()
  chekingBalance += parseInt(checkingInput);
  checkingSection.html(chekingBalance);
});

checkingWithdrawButton.on("click", function(){
var withdraw = chekingBalance - (checkingDepositInput.val());
checkingSection.html(withdraw);
console.log(checkingSection.html());
chekingBalance = parseInt(checkingSection.html());
})
};




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

Checking();
// an eventListerner for each button, each one a "click"
});
