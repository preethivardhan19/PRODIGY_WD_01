<script>
window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = '#FF0000'; // Change background color on scroll to red
  } else {
    navbar.style.backgroundColor = '#333';
  }
});

</script>