$(document).ready(function(){

	$("#check_deposit").on("click", deposit);
	$("#check_withdraw").on("click", withdraw);
  var check_balance_p = $("#check_balance");
  var sav_balance_p = $("#sav_balance");
  var check_balance, amount;
  var sav_balance, overdraft;

	function deposit(event){
		event.preventDefault();
		var check_balance = parseInt(check_balance_p.text());
    var sav_balance = parseInt(sav_balance_p.text());
		var amount = parseInt($("#number").val());
	  check_balance_p.text(check_balance + amount);
	}

	function withdraw(event){
		event.preventDefault();
	  var check_balance = parseInt(check_balance_p.text());
    var sav_balance = parseInt(sav_balance_p.text());
		var amount = parseInt($("#number").val());
	  var total_money = check_balance + sav_balance;
	  if (amount <= total_money) {
		 	if (amount <= check_balance) {
	 	  	check_balance_p.text(check_balance - amount);
	 	  }
		 	else if (amount > check_balance) {
		 		overdraft = ((check_balance - amount) - check_balance);
		 		check_balance_p.text(check_balance - check_balance);
		 		sav_balance_p.text(sav_balance + overdraft);
		 	}
	  } 
		else {
	  	$(".container").css({"background": "rgba(255, 0, 0, 0.7)", "color": "black", });

$("#warning").css({"display": "block", });
	  }
	}

$("#sav_deposit").on("click", s_deposit);
	$("#sav_withdraw").on("click", s_withdraw);
  var sav_balance_p = $("#sav_balance");
  var sav_balance, amount2;

	function get_values(){
		sav_balance = parseInt(sav_balance_p.text());
		amount2 = parseInt($("#number2").val());
	}

	function s_deposit(event){
		event.preventDefault();
			var sav_balance = parseInt(sav_balance_p.text());
			var amount2 = parseInt($("#number2").val());
			sav_balance_p.text(sav_balance + amount2);
	}

	function s_withdraw(event){
 		event.preventDefault()
    var sav_balance = parseInt(sav_balance_p.text());
		var amount2 = parseInt($("#number2").val());

		if (amount2 < sav_balance)
 	  {
 	  	sav_balance_p.text(sav_balance - amount2);
 	  }
 	  else if (amount2 >= sav_balance)
	 	{
	 		$(".container").css({"background": "rgba(255, 0, 0, 0.7)", "color": "black", });

$("#warning").css({"display": "block", });
	 	}	  
	}
});	