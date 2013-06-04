$(document).ready(function(){

	$("#check_deposit").on("click", deposit);
	$("#check_withdraw").on("click", withdraw);
  var check_balance_p = $("#check_balance");
  var sav_balance_p = $("#sav_balance");
  var check_balance, amount;
  var sav_balance, overdraft;

	// function get_values() {
	// 	check_balance = parseInt(check_balance_p.text());
 //    sav_balance = parseInt(sav_balance_p.text());
	// 	amount = parseInt($("#number").val());
	// }
	function deposit(event){
		event.preventDefault();
		var check_balance = parseInt(check_balance_p.text());
    var sav_balance = parseInt(sav_balance_p.text());
		var amount = parseInt($("#number").val());
	  check_balance_p.text(check_balance + amount);
	}

	function withdraw(event){
		console.log('inside the checking wd func')


		event.preventDefault();
	  var check_balance = parseInt(check_balance_p.text());
    var sav_balance = parseInt(sav_balance_p.text());
		var amount = parseInt($("#number").val());
	  
	  var total_money = check_balance + sav_balance;
	  console.log(amount, total_money);


	  if (amount <= total_money) {
		 	if (amount <= check_balance) {
	 	  	check_balance_p.text(check_balance - amount);
	 	  }
		 	else if (amount > check_balance) {
		 		overdraft = ((check_balance - amount) - check_balance);
		 		sav_balance_p.text(sav_balance + overdraft);
		 	}
	  } else {
	  	alert('get a job.');
	  }
	

      // oops!
	}

$("#sav_deposit").on("click", s_deposit);
	$("#sav_withdraw").on("click", s_withdraw);
  var sav_balance_p = $("#sav_balance");
  var sav_balance, amount2;

	function get_values() {
		sav_balance = parseInt(sav_balance_p.text());
		amount2 = parseInt($("#number2").val());
	}
	function s_deposit(event){
	  event.preventDefault();
		get_values();
	  sav_balance_p.text(sav_balance + amount2);
	}

	function s_withdraw(event){
	  get_values();
 		event.preventDefault()

		if (amount2 >= sav_balance)
	 	{
	 		alert("You have no money!");
	 	}

 	  else if (amount2 < sav_balance)
 	  {
 	  	sav_balance_p.text(sav_balance - amount2);
 	  }
	}
});	









		// i need to know the original balance

		// i neefd to know how much to wd
		
		// i need to see if there is enough money
		
		// if not enough
		  // if there is there enough in savings
		    // do it
		  // else
		    // oops!
    // bla
    // da da 
    // update tge
		// i need to update the page to show the new balance


	
		


// switch(current_balance) {
// 	case(current_balance > sub_balance):
// 		blah;
// 		break;
// 	case(current_balance < sub_balance < saving_balance):
// 		blah;
// 		break;
// 	case (sub_balance > current_balance)
// 		blah
// 		break;


// }




