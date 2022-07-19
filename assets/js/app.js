const quoteArray = ["test", "test1", "test2", "test3", "test4", "test5", "test6", "test7"];
const quote = document.getElementById("quote");

const newQuote = () => {
    const randomNum = Math.floor(Math.random() * quoteArray.length);

    quote.innerText = quoteArray[randomNum];
}



const button = document.querySelector("button");

button.addEventListener("click", newQuote);

