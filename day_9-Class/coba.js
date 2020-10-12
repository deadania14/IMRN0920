const moment = require("moment");

function timeSince(date) {

    var seconds = Math.floor((new Date() - moment().format(date)) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
      return Math.floor(interval) + " years";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + " months";
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + " days";
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + " hours";
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  }

var d = "2017-11-21T17:00:22.000Z"

const dateString = '22/11/2017 17:53';
const changedDate = dateString.replace(/(..)\/(..)\/(....) (..):(..)/, '$3-$2-$1 $4:$5');
var date = new Date(changedDate);
// console.log(date.getTime());

// var now = new Date()
// var snow = JSON.stringify(now)
// var onow = JSON.parse(snow)
console.log(new Date());
console.log(typeof(new Date()));
// console.log(typeof(JSON.parse(new Date())));
// console.log(typeof(snow));
// console.log(typeof(onow));
// console.log(typeof(d));

console.log(timeSince(JSON.parse(d)));
// timeSince(d)
console.log(typeof(moment().format(d)));
