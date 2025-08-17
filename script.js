document.querySelectorAll("#footer .project-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    const repoUrl = "https://github.com/ishivanshh?tab=stars"
    window.open(repoUrl, "_blank"); // Open in a new tab
  });
});

// CONTACT NOW BUTTON => LINKEDIN. 
document.querySelectorAll(".contactNow").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    const contactUrl = "https://www.linkedin.com/in/saxenashivansh/"
    window.open(contactUrl, "_blank"); // Open in a new tab
  });
});
// Open the skill card when "Skills" section is clicked
document.querySelectorAll(".elem").forEach(elem => {
  if (elem.innerText.toLowerCase().includes("skills")) {
    elem.addEventListener("click", (e) => {
      e.stopPropagation(); // stop click from bubbling up
      document.getElementById("skillCard").classList.add("active");
    });
  }
});

// Close card when clicking outside it
document.addEventListener("click", (e) => {
  const card = document.getElementById("skillCard");
  if (card.classList.contains("active") && !card.contains(e.target)) {
    card.classList.remove("active");
  }
});
//CONTACT LINK HANDLER
document.querySelectorAll(".contact-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    const url = link.dataset.url;
    window.open(url, "_blank"); // Open in a new tab
  });
});

// github profile link
document.querySelectorAll(".githubprofile").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    const githubUrl = "https://github.com/ishivanshh"
    window.open(githubUrl, "_blank"); // Open in a new tab
  });
});

function firstPage(){
    let t1 = gsap.timeline();
    t1.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "expo.easeInOut"
    })
    .from(".boundingelem", {
        y: 10,
        opacity: 0,
        duration: 1,
        stagger: .2
    })
    .from("#footer", {
        y: -10,
        opacity: 0,
        duration: 1,
        ease: "expo.easeInOut"
    });   
}

window.addEventListener("DOMContentLoaded", firstPage);

function CircleSize(){
    // default scale value
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove",function(dets){

        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollower(xscale , yscale)
    });
}
CircleSize();


function circleMouseFollower(xscale , yscale){
    window.addEventListener("mousemove", function(dets){
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleMouseFollower();

document.querySelectorAll(".elem").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});