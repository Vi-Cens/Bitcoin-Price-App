var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

//Axios GET method
/*
$("#axios").click(function(){
 axios.get(url)
.then(function(res){
    $("#price").text(res.data[0]);
  })
.catch(function(err){
    console.log(err);
  })
})
*/

//AXIOS get method
axios.get(url)
.then(function(res){
	$("#price").text(res.data.bpi.USD.rate);  //data.bpi... from API
})
.catch(function(){
	console.log("ERROR");
})