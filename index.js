const select1 = document.getElementById("selectContainer-selectCurrency1");
const select2 = document.getElementById("selectContainer-selectCurrency2");
const input = document.getElementById("selectContainer-inputText");
const btnConv = document.getElementById("convertBtn");

let countries, currency;

const errorDisplay = (valid) => {
  const span = document.getElementById("errorSpan");

  if (!valid) {
    span.classList.remove("error");
  } else {
    span.classList.add("error");
  }
};

function inputCheck() {
  console.log(countries.chf);
}

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

const convert = () => {
  a = select1.value;
  b = select2.value;

  if (select1.value === "" || select2.value === "") {
    console.log("test1");
  } else if (select1.value === select2.value) {
    console.log("test2");
  } else {
    console.log("test3");
  }
  console.log(typeof countries);
  val = { countries: a };
  countries.val;
  console.log(a);
  console.log(val);
  console.log(countries + "." + val);
  console.log(val.name);
};
btnConv.addEventListener("click", () => {
  convert();
});
