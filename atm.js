var atm = {
  buttons: $("[type='button']"),
  accounts: {
    checking: 0,
    savings: 0
  },
  transact: function(event){
    var account = $(event.target).parent()
    var userInput = parseInt(account.children("[type='text']").val())
    var accountName = account.attr("data-account")
    // check which button we clicked on
    var button = $(event.target).val()
    if( button == "Deposit"){
      // add user input to the relevant account
      this.accounts[accountName] +=  userInput
    } else if( button == "Withdraw") {
      this.accounts[accountName] -=  userInput
    } else{
      alert("You don't have enough money")
    }
    // update the html for that account
    account.find(".balance").html("$" + this.accounts[accountName])
  },
  listen: function(){
    this.buttons.on("click", this.transact.bind(this))
  }
}

atm.listen()
