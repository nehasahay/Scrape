 document.getElementById("scrape").addEventListener("click", event =>{
    event.preventDefault();
    console.log(event);
    $.ajax({
        method: "GET",
        url: "/api/scrape"
    }).then(data => {
        
    });
});
