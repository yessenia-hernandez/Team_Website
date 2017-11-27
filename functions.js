                var greeting = "Ciao!-Howdy!-Greetings!-Hola!-Bonjour!-Take me to your leader!"   var array = greeting.split("-");
                var greeting = Math.random();

<<<<<<< HEAD
function
  var today = new Date();
  var date=  today.getDate
  var year = today.getFullYear
  var month = today.getMonth
  var int = today.getMonth
  var monthname = "";
   if (month == 0 ) {
       monthname = "January, ";
   } else if (int == 1){
       monthname = "Feburary, ";
   } else if (int == 2){
       monthnamw = "March, ";
   } else if (int == 3){
       monthname = "April, ";
   } else if (int == 4){
       monthname = "May, ";
   } else if (int == 5){
       monthname "June, ";
   } else if (int == 6){
       monthname "July, ";
   } else if (int == 7){
       monthname "August, ";
   } else if (int == 8){
       monthname "September, ";
   } else if (int == 9){
       monthname "Octuber, ";
   } else if (int == 10)

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

            document.write(dayname, +month + 1 + "/" + date + "/" + year);
        </script>


  var lastday = new Date("02/02/2018");
=======



<<<<<<< HEAD
 //<script>
               // var lastday = new Date("6/14/2018");
               // var days = Math.floor((lastday.getTime() - today.getTime()) / 86400000);
              //  var hours = Math.ceil((lastday.getTime() - today.getTime()) / 3600000);
              //  var newhour = Math.floor(hours - (days * 24));
             //   var minutes = (lastday.getTime() - today.getTime()) / 60000;
             //   var newminute = Math.ceil(minutes - (Math.floor((lastday.getTime() - today.getTime()) / 3600000) * 60));
              //document.write(birthdayCountDown("12/15/2000")); // document.write("The are " + days + " days, " + newhour + " hours, and " + newminute + " minutes untill the end of the school year");
           //</script>
=======


function BirthdayCountDown(date){
                var lastday = new Date(date);
                var today = new Date();
>>>>>>> origin/master
                var days = Math.floor((lastday.getTime() - today.getTime()) / 86400000);
                var hours = Math.ceil((lastday.getTime() - today.getTime()) / 3600000);
                var newhour = Math.floor(hours - (days * 24));
                var minutes = (lastday.getTime() - today.getTime()) / 60000;
                var newminute = Math.ceil(minutes - (Math.floor((lastday.getTime() - today.getTime()) / 3600000) * 60));

<<<<<<< HEAD
 document.write("The are " + days + " days, " + newhour + " hours, and " + newminute + " minutes untill the end of the school year")
=======

 return days + " days ";

}
>>>>>>> origin/master
>>>>>>> origin/master
