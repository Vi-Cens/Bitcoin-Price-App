var url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

//Axios GET method
$("#axios").click(function(){
 axios.get(url)
.then(function(res){
    $("#quote").text(res.data[0]);
  })
.catch(function(err){
    console.log(err);
  })
})