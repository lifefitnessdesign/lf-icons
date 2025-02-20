document.getElementById('search').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const weight = document.getElementById('weight').value;
  fetchIcons(query, weight);
});

document.getElementById('weight').addEventListener('change', function() {
  const query = document.getElementById('search').value.toLowerCase();
  const weight = this.value;
  fetchIcons(query, weight);
});

function fetchIcons(query, weight) {
  fetch('icons.json')
    .then(response => response.json())
    .then(icons => {
      const filteredIcons = icons.filter(icon => icon.name.includes(query) && icon.weight === weight);
      displayIcons(filteredIcons);
    });
}

function displayIcons(icons) {
  const container = document.getElementById('icon-container');
  container.innerHTML = '';
  icons.forEach(icon => {
    const img = document.createElement('img');
    img.src = icon.url;
    img.classList.add('icon');
    img.addEventListener('dragstart', (event) => {
      event.dataTransfer.setData('text/plain', icon.url);
    });
    container.appendChild(img);
  });
}