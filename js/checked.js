document.addEventListener("DOMContentLoaded", function () {
  const todayCheck = document.querySelector("#focus-check");
  const todayText = document.querySelector(".today-focus__text");

  const CHECKED_KEY = "checkBox";

  function checkedLine() {
    const checkedTrue = todayCheck.checked;
    localStorage.setItem(CHECKED_KEY, checkedTrue.toString());
    todayText.style.textDecoration = checkedTrue ? "line-through" : "none";
  }

  todayCheck.addEventListener("change", checkedLine);

  const savedCheck = localStorage.getItem(CHECKED_KEY);

  if (savedCheck === "true") {
    todayCheck.checked = true;
    checkedLine();
  }
});
