const display = document.getElementById('display');

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

// Keyboard support
document.addEventListener('keydown', (event) => {
  const key = event.key;

  // Allow digits and operators
  if (
    (key >= '0' && key <= '9') ||
    key === '+' || key === '-' || key === '*' || key === '/' || key === '.' 
  ) {
    appendValue(key);
  } else if (key === 'Enter') {
    event.preventDefault(); // Prevent form submission if any
    calculate();
  } else if (key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
