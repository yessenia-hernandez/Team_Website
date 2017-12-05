function birthdayCountDown(date) {
    var lastday = new Date(date);
    var today = new Date();
    var days = Math.floor((lastday.getTime() - today.getTime()) / 86400000);


    return days + " days ";

}

function superiorGreeting(msg) {
    var d = new Date();
    var hour = d.getHours();
    var day = d.getDay();
    var msg = "";
    if (hour < 12) {
        if (day == 0 || day == 6) {
            msg = "Go back to sleep! Its the weekend!";
        } else if (day == 1) {
            msg = "Ugh, its a Monday morning!";
        } else if (day == 2 || day == 3 || day == 4) {
            msg = "Good Morning";
        } else if (day == 5) {
            msg = "Its finally Friday!! Goodmorning :)";
        }
    } else if (hour > 17 ) {
        msg = "Good Evening"
     } else if (day == 6){
         msg = "Enjoy you evening...tomorrow is Monday"
    }
    else if (hour < 15 ) {
        msg = "Good Day!"
    }

    return msg;
}




function dateMessage(date) {
    var message = "Hi";

}
