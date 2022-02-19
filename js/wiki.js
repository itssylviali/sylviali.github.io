function wikiAPI(){
    var searchTerm = document.getElementById('searchTerm').value;
    var connect = new XMLHttpRequest();
    var url = "https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&generator=search&gsrnamespace=0&gsrlimit=20&gsrsearch=" + searchTerm;

    //GET request on the URL endpoint
    connect.open('GET',url);

//once request has loaded
connect.onload = function (){
    var wikiObject = JSON.parse(this.response);
    //log the data object
    //console.log(wikiObject);
    //log the page objects
    //console.log(wikiObject.query.pages)
    var pages = wikiObject.query.pages;
    //loop through the data object
    //pulling out the titles of each page
    for (i in pages){
        //basic function
        /*var newDiv = document.createElement("div");
        newDiv.setAttribute('class','row h4');
        document.getElementById("wiki").appendChild(newDiv);
        newDiv.innerText = pages[i].title; */
        
        //super challenge
        var pageURL = "https://en.wikipedia.org/?curid="
        var newAnchor = document.createElement("a");
        newAnchor.href = pageURL+pages[i].pageid; //setAttribute('href',pageURL+pages[i]);
        newAnchor.className = 'd-block'; //setAttribute('class','d-block');
        newAnchor.innerText = pages[i].title;
        document.getElementById("wiki").appendChild(newAnchor);
    };
        
}

//send the api request to the server
connect.send();

}

