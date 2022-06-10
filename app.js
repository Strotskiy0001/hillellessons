const contact = new Contact(
  document.querySelector(".list"),
  document.querySelector(".edit-container")
);
const nameE = document.querySelector(".firstname");
const lastE = document.querySelector(".lastname");
const numberE = document.querySelector(".number");
document
  .querySelector(".create")
  .addEventListener("click", () =>
    contact.createContact(nameE.value, lastE.value, numberE.value)
  );
