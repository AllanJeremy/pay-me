var startDate = new Date("12/04/2020 11:00"); // Change this
var endDate = new Date('12/06/2020 11:00'); // Change this
var maxDiff = endDate - startDate;

var reduceOpacity = function (){
	var timeLeftMs = endDate-Date.now();
	var opacity = timeLeftMs/maxDiff;
  
  document.getElementsByTagName("body")[0].style.opacity= opacity;
}

setInterval(reduceOpacity,5000);
