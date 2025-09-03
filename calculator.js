const display = document.getElementById("display");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value.replace('%', '/100'));
  } catch {
    display.value = "Error";
  }
}

// Bonus: Keyboard support
document.addEventListener("keydown", function (e) {
  if ((e.key >= 0 && e.key <= 9) || "+-*/.%".includes(e.key)) {
    append(e.key);
  } else if (e.key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (e.key === "Backspace") {
    backspace();
  } else if (e.key === "Escape") {
    clearDisplay();
  }
});