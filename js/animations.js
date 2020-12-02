let svgCont = document.getElementById('svgCont');
let txt = document.getElementById('txt');
let svg = document.getElementById('svg');
let circle = document.getElementById('circle');
let smCircle = document.getElementById('smcircle');
let bgCircle = document.getElementById('bgcircle');
let circles = document.getElementById('circles')
let button = document.getElementById('button');
gsap.registerPlugin(DrawSVGPlugin);


let Timeline ={
    init: function(){

        Timeline.frame1();
    },
    frame1: function(){
        gsap.to(circle, {duration: 8, rotation: 360, transformOrigin: "50% 50%", repeat: -1, ease:Linear.easeNone});
        gsap.to(smCircle, {duration: 4, rotation: -360, transformOrigin: "50% 50%", repeat: -1, ease:Linear.easeNone});
        gsap.to(bgCircle, {duration: 12, rotation: 360, transformOrigin: "50% 50%", repeat: -1, ease:Linear.easeNone});
        gsap.to(circle, {duration: 2, drawSVG: 0, yoyo: true, repeat: -1, ease:Linear.easeNone})
        gsap.to(smCircle, {duration: 1, drawSVG: 0, yoyo: true, repeat: -1, ease:Linear.easeNone})
        gsap.to(bgCircle, {duration: 4, drawSVG: 0, yoyo: true, repeat: -1, ease:Linear.easeNone})
        Timeline.hover();
        Timeline.enter();
    },
    hover: function(){
        
        circles.addEventListener("mouseenter", function(){
            gsap.to(circle,{ duration: .8,  css:{stroke: "white",transformOrigin: "center", transform: "scale(1.1)"}})
            gsap.to(bgCircle,{ duration: .8,  css:{stroke: "white",transformOrigin: "center", transform: "scale(1.1)"}})
            gsap.to(smCircle,{ duration: .8,  css:{stroke: "white",transformOrigin: "center", transform: "scale(1.1)"}})
            gsap.to( txt, {duration: .8, css:{ color: "white"}});
        })

        circles.addEventListener("mouseleave", function(){
            gsap.to(circle,{ duration: .8, stroke: "#08748C",css:{transformOrigin: "center", stroke: "#08748C", transform: "scale(1)"}})
            gsap.to(smCircle,{ duration: .8, stroke: "##D9580D",css:{transformOrigin: "center", stroke: "#D9580D", transform: "scale(1)"}})
            gsap.to(bgCircle,{ duration: .8, stroke: "#D9580D",css:{transformOrigin: "center", stroke: "#D9580D", transform: "scale(1)"}})
            gsap.to( txt, {duration: .8, css:{ color: "#D9A25F"}});
        })
    },
    enter: function(){
        circles.addEventListener("click", function(){
            gsap.to(circle, {duration: 1, drawSVG: 0, rotation: 0, delay: .5})
            gsap.to(bgCircle, {duration: 1, drawSVG: 0, rotation: 0, delay: .5})
            gsap.to(smCircle, {duration: 1, drawSVG: 0, rotation: 0, delay: .5})
            gsap.to([smCircle, bgCircle, circle], {duration: .5, delay: 1, opacity: 0})
            gsap.to(txt, {duration: .8, ease: "power3.inOut", opacity: 0})
        })
    }

}

Timeline.init();