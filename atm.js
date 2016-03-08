$(document).ready(function(){
// var checking = new Account($("#cheking"));
// var checking = new Account($("#savings"));
var checkingDisplay = $(".checkingBalance");
var chekingBalance =0
var checkingDepositButton = $("#checkingDepositButton");
var checkingDepositInput = $("#checking_deposit");
var checkingWithdrawButton = $("#checkingWithdrawButton");

var savingsDisplay =  $(".savingsBalance");
var savingsBalance = 0
var savingsDepositInput = $("#savingsDepositInput");
var savingsDepositButton = $("#savingsDepositButton");
var savingsWithdrawButton = $("#savingsWithdrawButton");


function Checking(){
checkingDepositButton.on("click", function(){
  var checkingInput = checkingDepositInput.val()
  chekingBalance += parseInt(checkingInput);
  checkingDisplay.html(chekingBalance);
});

checkingWithdrawButton.on("click", function(){
var withdraw = chekingBalance - (checkingDepositInput.val());
checkingDisplay.html(withdraw);
chekingBalance = parseInt(checkingDisplay.html());
})
};

function Savings(){
  savingsDepositButton.on("click", function(){
    var savingsInput = savingsDepositInput.val();
    savingsBalance += parseInt(savingsInput);
    savingsDisplay.html(savingsBalance);
    console.log(savingsBalance);
  });
  savingsWithdrawButton.on("click", function(){
    var savingsWithdraw = savingsBalance - (savingsDepositInput.val());
    savingsDisplay.html(savingsWithdraw);
    savingsBalance = parseInt(savingsDisplay.html());
  });
}






function checkingWithdrawal(amount){

}

function savingsDeposit(amount){

}

function savingsWithdrawal(amount){

}

Checking();
Savings();
// an eventListerner for each button, each one a "click"
});
