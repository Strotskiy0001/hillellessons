const nameE = document.getElementById("first-name");
const lastE = document.getElementById("second-name");
const phoneE = document.getElementById("phone");
const containerE = document.querySelector(".container");
const template = document.getElementById("template").innerHTML;
const btnE = document.getElementById("btn");

btnE.addEventListener("click", onAddTodo);

function onAddTodo() {
  const name = nameE.value;
  const last = lastE.value;
  const phone = phoneE.value;
  if (!isDataValid(name, last, phone)) {
    alert("Error, please try again");
    clearData();
    return;
  }
  const el = createContactElement(name, last, phone, template);
  renderElement(containerE, el);
  clearData();
}

function isDataValid(name, last, phone) {
  if (!name.trim() || !last.trim() || !phone.trim() || isNaN(+phone)) {
    return false;
  }
  return true;
}

function clearData() {
  nameE.value = "";
  lastE.value = "";
  phoneE.value = "";
}

function createContactElement(name, last, phone, template) {
  return template
    .replace("{{name}}", name)
    .replace("{{last}}", last)
    .replace("{{phone}}", phone);
}

function renderElement(container, element) {
  container.innerHTML += element;
}
