let resetDisplay = false;

function appendToDisplay(value) {
  if (resetDisplay) {
    document.getElementById("display").value = "";
    resetDisplay = false;
  }
  document.getElementById("display").value += value;
}

function ekobugil() {
  document.getElementById("display").value = "";
  resetDisplay = false;
}

function deleteDisplay() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
    resetDisplay = true;
  } catch (error) {
    alert("Input tidak valid");
    clearDisplay();
  }
}

function calculateSin() {
  let display = document.getElementById("display");
  display.value = Math.sin(parseFloat(display.value));
  resetDisplay = true;
}

function calculateCos() {
  let display = document.getElementById("display");
  display.value = Math.cos(parseFloat(display.value));
  resetDisplay = true;
}

function calculateTan() {
  let display = document.getElementById("display");
  display.value = Math.tan(parseFloat(display.value));
  resetDisplay = true;
}
