const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } 
    /*else {
      entry.target.classList.remove('show'); // remove this for once animation
    }*/
  })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));