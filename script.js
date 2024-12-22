const selectElement = document.getElementById('select');

selectElement.addEventListener('change', (event) => {
  const selectedOption = selectElement.options[selectElement.selectedIndex];
  const color = selectedOption.style.color;

  selectElement.style.color = color;
});
