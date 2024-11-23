<<<<<<< HEAD
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 5,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      dots: true
    });
  });


  const filterButtons = document.querySelectorAll('.filter_btn');
  const projectBoxes = document.querySelectorAll('.project_box');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');
  
      // Loop through all project boxes and filter
      projectBoxes.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
  
        if (filterValue === 'all') {
          project.style.display = 'block'; // Show all projects
        } else {
          // Check if the project belongs to the selected category
          if (projectCategory.includes(filterValue)) {
            project.style.display = 'block'; // Show the project
          } else {
            project.style.display = 'none'; // Hide the project
          }
        }
      });
    });
=======
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      items: 5,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      nav: true,
      dots: true
    });
  });


  const filterButtons = document.querySelectorAll('.filter_btn');
  const projectBoxes = document.querySelectorAll('.project_box');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.getAttribute('data-filter');
  
      // Loop through all project boxes and filter
      projectBoxes.forEach(project => {
        const projectCategory = project.getAttribute('data-category');
  
        if (filterValue === 'all') {
          project.style.display = 'block'; // Show all projects
        } else {
          // Check if the project belongs to the selected category
          if (projectCategory.includes(filterValue)) {
            project.style.display = 'block'; // Show the project
          } else {
            project.style.display = 'none'; // Hide the project
          }
        }
      });
    });
>>>>>>> d521cb085612704b30e34840d1dc588c244c55f9
  });