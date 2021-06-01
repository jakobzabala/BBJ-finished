
gsap.registerPlugin(MorphSVGPlugin,DrawSVGPlugin,Physics2DPlugin);

//gsap.set(".index-page", {display: "block"});



//////////////////////  TOP-LOGO-IN  ///////////////////////////////////


const tlll = gsap.timeline({ delay:1, defaults: { ease: "none" } });
let timelineLOGO = tlll.from(".afex", {ease: 'expo.out',
    duration:1.25,
    scale: 0,
    transformOrigin: "center center",
    stagger: {
      each: 0.05,
      from: "random"
    }
  })

//////////////////////  LOG-ON-STUFF ///////////////////////////////////

const hoverLOG_ON = document.querySelector('.afexlogo');
      hoverLOG_ON.addEventListener("click", () => {
        tlLABL.play();
        tlLABLC.play();
        tlShapeSpin.play();

          });


//////////////////////  LETTER-ANIMATION ///////////////////////////////////

const b1 = document.querySelector(".b1-afexlogo");
b1.addEventListener("mouseenter", () => {
  const  tlL1 = gsap.timeline()
tlL1.to("#b1-afex", { duration: 1,
    morphSVG: {
    shape: "#b12-afex",
    ease: Power4.easeOut
    }
   })
.to("#b1-afex", { duration: 2.5,
    morphSVG: {
    shape: "#b1-afex",
    ease: Power4.easeOut
    }
   })
});

const b2 = document.querySelector(".b2-afexlogo");
b2.addEventListener("mouseenter", () => {
  const  tlL2 = gsap.timeline()
tlL2.to("#b2-afex", { duration: 1,
    morphSVG: {
    shape: "#b22-afex",
    ease: Power4.easeOut
    }
   })
.to("#b2-afex", { duration: 2.5,
    morphSVG: {
    shape: "#b2-afex",
    ease: Power4.easeOut
    }
   })
});


const e1 = document.querySelector(".e1-afexlogo");
e1.addEventListener("mouseenter", () => {
const  tl1 = gsap.timeline()
tl1.to("#e1-afex", { duration: 1,
    morphSVG: {
    shape: "#e2-afex",
    type: "rotational",
    ease: Power4.easeOut
    }
   })
.to("#e1-afex", { duration: 2.5,
    morphSVG: {
    shape: "#e1-afex",
    type: "rotational",
    ease: Power4.easeOut
    }
   })
});

const e2 = document.querySelector(".e2-afexlogo");
e2.addEventListener("mouseenter", () => {
  const  tl2 = gsap.timeline()
tl2.to("#e3-afex", { duration: 1,
    morphSVG: {
    shape: "#e4-afex",
    origin: "49% 17%",
    type: "rotational",
    ease: Power4.easeOut
    }
   })
.to("#e3-afex", { duration: 2.5,
    morphSVG: {
    shape: "#e3-afex",
    origin: "49% 17%",
    type: "rotational",
    ease: Power4.easeOut
    }
   })
});

const d1 = document.querySelector(".d1-afexlogo");
d1.addEventListener("mouseenter", () => {
  const  tl3 = gsap.timeline()
tl3.to("#d1-afex", { duration: 1,
    morphSVG: {
    shape: "#d2-afex",
    origin: "121% 64%",
    type: "rotational",
    ease: Power4.easeOut
    }
   })
.to("#d1-afex", { duration: 2.5,
    morphSVG: {
    shape: "#d1-afex",
    origin: "121% 64%",
    type: "rotational",
    ease: Power4.easeOut
    }
   })
});

const y1 = document.querySelector(".y1-afexlogo");
y1.addEventListener("mouseenter", () => {
  const  tl4 = gsap.timeline()
tl4.to("#y1-afex", { duration: 1,
    x:"1850px",
    morphSVG: {
    shape: "#y2-afex",
    origin: "50% 1%",
    ease: Power4.easeOut
    }
   })
.to("#y1-afex", { duration: 2.5,
    x:"1800px",
    morphSVG: {
    shape: "#y1-afex",
    origin: "50% 1%",
    ease: Power4.easeOut
    }
   })
});

