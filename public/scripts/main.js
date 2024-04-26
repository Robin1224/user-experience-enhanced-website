import { query } from "express";

const numberWithPeriods = (value) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

prices = document.querySelectorAll(".price");

prices.forEach((price) => {
  const priceValue = price.innerHTML.toString().replace("€", "");
  price.innerHTML = `€${numberWithPeriods(priceValue)}`;
});

// Clientside POST

document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll(".rating-form");

  forms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      const id = form.dataset.id;
      const rating = form.querySelector("input[name=rating]:checked").value;

console.log

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
});