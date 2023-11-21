const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const hiddenTitle = document.querySelector("#appear");

const focusContainer = document.querySelector(".today-focus");
const focusBox = document.querySelector(".today-focus__box");
const focusForm = document.querySelector(".today-focus__form");
const focusInput = document.querySelector(".today-focus__form input");
const focusTitle = document.querySelector(".today-focus h1");
const focusText = document.querySelector(".today-focus h2");
const todayTextTitle = document.querySelector(".today-focus h3");
const focusCheckLabel = document.querySelector(".today-focus__box label");
const todayBtn = document.querySelector("#today-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const VISIBLE_CLASSNAME = "visible";

function submitOnLogin(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintAppear(username);
}

function paintAppear(wroteUsername) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  hiddenTitle.innerText = `Hello, ${wroteUsername}`;
  hiddenTitle.classList.remove(HIDDEN_CLASSNAME);
  hiddenTitle.classList.add(VISIBLE_CLASSNAME);
  focusForm.classList.remove(HIDDEN_CLASSNAME);
  focusForm.classList.add(VISIBLE_CLASSNAME);
  focusTitle.classList.remove(HIDDEN_CLASSNAME);
  focusTitle.classList.add(VISIBLE_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", submitOnLogin);
} else {
  paintAppear(savedUsername);
}
const FOCUS_KEY = "focus";

function focusEvent(focus) {
  focus.preventDefault();
  const focusValue = focusInput.value;
  focusForm.classList.add(HIDDEN_CLASSNAME);
  focusTitle.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(FOCUS_KEY, focusValue);
  paintFocusText(focusValue);
}

function paintFocusText(wroteText) {
  focusForm.classList.add(HIDDEN_CLASSNAME);
  focusTitle.classList.add(HIDDEN_CLASSNAME);

  todayTextTitle.classList.remove(HIDDEN_CLASSNAME);
  todayTextTitle.classList.add(VISIBLE_CLASSNAME);

  focusBox.classList.remove(HIDDEN_CLASSNAME);
  focusBox.classList.add(VISIBLE_CLASSNAME);

  focusText.classList.remove(HIDDEN_CLASSNAME);
  focusText.classList.add(VISIBLE_CLASSNAME);

  todayBtn.classList.remove(HIDDEN_CLASSNAME);
  todayBtn.classList.add(VISIBLE_CLASSNAME);

  focusCheckLabel.classList.remove(HIDDEN_CLASSNAME);
  focusCheckLabel.classList.add(VISIBLE_CLASSNAME);
  focusText.innerText = wroteText;
}

const checkedKey = "checkBox";

function clickedTodayBtn(click) {
  todayTextTitle.classList.add(HIDDEN_CLASSNAME);
  todayTextTitle.classList.remove(VISIBLE_CLASSNAME);
  focusBox.classList.add(HIDDEN_CLASSNAME);
  focusBox.classList.remove(VISIBLE_CLASSNAME);
  focusText.innerHTML = "";
  localStorage.removeItem(FOCUS_KEY);

  focusTitle.classList.remove(HIDDEN_CLASSNAME);
  focusTitle.classList.add(VISIBLE_CLASSNAME);
  focusForm.classList.remove(HIDDEN_CLASSNAME);
  focusForm.classList.add(VISIBLE_CLASSNAME);

  localStorage.removeItem(checkedKey);
}
todayBtn.addEventListener("click", clickedTodayBtn);

function midnightDelete() {
  console.log("Executing midnightDelete");
  localStorage.removeItem(FOCUS_KEY);
}

function getCurrentTime() {
  const now = new Date();
  return now.getHours() * 60 + now.getMinutes();
}

function registerMidnightDelete() {
  const midnight = 60 * 24;
  const remainingMinutes = midnight - getCurrentTime();
  console.log(`Registering midnightDelete in ${remainingMinutes} minutes`);

  setTimeout(() => {
    midnightDelete();
  }, remainingMinutes * 60 * 1000);
}

focusForm.addEventListener("submit", focusEvent);

const savedFocus = localStorage.getItem(FOCUS_KEY);
if (savedFocus !== null) {
  paintFocusText(savedFocus);
}

registerMidnightDelete();
