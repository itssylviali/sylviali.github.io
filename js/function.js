function showTime(){
    var currentTime = new Date();
    console.log(currentTime);
    document.getElementById("time").innerHTML = "The current time is " + currentTime;
}
function info(){
    var name = prompt("Enter your name: ");
    var location = prompt("Enter the city you are living now: ");
    alert("Your name is " + name + " and you currently live in " + location);
    
}


function parseArray(fruits){
    console.log(fruits);
    last = fruits.sort();
    document.getElementById("last").innerText = "The sorted array: " + last + "\n"
                                                + "The item that is last alphabetically: "+ last[last.length-1]
}



//Get the button
  let mybutton = document.getElementById("btn-back-to-top");
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}