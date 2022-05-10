const btnE = document.querySelector("#btn");
const inpE = document.getElementById("inpt");
const errorE = document.querySelector(".error-cont");
const contE = document.querySelector(".container");

btnE.addEventListener("click", onClick);
inpE.addEventListener("keyup", validTodo);
contE.addEventListener("click", onTodoClick);

btnE.disabled = true;

function onClick() {
  // console.log("test");
  const element = `<div name= "todo" class ="item-list">
  <span name = "delete" class="close-todo">x</span>
  ${inpE.value}
  </div>`;
  // console.log(element);
  contE.innerHTML += element;
}

function validTodo(e) {
  if (e.keyCode == 8 && e.shiftKey) {
    inpE.value = "";
  }
  // console.log(e);
  if (!inpE.value) {
    return;
  }

  if (!e.target.value.trim()) {
    error.innerText = "";
    btnE.disabled = true;
    return;
  }
  if (e.target.value.trim().length <= 3) {
    errorE.innerText = "Error, not valid";
    return;
  }
  if (e.keyCode === 13) {
    onClick();
  }
  errorE.innerText = "";
  btnE.disabled = false;
}

function onTodoClick(e) {
  [...e.target.attributes].forEach((el) => {
    if (el.value === "delete") {
      deleteTodo(e.target);
    }
    if (el.value === "todo") {
      finishTodo(e.target);
    }
  });
}

function deleteTodo(e) {
  e.closest(".item-list").remove();
}

function finishTodo(e) {
  e.classList.toggle("finish");
}
