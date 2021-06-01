
gsap.registerPlugin(MorphSVGPlugin,DrawSVGPlugin,Physics2DPlugin );

//////////////////////  GLOW-FLICKER ///////////////////////////////////
gsap.set(".greyygloww", { opacity: 0  });
var tlglowflicker = gsap.timeline({repeat: -1, repeatDelay: 7 });
tlglowflicker.fromTo(".greyygloww", 0.5,{ ease:"none", opacity:0 }, { ease:"none", opacity:1 })
            .fromTo(".greyygloww", 0.5,{ ease:"none", opacity:1 }, { ease:"none", opacity:0 })




/////////////////  EXPAND 11954 ////////////////////

document.querySelector(".proj11954").addEventListener("click", exxxpand1)


const tl11954 = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 0.75 }});

  tl11954.to("#start1", { morphSVG: "#end1" },0)
    .from(".rect1", { attr: { height: 0 } }, 0)
    .to("#lowglow0", { yPercent:180 }, 0)
    .to("#lowglow1", { yPercent:918 }, 0)
    .to(".hlll1",{ xPercent:-20 ,},0)
    .reversed(true);

    function exxxpand1() {
      tl11954.reversed(!tl11954.reversed());
      tlglowflicker.paused(!tlglowflicker.paused())
    }




const tlgreyhover1 = gsap.timeline({ ease: 'none', paused:'true' });
 tlgreyhover1.to("#greyTop1",{duration: 0.75, opacity:"100%"} )
             .to("#greyBottom1",{duration: 0.75, opacity:"100%"},0)
             .to(".yy1", {duration: 0.2, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8"},0)


const hover11954 = document.querySelector('.proj11954');
      hover11954.addEventListener("mouseenter", () => {
        tlgreyhover1.play();
          });
      hover11954.addEventListener("mouseleave", () => {
          tlgreyhover1.timeScale(0.85).reverse();
          });

const tlpop1 = gsap.timeline({ ease: "power4.inOut", paused:'true' });
    tlpop1.to(".imageee1",{duration: 0.25, scale:1.03, transformOrigin:"50% 50%"})
          .to(".hhddrr1",{duration: 0.25, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8" },0)
          .to(".ttcc1",{duration: 0.25, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8" },0)


const popout11954 = document.querySelector('.imageee1');
      popout11954.addEventListener("mouseenter", () => {
        tlpop1.play();
          });
      popout11954.addEventListener("mouseleave", () => {
          tlpop1.timeScale(0.85).reverse();
          });


console.log("wagwan console")
