





function BirthdayCountDown(date){
                var lastday = new Date("02/02/2018");
                var days = Math.floor((lastday.getTime() - today.getTime()) / 86400000);
                var hours = Math.ceil((lastday.getTime() - today.getTime()) / 3600000);
                var newhour = Math.floor(hours - (days * 24));
                var minutes = (lastday.getTime() - today.getTime()) / 60000;
                var newminute = Math.ceil(minutes - (Math.floor((lastday.getTime() - today.getTime()) / 3600000) * 60));


 return " + days + " days, " + newhour + " hours, and " + newminute + " minutes untill the end of the school year";
              document.write(birthdayCountDown("12/15/2000"));
}
