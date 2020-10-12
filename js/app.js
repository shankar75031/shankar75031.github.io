let toggle = document.querySelector('.toggle-theme');

toggle.addEventListener('click', function(e) {
  e.preventDefault();

  if (document.body.classList.contains('dark')) {
    // Turning the theme off:
    document.body.classList.remove('dark');
    // Reverse logic on the button text, so that users can turn
    // the theme back on:
    toggle.innerText = 'Turn on Dark Mode';
  } else {
    document.body.classList.add('dark');
    toggle.innerText = 'Turn off Dark Mode';
  }
});