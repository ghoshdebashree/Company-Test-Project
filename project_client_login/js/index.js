
 //For prifile pic
var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
};

//login details JS code
var currentdate = new Date();
var datetime = "Last Login: " + currentdate.getDate()+ "/" + (currentdate.getMonth()+1)
+ "/" + currentdate.getFullYear() + " @ " 
+ currentdate.getHours() + ":" 
+ currentdate.getMinutes() + ":" + currentdate.getSeconds()  ;
document.getElementById('datetime').innerHTML = datetime;