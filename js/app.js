// let toggle = document.querySelector('.toggle-theme');

// toggle.addEventListener('click', function(e) {
//   e.preventDefault();

//   if (document.body.classList.contains('dark')) {
//     // Turning the theme off:
//     document.body.classList.remove('dark');
//     // Reverse logic on the button text, so that users can turn
//     // the theme back on:
//     toggle.innerText = 'Turn on Dark Mode';
//   } else {
//     document.body.classList.add('dark');
//     toggle.innerText = 'Turn off Dark Mode';
//   }
// });

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNavigationMenu() {
  var x = document.getElementById("nav-menu");
  console.log("fun called")
  if (x.className === "nav-menu") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu";
  }
}