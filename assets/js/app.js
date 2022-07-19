const quoteArray = ["test", "test1", "test2", "test3", "test4", "test5", "test6", "test7"];
const quote = document.getElementById("quote");
const url = "https://api.adviceslip.com/advice";

const getQuote = async () => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const quoteData = await response.json();
            console.log(response);
            console.log(quoteData);
            return quoteData.advice.toString();
        }
    } catch (error) {
        console.log(error);
    }
}


const newQuote = () => {
    const randomNum = Math.floor(Math.random() * quoteArray.length);

    quote.innerText = getQuote();
}



const button = document.querySelector("button");

button.addEventListener("click", newQuote);

