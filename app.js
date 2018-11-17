var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

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