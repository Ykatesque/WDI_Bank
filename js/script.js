$(document).ready(function(){

	$("#check_deposit").on("click", deposit);
	$("#check_withdraw").on("click", withdraw);
  var check_balance_p = $("#check_balance");
  var check_balance, amount;

	function get_values() {
		check_balance = parseInt(check_balance_p.text());
		amount = parseInt($("#number").val());
	}
	function deposit(event){
		get_values();
	  check_balance_p.text(check_balance + amount);
	  event.preventDefault();
	}
	function withdraw(event){
	  get_values();
    // if things are good
	 	  check_balance_p.text(check_balance - amount);
	 	// else
      // oops!
	 	event.preventDefault();
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




