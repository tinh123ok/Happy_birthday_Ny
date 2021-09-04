// JS for content editable trick from Chris Coyier

var h1 = document.querySelector("h1");
h1.addEventListener("input", function() {
  this.setAttribute("data-heading", this.innerText);
});

function cainit(){
  alert("Có Cái Nịc nè")

}

$(".carousel").owlCarousel({
  margin: 10,
  loop: true,
  autoplayHoverpause: true,
  responsive: {
      0: {
          items: 1,
          nav: false
      },
      1000: {
          items: 2,
          nav: false,
      }
  }
});
