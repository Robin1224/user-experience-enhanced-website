// Prijzen omzetten naar juiste formaat
const numberWithPeriods = (value) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

prices = document.querySelectorAll(".price");

prices.forEach((price) => {
  const priceValue = price.innerHTML.toString().replace("€", "");
  price.innerHTML = `€${numberWithPeriods(priceValue)}`;
});

// Clientside POST ratings
document.querySelectorAll(".rating-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    const id = form.dataset.id;
    const rating = form.querySelector("input[name=rating]:checked").value;

    console.log(id, rating);

    fetch(`/rate/${id}/${rating}`, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    event.preventDefault();
  });
});

// document.querySelectorAll(".rating-radio").forEach((radio) => {
//   radio.addEventListener("change", (event) => {
//     if (event.target.checked) {
//       form.submit();
//     }
//   });
// });

// document.querySelectorAll(".rating-form button").forEach((button) => {
//   button.classList.add("hidden")
// });