const a1 = document.querySelector(".a1-afexlogo");
a1.addEventListener("mouseenter", () => {
  const  tl5 = gsap.timeline()
tl5.to("#a1-afex", { duration: 1,
    morphSVG: {
    shape: "#a2-afex",
    origin: "75% 26%",
    type: "rotational",
    ease: Power4.easeOut
    }
   })
.to("#a1-afex", { duration: 2.5,
    morphSVG: {
    shape: "#a1-afex",
    origin: "75% 26%",
    type: "rotational",
    ease: Power4.easeOut
    }
   })
});

const j1 = document.getElementById('j1-afex');
j1.addEventListener("mouseenter", () => {
  const  tl6 = gsap.timeline()
tl6.to("#j1-afex", { duration: 1,
  x:"850px",
    morphSVG: {
    shape: "#j2-afex",
    origin: "51% 13%",
    type: "rotational",
    ease: Power4.easeOut
    }
   })
.to("#j1-afex", { duration: 2.5,
  x:1000,
    morphSVG: {
    shape: "#j1-afex",
    origin: "51% 13%",
    type: "rotational",
    ease: Power4.easeOut
  }
   })
});


//////////////////////  PHYSICS ///////////////////////////////////
let dots = [],
	bg = document.querySelector("#featureBackground"), i, dot;


  // grabs a certain number of dots from the dots Array,
  //but only if they're not active (animating). If it can't
  //find any, it'll create some new ones and shove them into the
  //dots Array. It's like a pooling system that reuses elements
  //when they're not in use (better performance)
function activateDots(quantity) {
  let result = [],
      dot, i;
  for (i = 0; result.length < quantity; i++) {
    dot = dots[i];
    if (!dot || dot.isActive) {
      dot = document.createElement("div");
      dot.setAttribute("class", "dot");
      bg.appendChild(dot);
      dots.push(dot);
    }
    dot.isActive = true;
    result.push(dot);
  }

gsap.set(result, {
  backgroundColor: "random([#F56D24,#F56D34,#F56E34,#F66D34,#F56D54])",
  scale: "random(0.2, 1)",
  x:315,
  y:330
});
return result;
}

function animate() {
  const newDots = activateDots(4);
  gsap.to(newDots, {
  //  backgroundColor:"white",
    backgroundColor: "random([#f2a538,#f2b138,#e6a122,#f54d05,#f5b905])",
    duration: 7, scale:2.5,
    physics2D: {
      velocity: "random(700, 850)",
      angle: "random(230, 340)",
      gravity: 550
    },
    onComplete() {
      // deactivate the dots now that we're done with them, so they can be reused.
      newDots.forEach(el => el.isActive = false);
    }
  });
}
const bbbhover = document.querySelector('.clikPHY');
bbbhover.addEventListener("click", () => {

    animate()


  });
//////////////////////  SPINNING-AFEX ///////////////////////////////////


gsap.to(".shape1", 60, { type:"rotational", ease:"none", rotation:"1600",repeat: -1, yoyo: true });

const  tlShapeSpin = gsap.timeline({paused:'true', delay:1.5,  ease: "power4.InOut", repeat: -1, yoyo: true})
tlShapeSpin.from(afex1, { duration: 2.5,
 morphSVG: "#smallcircle",
   x:213, y:213,
   opacity:.1,
}, "+=1")
.to(afex1, { duration: 2.5,
 morphSVG: "#afex2",
  scale: 1,
  opacity:1,
  x:0, y:0
}, "+=2")

.to(afex1, { duration: 2.5,
  morphSVG: "#afex4",
   opacity:1,
   x:0, y:0
 }, "+=2")

.to(afex1, { duration: 2.5,
  morphSVG: "#afex2",
   opacity:1,
   x:0, y:0
 }, "+=2")

.to(afex1, { duration: 2.5,
  morphSVG: "#afex6",
   scale:0.8,
   opacity:1,
   x:0, y:0
 }, "+=2")

