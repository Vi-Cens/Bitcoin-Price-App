var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

//
// REWRITE DUPLCIATED CODE!!!
// REWRITE DUPLCIATED CODE!!!
//

$(document).ready(function(){  //waits for DOM to finish loading to add listeners

	//AXIOS get method
	$("#usd").click(function(){
		axios.get(url)
		.then(function(res){
			$("#price").text("$" + res.data.bpi.USD.rate);  //data.bpi... from API
		})
		.catch(function(){
			console.log("ERROR");
		});
	});

	$("#eur").click(function(){
		axios.get(url)
		.then(function(res){
			$("#price").text("€" + res.data.bpi.EUR.rate);  //data.bpi... from API
		})
		.catch(function(){
			console.log("ERROR");
		});
	});	

	$("#gbp").click(function(){
		axios.get(url)
		.then(function(res){
			$("#price").text("£" + res.data.bpi.GBP.rate);  //data.bpi... from API
		})
		.catch(function(){
			console.log("ERROR");
		});
	});

})

