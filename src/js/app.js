import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  function changeTitle(){
document.querySelector("title").innerText = "One new message"
  }
  setTimeout(changeTitle,3000);
  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
