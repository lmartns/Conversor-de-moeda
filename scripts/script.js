const dropList = document.querySelectorAll(".drop-list select");
(fromCurrency = document.querySelector(".from select")),
  (toCurrency = document.querySelector(".to select")),
  (getButton = document.querySelector("form button"));

for (let i = 0; i < dropList.length; i++) {
  for (currency_code in country_list) {
    let selected;
    if (i == 0) {
      selected = currency_code == "USD" ? "selected" : "";
    } else if (i == 1) {
      selected = currency_code == "BRL" ? "selected" : "";
    }
    let optionTag = `<option value="${currency_code}"${selected}>${currency_code}</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
}

window.addEventListener("load", () => {
  getExchangeRate();
});

getButton.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

function getExchangeRate() {
  const amount = document.querySelector(".amount input");
  exchangeRateTxt = document.querySelector(".exchange-rate");
  let amountVal = amount.value;
  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }

  exchangeRateTxt.innerText = "Gettting exchange rate...";
  let url = `https://v6.exchangerate-api.com/v6/c4833b1d3a9863b2a15d5310/latest/${fromCurrency.value}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      let exchangerate = result.conversion_rates[toCurrency.value];
      let totaExchangeRate = (amountVal * exchangerate).toFixed(2);
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totaExchangeRate} ${toCurrency.value}`;
    });
}
