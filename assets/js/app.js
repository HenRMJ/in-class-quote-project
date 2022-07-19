const quoteArray = ["test", "test1", "test2", "test3", "test4", "test5", "test6", "test7"];
const quote = document.getElementById("quote");
const url = "https://api.adviceslip.com/advice";

var hi;

const getQuote = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const quoteData = await response.json();
            hi = quoteData.slip.advice;
        }
    } catch (error) {
        console.log(error);
    }
}

const newQuote = () => {
    getQuote();
    quote.innerText = hi;
}

const button = document.querySelector("button");

button.addEventListener("click", newQuote);

