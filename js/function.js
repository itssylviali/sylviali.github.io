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

function math(arr) {
    var sum = 0;
    // loop through entire array
    for (var i = 0; i < arr.length; i++) {
      // loop through each inner array
      for (var j = 0; j < arr[i].length; j++) {
        // add this number to the current final sum
        sum += arr[i][j];
      }
    }
    document.getElementById("math").innerHTML = "The input array is " +arr + "\n"
                                                + "The sum is " + sum;
  }

function parseArray(){
    var fruits = ['Watermelon', 'Apple', 'Orange', 'Kiwi'];
    console.log(fruits);
    last = fruits.sort();
    document.getElementById("last").innerText = "The sorted array: " + last + "\n"
                                                + "The item that is last alphabetically: "+ last[last.length-1]
}

