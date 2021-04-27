var projects = document.querySelectorAll("#project-list>div")

var square1 = []
var square2 = []
var canScroll = true
var timeout;
var nbProjets = projects.length
var unitHeight = window.innerHeight

projects.forEach(element => {
  square1.push(document.querySelector("#"+element.id +" .square1"))
  square2.push(document.querySelector("#"+element.id +" .square2"))
});
function resetBackground(){
  square1.forEach(element =>{
    element.style.height="0%"
    element.style.boxShadow= 'none'
  })
  square2.forEach(element =>{
    element.style.height="0%"
    element.style.boxShadow= 'none'
  })
}
function Scroll(){
  resetBackground()
  var displayedproject = Math.floor((window.scrollY + unitHeight/2)/unitHeight)
  var sectionprojectIndex = displayedproject - 1;
  window.scroll({
        top: (unitHeight * displayedproject),
        behavior: 'smooth'
      });
  square1[sectionprojectIndex].style.height="100%"
  square1[sectionprojectIndex].style.boxShadow= '0px 0px 20px 5px rgba(0, 0, 0, 0.25)'
  square2[sectionprojectIndex].style.height="80%"
  square2[sectionprojectIndex].style.boxShadow= '0px 0px 20px 5px rgba(0, 0, 0, 0.25)'
}

function verifScroll(){
  if(window.scrollY + unitHeight/2 > unitHeight && window.scrollY < unitHeight*nbProjets+unitHeight){
    Scroll()  
  }
  }

window.addEventListener('scroll', function() {
  clearTimeout(timeout);
  timeout = setTimeout(function(){verifScroll()},700)
}
);
window.addEventListener('resize', function(){
  unitHeight = window.innerHeight
  verifScroll()
});