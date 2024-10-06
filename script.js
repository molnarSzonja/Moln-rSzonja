let scrollContainer = document.querySelector('.gallery');

function autoScroll() {
  scrollContainer.scrollLeft += 1;
  if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
    scrollContainer.scrollLeft = 0; 
  }
}

let autoScrollInterval = setInterval(autoScroll, 20); 



let quotes = [];

function fetchQuotes() {
  fetch('http://localhost:3000/api/quotes')
    .then(response => response.json())
    .then(data => {
      console.log('Kapott idézetek:', data);
      quotes = data;
      displayRandomQuote();
      setInterval(displayRandomQuote, 1000); 
    })
    .catch(error => console.error('Hiba az idézetek lekérésekor:', error));
}

function displayRandomQuote() {
  const quoteDisplay = document.getElementById('quote-display');
  if (quotes.length > 0) {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteDisplay.innerHTML = `
        <p>${randomQuote.text}</p>
        <span>${randomQuote.author}</span>
    `;
  } else {
    console.log('Nincs elérhető idézet');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  fetchQuotes();
});
