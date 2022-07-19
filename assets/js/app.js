const url = "https://api.adviceslip.com/advice";

const quote = document.getElementById("quote");
const button = document.querySelector("button");

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

button.addEventListener("click", getQuote);