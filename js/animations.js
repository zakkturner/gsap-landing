let svgCont = document.getElementById('svgCont');
let txt = document.getElementById('txt');
let svg = document.getElementById('svg');
let circle = document.getElementById('circle');
let button = document.getElementById('button');
gsap.registerPlugin(DrawSVGPlugin);


let Timeline ={
    init: function(){

        Timeline.frame1();
    },
    frame1: function(){
        gsap.to(svgCont, {duration: 8, rotation: 360, repeat: -1, ease:Linear.easeNone})
        Timeline.hover();
        Timeline.enter();
    },
    hover: function(){
        
        button.addEventListener("mouseenter", function(){
            gsap.to(circle,{ duration: .8,  css:{stroke: "white",transformOrigin: "center", transform: "scale(1.1)"}})
            gsap.to( txt, {duration: .8, css:{ color: "white"}});
        })

        button.addEventListener("mouseleave", function(){
            gsap.to(circle,{ duration: .8, stroke: "teal",css:{transformOrigin: "center", stroke: "teal", transform: "scale(1)"}})
            gsap.to( txt, {duration: .8, css:{ color: "teal"}});
        })
    },
    enter: function(){
        button.addEventListener("click", function(){
            gsap.to(circle, {duration: 1, drawSVG: 0, delay: .5})
            gsap.to(txt, {duration: .8, ease: "power3.inOut", opacity: 0})
        })
    }

}

Timeline.init();