
gsap.registerPlugin(MorphSVGPlugin,DrawSVGPlugin,Physics2DPlugin);

//gsap.set(".projects-page", {display: "block"});
/*   */
/////////////////  OK HOVER////////////////////
const tlOKhover = gsap.timeline({ defaults: { ease: "none" }, paused:'true' });
 tlOKhover.to("#ok-grey",{duration: 1, opacity:1},0)
          .to("#ok-blue",{duration: 1, opacity:0},0)

          .to("#okText", {duration: 1.5, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8"},0)


const okHover = document.querySelector('.ok-button');
      okHover.addEventListener("mouseenter", () => {
        tlOKhover.play();
          });
      okHover.addEventListener("mouseleave", () => {
          tlOKhover.timeScale(1.85).reverse();
          });

/////////////////  OK-ANIM-IN ////////////////////



gsap.set("#ok-hl", {drawSVG:"0"});

const tlOKhl = gsap.timeline({ delay:1, defaults: { ease: "none" }});
let timelineOK = tlOKhl.fromTo("#ok-hl", {drawSVG:"-10% 0% nowrap"},
                            {drawSVG: "100% 110% nowrap", duration: 1, ease: "none"});

/////////////////  EXPAND 11954 ////////////////////

document.querySelector(".proj11954").addEventListener("click", exxxpand1)

//gsap.set("svg", { opacity: 1 });
const tl11954 = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 0.75 }});


  tl11954.to("#start1", { morphSVG: "#end1" },0)
    .from(".rect1", { attr: { height: 0 } }, 0)
    .to(".proj11954", { attr: { height: 495, width:210} }, 0)
    .to("#lowglow1", { yPercent:600 }, 0)
    .to("#greyBottom1",{ yPercent:600 },0)
    .to("#mmmDWF",{ yPercent:80 },0)
    .to(".blancmargin",{ yPercent:700 },0)
    .to(".hlll1",{ opacity:0, duration: 0.25  },0)
    .reversed(true);


    function exxxpand1() {
      tl11954.reversed(!tl11954.reversed());
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

/////////////////  EXPAND DWF ////////////////////

document.querySelector(".projDWF").addEventListener("click", exxxpand2)

//gsap.set("svg", { opacity: 1 });
const tlDWF = gsap.timeline({
  defaults: { ease: "power4.inOut", duration: 0.75 }});


  tlDWF.to("#start2", { morphSVG: "#end2" },0)
    .from(".rect2", { attr: { height: 0 } }, 0)
    .to(".projDWF", { attr: { height: 495, width:210} }, 0)
    .to("#lowglow2", { yPercent:600 }, 0)
    .to("#greyBottom2",{ yPercent:600 },0)
    .to(".blancmargin",{ yPercent:700 },0)
    .to(".hlll2",{ opacity:0, duration: 0.25  },0)
    .reversed(true);


    function exxxpand2() {
      tlDWF.reversed(!tlDWF.reversed());
    }




const tlgreyhover2 = gsap.timeline({ ease: 'none', paused:'true' });
 tlgreyhover2.to("#greyTop2",{duration: 0.75, opacity:"100%"} )
             .to("#greyBottom2",{duration: 0.75, opacity:"100%"},0)
             .to(".yy2", {duration: 0.2, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8"},0)


const hoverDWF = document.querySelector('.projDWF');
      hoverDWF.addEventListener("mouseenter", () => {
        tlgreyhover2.play();
          });
      hoverDWF.addEventListener("mouseleave", () => {
          tlgreyhover2.timeScale(0.85).reverse();
          });



const tlpop2 = gsap.timeline({ ease: "power4.inOut", paused:'true' });
    tlpop2.to(".imageee2",{duration: 0.25, scale:1.03, transformOrigin:"50% 50%"})
          .to(".hhddrr2",{duration: 0.25, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8" },0)
          .to(".ttcc2",{duration: 0.25, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8" },0)


const popoutDWF = document.querySelector('.imageee2');
      popoutDWF.addEventListener("mouseenter", () => {
        tlpop2.play();
          });
      popoutDWF.addEventListener("mouseleave", () => {
          tlpop2.timeScale(0.85).reverse();
          });


/*

 ///////////////// RESIZE---VIEWBOX ISSUES 1000 ////////////////////
const dropdwf = document.querySelector('.dropDWF');
const drop11954 = document.querySelector('.drop11954');
function resizeFunction1(x) {
  if (x.matches) {
    dropdwf.setAttribute("viewBox", "0 100 730 500");
    drop11954.setAttribute("viewBox", "0 100 730 500");
  } else {
    dropdwf.setAttribute("viewBox", "0 0 730 500");
    drop11954.setAttribute("viewBox", "0 0 730 500");
  }
}


var x = window.matchMedia("(max-width: 1150px)")
resizeFunction1(x)
x.addListener(resizeFunction1)
///////////////////////////////////////////////////////////////

function resizeFunction2(y) {
  if (y.matches) {
    dropdwf.setAttribute("viewBox", "0 200 730 500");
    drop11954.setAttribute("viewBox", "0 200 730 500");
  } else {
    dropdwf.setAttribute("viewBox", "0 0 730 500");
    drop11954.setAttribute("viewBox", "0 0 730 500");
  }
}


var y = window.matchMedia("(max-width: 700px)")
resizeFunction2(y)
y.addListener(resizeFunction2)
///////////////////////////////////////////////////////////////

function resizeFunction3(z) {
  if (z.matches) {
    dropdwf.setAttribute("viewBox", "0 300 730 500");
    drop11954.setAttribute("viewBox", "0 300 730 500");
  } else {
    dropdwf.setAttribute("viewBox", "0 0 730 500");
    drop11954.setAttribute("viewBox", "0 0 730 500");
  }
}


var z = window.matchMedia("(max-width: 550px)")
resizeFunction3(z)
z.addListener(resizeFunction3)
///////////////////////////////////////////////////////////////

 */
