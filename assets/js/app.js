const quoteArray = ["test", "test1", "test2", "test3", "test4", "test5", "test6", "test7"];
const quote = document.getElementById("quote");
const url = "https://api.adviceslip.com/advice";

const getQuote = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const quoteData = await response.json();
            quote.innerText = quoteData.slip.advice;
        }
    } catch (error) {
        console.log(error);
    }
}

const button = document.querySelector("button");

button.addEventListener("click", getQuote);

