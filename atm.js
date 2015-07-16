var atm = {
  accounts: {
    checking: 0,
    savings: 0
  },

  initialize: function() {
    $(".account").on("click", function(event) {
      event.preventDefault(); // don't go to a new page

      var actionType = $(event.target).val(); // Deposit or Withdrawl
      var accountType = $(event.target).siblings("h2").eq(0).html() // Checking or Savings
      var amount = parseInt($(event.target).siblings("[type=text]").val());

      if(actionType === "Deposit") {
        this.deposit(amount, accountType);
      }else if(actionType === "Withdraw"){
        this.withdraw(amount, accountType);
      }
    }.bind(this)); // this refers to `atm`, so we bind the callback to `atm`

  },

  deposit: function(amount, account) {
    // use dynamic property to avoid "if statement"
    account = account.toLowerCase(); // "Checking", "checking", "Savings", "savings"
    this.accounts[account] += amount;

    // more traditional if statement alternative
    // if(account === "checking") {
    //   this.accounts.checking += amount;
    // } else if(account === "savings") {
    //   this.accounts.savings += amount;
    // }
    this.updateDisplay();

  },

  withdraw: function(amount, account) {
    account = account.toLowerCase(); // "Checking", "checking", "Savings", "savings"
    this.accounts[account] -= amount;

    // more traditional if statement alternative
    // if(account === "checking") {
    //   this.accounts.checking -= amount;
    // } else if(account === "savings") {
    //   this.accounts.savings -= amount;
    // }

    this.updateDisplay();
  },

  updateDisplay: function() {
    $(".balance").eq(0).html("$" + this.accounts.checking);
    $(".balance").eq(1).html("$" + this.accounts.savings);
  }

}

atm.initialize();
