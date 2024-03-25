const fetchQuote = async () => {
  try {
    const response = await fetch("https://apl.quotable.io/quotes/random");
    const data = await response.json();
    console.log(data);
    return 0;
  } catch (eror) {
    console.log(eror);
  }
};
fetchQuote().then((data) => {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `<div class="card">
    <p class="author">Dhammapada</p>
    <p class="content">
    </p>
  </div>`;
});

//imate div sa id content2. U njega treba se prikaze sve citate
//koje dobijate sa apija:https://apl.quotable.io/quotes/random
