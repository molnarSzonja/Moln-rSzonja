let scrollContainer = document.querySelector('.gallery');

function autoScroll() {
  scrollContainer.scrollLeft += 1;
  if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
    scrollContainer.scrollLeft = 0; 
  }
}


let autoScrollInterval = setInterval(autoScroll, 20); 
