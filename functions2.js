function birthdayCountDown(date) {
<<<<<<< HEAD
    var lastday = new Date(date);
    var today = new Date();
    var days = Math.floor((lastday.getTime() - today.getTime()) / 86400000);


    return days + " days ";
=======
    var today = new Date();
    var myBirthday = new Date(date);
    myBirthday.setFullYear(today.getFullYear());
    if (today.getTime() > myBirthday.getTime()) {
        myBirthday.setFullYear(today.getFullYear() + 1);
    }
    var diff = myBirthday.getTime() - today.getTime();
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
>>>>>>> origin/master

    return ("My Birthday is in " + days+ " days :(");
}

function greetings(date) {
    var greeting = "Hi";

}

function dateMessage(Date) {

    var today = new Date() ;
    var date = today.getDate() ;
    var year = today.getFullYear();
    var month = today.getMonth();
    var int = today.getDay();
    var end = "";
    var dayname = "";
    var monthname = "";
    if (month == 0) {
        monthname = "January ";
    } else if (month == 1) {
        monthname = "February ";
    } else if (month == 2) {
        monthname = "March ";
    } else if (month == 3) {
        monthname = "April ";
    } else if (month == 4) {
        monthname = "May ";
    } else if (month == 5) {
        monthname = "June ";
    } else if (month == 6) {
        monthname = "July ";
    } else if (month == 7) {
        monthname = "August ";
    } else if (month == 8) {
        monthname = "September ";
    } else if (month == 9) {
        monthname = "October ";
    } else if (month == 10) {
        monthname = "November ";
    } else if (month == 11) {
        monthname = "December ";
    }

    if (int == 0) {
        dayname = "Sunday, ";
    } else if (int == 1) {
        dayname = "Monday, ";
    } else if (int == 2) {
        dayname = "Tuesday, ";
    } else if (int == 3) {
        dayname = "Wednesday, ";
    } else if (int == 4) {
        dayname = "Thursday, ";
    } else if (int == 5) {
        dayname = "Friday, ";
    } else if (int == 6) {
        dayname = "Saturday, ";
    }


    if (date == 1 & 21 & 31 ) {
        end = "st";
    } else if (date == 2 & 22 ) {
        end = "nd";
    } else if (date == 3 & 23 ) {
        end = "rd";
    } else {
        end = "th";}


    return ("Today is " + dayname + monthname + date + end);
}
