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
function parseArray(){
    var fruits = ['Watermelon', 'Apple', 'Orange', 'Kiwi'];
    console.log(fruits);
    last = fruits.sort();
    document.getElementById("last").innerText = "The sorted array: " + last + "\n"
                                                + "The item that is last alphabetically: "+ last[last.length-1]
}

