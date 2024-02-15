var inp = document.getElementById("demo");
var btn = document.getElementById("btn");
var aut = document.getElementById("auth");

btn.addEventListener("click",generateQuote);

function generateQuote() {
   
    fetch("https://type.fit/api/quotes").then(res => res.json()).then(result => {
        const randomIndex = Math.floor(Math.random() * result.length);
        const randomQuote = result[randomIndex].text;
        var author = result[randomIndex].author.split(',')[0];
        if(author === "type.fit"){
            author = "Dale Carnegie";
        }
        inp.innerHTML = randomQuote;
        auth.innerHTML = "- "+author;
    })

}

