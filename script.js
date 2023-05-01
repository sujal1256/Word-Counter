const inputField = document.getElementById('text');
const wordCount = document.getElementById('words');

inputField.addEventListener('input', () => {
  const inputText = inputField.value.trim();
  const count = inputText ? inputText.split(/\s+/).length : 0;
  wordCount.textContent = count;
});