.to(afex1, { duration: 2.5,
 morphSVG: "#afex8",
  opacity:1,
  x:0, y:0
}, "+=2")

.to(afex1, { duration: 2.5,
  morphSVG: "#afex7",
   opacity:1,
   x:0, y:0
 }, "+=2")

.to(afex1, { duration: 2.5,
 morphSVG: "#afex2",
  scale: 1,
  opacity:1,
  x:0, y:0
}, "+=2")

.to(afex1, { duration: 2.5,
  morphSVG: "#afex8",
   opacity:1,
   x:0, y:0
 }, "+=2")

.to(afex1, { duration: 2.5,
  morphSVG: "#afex3",
   opacity:1,
   x:0, y:0
 }, "+=2")
 .to(afex1, { duration: 2.5,
   morphSVG: "#smallcircle",
    x:213, y:213,
     opacity:.1,
  }, "+=2")





 ////// NAVIGATION-ADJUSTMENT/////////
 gsap.set("#linepathC", { y: 65, x: 0 });
 gsap.set("#linepath2C", { y: 65, x: 0 });
 gsap.set(".glowboxxC", { y: 0, x:378 });
 gsap.set(".bottomm", { y: 0, x:72 });




   ///////////////////////////// PROJECTS ////////////////////////////////////////

 gsap.set("#lhov1", {opacity: "0%"});
