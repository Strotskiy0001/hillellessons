const textE = document.getElementById("text");
const btnE = document.querySelector("#btn");
const ulContainerE = document.getElementById("list");
const inptTextE = document.getElementById("inpt");

btnE.addEventListener("click", onClick);

function onClick() {
  const liE = document.createElement("li");
  liE.textContent = inptTextE.value;
  ulContainerE.append(liE);
  inptTextE.value = "";
}
