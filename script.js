const countdownBtn = document.getElementById('countdown-btn');
const _MS_PER_DAY = 1000 * 60 * 60 * 24;
const _MS_PER_HR = 1000 * 60 * 60;
const _MS_PER_MIN = 1000 * 60;
const _MS_PER_S = 1000;

countdownBtn.addEventListener('click', function(){


 let eventName = document.getElementById('event-name');
 let eventDate = document.getElementById('event-date');
 let eventTime = document.getElementById('event-time');

 const countdownMsgBtn = document.getElementById('countdown-msg');
 
 setInterval(function(){
   let countdownMsg = dateDiffTime(eventName.value, eventDate.value, eventTime.value);
 
   countdownMsgBtn.innerHTML = `<p>${countdownMsg}</p>`;
 }, 1000);
});

function dateDiffTime(eventName, eventDate, eventTime = '00:00') {
 let message;
 
 if(!eventName) {
   message = 'Specify name of the event first and Try Again!';
 } else {
   if (!eventDate) {
     message = `There is no date for ${eventName}. Please Try Again!`;
   } else {
       let currentDateCalc = new Date();
       let eventDateCalc;

       if (!eventTime) {
          eventDateCalc = new Date(eventDate + ' ' + '00:00');
       } else {
          eventDateCalc = new Date(eventDate + ' ' + eventTime);
       }
 
   console.log(`Current Date: ${currentDateCalc}`);
   console.log(`Event Date: ${eventDateCalc}`);

 //   Discard the time and time-zone information
   let utc1 = Date.UTC(currentDateCalc.getFullYear(), currentDateCalc.getMonth(), currentDateCalc.getDate(), currentDateCalc.getHours(), currentDateCalc.getMinutes(), currentDateCalc.getSeconds());
   let utc2 = Date.UTC(eventDateCalc.getFullYear(), eventDateCalc.getMonth(), eventDateCalc.getDate(), eventDateCalc.getHours(), eventDateCalc.getSeconds());
     
     console.log(utc1);
 
 
 
 let diffinDays = Math.floor((utc2 - utc1)/_MS_PER_DAY);
 let strDays;
 if (diffinDays === 1) {
   strDays = `${diffinDays} day`;
 } else {
   strDays = `${diffinDays} days`;
 }
 
 let diffinHours = Math.floor((utc2 - utc1)/_MS_PER_HR);
 let strHours;
 if (diffinHours === 1) {
   strHours = `${diffinHours} hour`;
 } else {
   strHours = `${diffinHours} hours`;
 }
 
 let diffinMins = Math.floor((utc2 - utc1)/_MS_PER_MIN);
 let strMin;
 if (diffinMins === 1) {
   strMin = `${diffinMins} minute`;
 } else {
   strMin = `${diffinMins} minutes`;
 }
 
 let diffinSecs = Math.floor((utc2 - utc1)/_MS_PER_S);
 let strSec;
 if (diffinSecs === 1) {
   strSec = `${diffinSecs} second`;
 } else {
   strSec = `${diffinSecs} seconds`;
 }
 
 message = `${strDays} or ${strHours} or ${strMin} or ${strSec} left until ${eventName}!!!` 
 
 // console.log(`Days Left: ${diffinDays}`);
 // console.log(`Hours Left: ${diffinHours}`);
 // console.log(`Minutes Left: ${diffinMins}`);
 // console.log(`Seconds Left: ${diffinSecs}`);
   }
 }
 
 return message;
}