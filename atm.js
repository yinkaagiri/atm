$(function(){
  var checkingBalance = 0;
  var savingsBalance = 0;
  var $checkingBalanceDiv = $('#checkingBalanceDiv');
  var $savingsBalanceDiv = $('#savingsBalanceDiv');
  var $checkingAmount = $("#checkingAmount");
  var $savingsAmount = $("#savingsAmount");

  var getUserCheckingInput = function(){
    var amount = parseInt( $checkingAmount.val() );
    $checkingAmount.val('');
    return amount;
  }

  var getUserSavingsInput = function(){
    var amount = parseInt( $savingsAmount.val() );
    $savingsAmount.val("");
    return amount;
  }

  var checkingDeposit = function(){
    checkingBalance += getUserCheckingInput();
    $checkingBalanceDiv.html("$" + checkingBalance);

    // add class using if/else
    if (checkingBalance == 0) {
      $checkingBalanceDiv.addClass("zero");
    } else {
      $checkingBalanceDiv.removeClass("zero");
    }
   }

  function checkingWithdrawal(){
    checkingBalance -= getUserCheckingInput();
    $checkingBalanceDiv.html("$" + checkingBalance);
    // add class using if/else
    if (checkingBalance == 0) {
      $checkingBalanceDiv.addClass("zero");
    } else {
      $checkingBalanceDiv.removeClass("zero");
    }
  }

  function savingsDeposit(){
    savingsBalance += getUserSavingsInput();
    $savingsBalanceDiv.html("$" + savingsBalance);

    // add class using if/else
    if (savingsBalance == 0) {
      $savingsBalanceDiv.addClass("zero");
    } else {
      $savingsBalanceDiv.removeClass("zero");
    }
  }

  function savingsWithdrawal(){
    savingsBalance -= getUserSavingsInput();
    $savingsBalanceDiv.html("$" + savingsBalance);

    // add class using if/else
    if (savingsBalance == 0) {
      $savingsBalanceDiv.addClass("zero");
    } else {
      $savingsBalanceDiv.removeClass("zero");
    }

  }

  // an eventListener for each button, each one a "click"
  $('#checkingDepositButton').on('click', checkingDeposit);
  $('#checkingWithdrawalButton').on('click', checkingWithdrawal);
  $('#savingsDepositButton').on('click', savingsDeposit);
  $('#savingsWithdrawalButton').on('click', savingsWithdrawal);
})
