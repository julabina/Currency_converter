const select1 = document.getElementById("selectContainer-selectCurrency1");
const select2 = document.getElementById("selectContainer-selectCurrency2");
const inputText = document.getElementById("selectContainer-inputText");
const btnConv = document.getElementById("convertBtn");
const btnSwitch = document.querySelector(".switchContainer");
const resultContainer = document.querySelector(".resultContainer");

let countries, currency;
inputChecked = false;

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    countries = data;
  });

fetch("convert.json")
  .then((res) => res.json())
  .then((data) => {
    currency = data;
  });

const errorDisplay = (message, valid) => {
  const span = document.getElementById("errorSpan");

  if (!valid) {
    span.classList.remove("error");
    span.textContent = message;
  } else {
    span.classList.add("error");
    span.textContent = message;
  }
};

function inputCheck() {
  inputChecked = false;
  if (inputText.value === "") {
    errorDisplay("Cannot be empty");
  } else if (!inputText.value.match(/^[0-9,\.]*$/i)) {
    errorDisplay("Only numbers are needed");
  } else {
    errorDisplay("", true);
    inputChecked = true;
  }
}

const convert = () => {
  a = select1.value;
  b = select2.value;
  inputCheck();
  if (inputChecked === true) {
    if (a === "" || b === "") {
      errorDisplay("select two currencys");
    } else if (a === b) {
      errorDisplay("currencys cannot be the same");
    } else {
      errorDisplay("", true);
      val = currency[a];
      result = inputText.value * val[b].value;
      displayConvert();
    }
  }
};

const switchSelected = () => {
  console.log("test");
};

const displayConvert = () => {
  a = select1.value;
  b = select2.value;

  valSelect1 = countries[a];
  valSelect2 = countries[b];
  valSelect3 = currency[a];
  valSelect4 = currency[b];

  resultContainer.innerHTML = `
  <p>${inputText.value} ${valSelect1.name} = ${
    Math.round(result * 100) / 100
  } ${valSelect2.name}</p>
  <p>1 ${valSelect1.symbol} = ${valSelect3[b].value} ${valSelect2.symbol}</p>
  <p>1 ${valSelect2.symbol} = ${valSelect4[a].value} ${valSelect1.symbol}</p>
  `;
};

btnConv.addEventListener("click", () => {
  convert();
});

btnSwitch.addEventListener("click", () => {
  switchSelected();
});
