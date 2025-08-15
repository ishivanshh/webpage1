
function circleMouseFollower(){
    window.addEventListener("mousemove", function(dets){
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
    })
}

circleMouseFollower();

function firstPage(){
    let t1 = gsap.timeline();
    t1.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: "expo.easeInOut"
    })
    .from(".boundingelem", {
        y: -10,
        opacity: 0,
        duration: 1,
        ease: "expo.easeInOut"
    });
    
}

window.addEventListener("DOMContentLoaded", firstPage);
