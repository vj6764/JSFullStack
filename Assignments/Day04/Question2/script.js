//create a request object
var request = new XMLHttpRequest();
//open the connection
request.open('GET','https://restcountries.com/v2/all',true);
//send the connection
request.send();
//get the required result
request.onload=function(){
    var result = JSON.parse(request.response);
    for(var i=0;i<result.length;i++){
        console.log(result[i].flag);
    }
}
