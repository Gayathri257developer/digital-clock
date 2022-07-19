//change button content

function hoverNoChange(){
 const element2 = document.getElementsByTagName("button")[0];
 element2.innerText = "Party Time !";
}
function hoverChange(){
  const element2 = document.getElementsByTagName("button")[0];
  element2.innerText = "Set Alarm !";
 }

//digital time setting
let time = setInterval(
function updateClock() {
  // Get the current time, day , month and year
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let session = hours >= 12 ? "PM" : "AM" ;

  //12 hour format
  if(hours > 12){
    hours = hours - 12;
  }

// set time greeting 

mrng_hr = [8,9,10,11];
lunch_hr = [12,1,2,3];
nap_hr = [4,5,6,7];
night_hr = [8,9,10,11];

if(mrng_hr.includes(hours)){
  greeting = "Good Morning!! Wake up !!";
  message = "GRAB SOME HEALTHY BREAKFAST!!!";
  image = document.getElementById("image");
  image.src = "Component\ 30\ –\ 1.svg";
}
else if(lunch_hr.includes(hours)){
  greeting = "Good Afternoon!! TAKE SOME SLEEP";
  message = "LET'S HAVE SOME LUNCH !!";
  image = document.getElementById("image");
  image.src = "Component\ 31\ –\ 1.svg";
}
else if(nap_hr.includes(hours)){
  greeting = "good evening !!";
  message = "STOP YAWNING, Get some tea.. ITS JUST EVENING!";
  image = document.getElementById("image");
  image.src = "lunch_image.png";
}
else if(night_hr.includes(hours)) {
  greeting = "Good Night !!";
  message = "CLOSE YOUR EYES AND GO TO SLEEP";
  image = document.getElementById("image");
  image.src = "Component\ 32\ –\ 1.png";
}
     //format to display time
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
seconds = seconds < 10 ? '0' + seconds : seconds;
 
  document.getElementById('hour').innerText = hours;
  document.getElementById('minute').innerText = minutes; 
  document.getElementById('second').innerText = seconds; 
  document.getElementById('AMPM').innerHTML = session;

 const greetingOne = document.getElementsByTagName("h3")[0];
 greetingOne.innerText = greeting;

 const greetingTwo = document.getElementsByTagName("h3")[1];
 greetingTwo.innerText = message;

},1000)

//set alarm
function setAlarm(){
  //select element id's
  var set = document.getElementById('morning');
  var setOne = document.getElementById('afternoon');
  var setTwo = document.getElementById('evening');
  var setThree = document.getElementById('night');  

  //option text
 document.getElementById("set-alarm").onclick = function() {
  var get = set.options[set.selectedIndex].text;
  var getOne = setOne.options[setOne.selectedIndex].text;
  var getTwo = setTwo.options[setTwo.selectedIndex].text;
  var getThree = setThree.options[setThree.selectedIndex].text;

  //print text
   document.getElementsByTagName('p')[0].innerText = `Wake Up Time: ${get}  
     Lunch Time: ${getOne} 
     Nap Time: ${getTwo} 
     Night Time: ${getThree}`;

    const msg = document.getElementById("message");
    msg.style.display = "block";
}
}
setAlarm();
