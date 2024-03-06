//fetching data & quary params

fetch("https://api.quotable.io/quotes/random")
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data[0].author, data[0].content);
  });

//uradite  sve sto u prethodnom zadatku ali koristeci async await,
//takodje koristite try catch

const fetchQuote = async () => {
  try {
    const result = await fetch("https://api.quotable.io/quotes/random");
    const data = await result.json();
  } catch (error) {
    console.log(error);
  }
};

fetchQuote();

const fetchQuotes = async () => {
  try {
    const result = await fetch("https://api.quotable.io/quotes/random");
    const data = await result.json();
  } catch (error) {
    console.log(error);
  }
};

fetchQuotes();

 const getLongestQuote = (data)=> {
    let longestQuote
    data.results.forEach((element)=> {
        if(longestQuote) {
            longestQuote = 
        }
    }
    )

 }
