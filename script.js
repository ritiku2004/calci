let display = document.getElementById('display');

function ToDisplay(value) {
  display.value += value;
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '';
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
  
    if (key >= '0' && key <= '9') {
      ToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      ToDisplay(key);
    } else if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      clearDisplay();
    }
  });