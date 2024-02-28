fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("ERRORE NEL REPERIMENTO DATI");
    }
  })

  .then((books) => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      const book = books[index];
      createCard(card, book);
    });
  })
  .catch((error) => console.log(error));

const createCard = (card, book) => {
  card.querySelector(".card-img-top").src = book.img;
  card.querySelector(".card-title").textContent = book.title;
  card.querySelector(".card-text").textContent = book.price + "$";
  card.querySelector(".btn-primary").href = book.url;
};

const discardCard = (card) => {
  card.remove();
};

const discarButton = document.getElementsByClassName("btn-danger");

discarButton.addEventListener("click", function () {
  discardCard();
});
