
// if 
/*
const prefersDarkMode =false;
const prefersSolarizedMode = true;

if(prefersDarkMode){
    console.log('dark mode set!');
    document.body.style.background = 'black'
} else if(prefersSolarizedMode){
 console.log("solarized mode set!");
 document.body.style.background = "palegoldenrod";
}



else{
    console.log('light mode set!')
    document.body.style.background = 'ghostwhite'
}
*/
// case
/*
const colorMode = "solarized";

switch (colorMode) {
  case "solarized":
    console.log("solarized mode set!");
    document.body.style.background = "palegoldenrod";
    break;
  case "dark":
    console.log("dark mode set!");
    document.body.style.background = "black";
    break;
  default:
    console.log("light mode set!");
    document.body.style.background = "ghostwhite";
}
*/

// time based greeting
/*
const time = "morning";

if (time === "morning"){
    console.log("Good morning")
} else if(time === "afternoon"){
    console.log("Good afternoon")
}
else if(time === "evening"){
    console.log("Good evening")

} else{
    console.log("Good night")
}

*/
// time switch
const time = "morning"
switch (time) {
  case "morning":
    console.log("Good morning!");
    break;
  case "afternoon":
    console.log("Good afternoon!");
    break;
  case "evening":
    console.log("Good evening!");
    break;
  default:
    console.log("Good night!");
}