gsap.set("#lhov2", {opacity: "0%"});

 const tlLABL = gsap.timeline({paused:'true', delay:0.25, ease: 'none' });
 let timelineLABL =

 tlLABL.fromTo("#linepath", {drawSVG:"0% 0%"}, {drawSVG: "100%"})
        .fromTo("#ovalpathleft", {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "someLabel")
        .fromTo("#ovalpathright", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "someLabel")


        .fromTo("#lbl0", {opacity:"0%"}, {duration: 0.5,   opacity:"100%"},"someLabel+=0.3")


        .fromTo("#linepath2", { drawSVG:"0% 0%"}, {duration: 0.3, ease: 'none', drawSVG: "65% 100%"},"ugatz")
        .to("#linepath2", {duration: 0.001, ease: 'none', opacity:"0%"}, "someLabel2")

        .fromTo("#ovalpathleft2", {drawSVG:"100% 100% nowrap"}, {duration: 0.4, ease: 'none', drawSVG:"0% -15% nowrap"}, "someLabel2")
        .fromTo("#ovalpathright2", { drawSVG:"100% 100%"}, {duration: 0.4, ease: 'none', drawSVG:"0% -15% nowrap"}, "someLabel2")


        .fromTo("#lbl4", {opacity:"0%"}, {duration: 0.2, opacity:"100%"},"ugatz+=0.3")
        .fromTo("#proj", {opacity:"0%"}, {duration: 0.2, opacity:"100%"},"ugatz+=0.5")
        .fromTo("#proj", {opacity:"100%"}, {duration: 0.1, opacity:"0%"},"ugatz+=0.7")

        .fromTo("#proj", {opacity:"100%"}, {duration: 0.1, opacity:"0%"},"sss")
        .fromTo("#proj", {opacity:"0%"}, {duration: 0.5, opacity:"100%"},"sss")
        .set(".menu", {pointerEvents: "auto"})

        .fromTo("#lbl1", {opacity:"0%"}, {duration: 0.1, opacity:"100%"},"sss")
        .fromTo("#lbl2", {opacity:"0%"}, {duration: 0.1, opacity:"100%"},"sss+=0.05")
        .fromTo("#lbl1b", {opacity:"0%"}, {duration: 0.1, opacity:"100%"},"sss+=0.1")
        .fromTo("#lbl2b", {opacity:"0%"}, {duration: 0.1, opacity:"100%"},"sss+=0.12")

        .fromTo("#lblm", {opacity:"0%"}, {duration: 2.5, opacity:"100%"},"+=0.05")
        .set("#lhov1", {display: "block"})
        .set("#lhov2", {display: "block"})



  const tlHover = gsap.timeline({ ease: 'none', paused:'true' });
    tlHover.to("#lhov1",{duration: 0.5, opacity:"100%"},"strun")
            .to("#lhov2",{duration: 1, opacity:"100%"},"-=0.25")
            .to("#proj", {duration: 0.5, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8"},"strun")

  const hoverR = document.querySelector('#proj');
  hoverR.addEventListener("mouseenter", () => {
    tlHover.play();
    });
  hoverR.addEventListener("mouseleave", () => {
      tlHover.timeScale(0.85).reverse();
    });

   ///////////////////////////// CONTACT ////////////////////////////////////////
   gsap.set("#lhov1C", {opacity: "0%"});
   gsap.set("#lhov2C", {opacity: "0%"});

   const tlLABLC = gsap.timeline({paused:'true', delay:0.5, ease: 'none' });
   let timelineLABLC =

   tlLABLC.fromTo("#linepathC", {drawSVG:"0% 0%"}, {drawSVG: "100%"})
          .fromTo("#ovalpathleftC", {drawSVG:"100% 100%"}, {drawSVG:"100% 0%"}, "someLabelC")
          .fromTo("#ovalpathrightC", {drawSVG:"0% 0%"}, {drawSVG:"0% 100%"}, "someLabelC")


          .fromTo("#lbl0C", {opacity:"0%"}, {duration: 0.5,   opacity:"100%"},"someLabelC+=0.3")


          .fromTo("#linepath2C", { drawSVG:"100% 100%"}, {duration: 0.3, ease: 'none', drawSVG:"0.1% 30%" },"ugatzC")
          .to("#linepath2C", {duration: 0.001, ease: 'none', opacity:"0%"}, "someLabel2C")

          .fromTo("#ovalpathleft2C", {drawSVG:"0% -15% nowrap"}, {duration: 0.4, ease: 'none', drawSVG:"100% 100%"}, "someLabel2C")
          .fromTo("#ovalpathright2C", { drawSVG:"100% 115% nowrap"}, {duration: 0.4, ease: 'none', drawSVG:"0% 0% nowrap"}, "someLabel2C")

          .fromTo("#lbl4C", {opacity:"0%"}, {duration: 0.2, opacity:"100%"},"ugatzC+=0.3")
          .fromTo("#projC", {opacity:"0%"}, {duration: 0.2, opacity:"100%"},"ugatzC+=0.5")
          .fromTo("#projC", {opacity:"100%"}, {duration: 0.1, opacity:"0%"},"ugatzC+=0.7")

          .fromTo("#projC", {opacity:"100%"}, {duration: 0.1, opacity:"0%"},"sssC")
          .fromTo("#projC", {opacity:"0%"}, {duration: 0.5, opacity:"100%"},"sssC")
          .set(".menu", {pointerEvents: "auto"})

          .fromTo("#lbl1C", {opacity:"0%"}, {duration: 0.1, opacity:"100%"},"sssC")
          .fromTo("#lbl2C", {opacity:"0%"}, {duration: 0.1, opacity:"100%"},"sssC+=0.05")
          .fromTo("#lbl1bC", {opacity:"0%"}, {duration: 0.1, opacity:"100%"},"sssC+=0.1")
          .fromTo("#lbl2bC", {opacity:"0%"}, {duration: 0.1, opacity:"100%"},"sssC+=0.12")

          .fromTo("#lblmC", {opacity:"0%"}, {duration: 2.5, opacity:"100%"},"+=0.05")
          .set("#lhov1C", {display: "block"})
          .set("#lhov2C", {display: "block"})

const tlHoverC = gsap.timeline({ ease: 'none', paused:'true' });
 tlHoverC.to("#lhov2C",{duration: 0.5, opacity:"100%"},"strunC")
         .to("#lhov1C",{duration: 1, opacity:"100%"},"-=0.25")
         .to("#projC", {duration: 0.5, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8"},"strunC")


const hoverRC = document.querySelector('#projC');
      hoverRC.addEventListener("mouseenter", () => {
        tlHoverC.play();
          });
      hoverRC.addEventListener("mouseleave", () => {
          tlHoverC.timeScale(0.85).reverse();
          });


console.log("wagwan console")
