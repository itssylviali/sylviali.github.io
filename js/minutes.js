function showMinute(){
    var currentMinute = new Date().getMinutes();
    console.log(currentMinute);
    document.getElementById("time").innerText = "The current minute is " + currentMinute;
}

function changeElement(){
    var selectedElement = document.getElementById("currentminute");
    console.log(selectedElement);
    selectedElement.style.display = "none";
}