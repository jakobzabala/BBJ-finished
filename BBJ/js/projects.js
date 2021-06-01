
gsap.registerPlugin(MorphSVGPlugin,DrawSVGPlugin);

gsap.set("body", {display: "block"});

const tlOKhover = gsap.timeline({ ease: 'none', paused:'true' });
 tlOKhover.to("#ok-grey",{duration: 1, opacity:1},"uute")
          .to("#ok-blue",{duration: 1, opacity:0},"uute")

          .to("#okText", {duration: 1.5, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8"},"uute")


const okHover = document.querySelector('.okok');
      okHover.addEventListener("mouseenter", () => {
        tlOKhover.play();
          });
      okHover.addEventListener("mouseleave", () => {
          tlOKhover.timeScale(1.85).reverse();
          });

/////////////////    ////////////////////



gsap.set("#ok-hl", {drawSVG:"0"});

const tlOKhl = gsap.timeline({ delay:1, ease: 'none' });
let timelineOK = tlOKhl.fromTo("#ok-hl", {drawSVG:"0% 0%"}, {drawSVG: "90% 100%",duration: 1, ease: 'none'  })
                       .to("#ok-hl", {drawSVG: "100% 100%", duration: 1, ease: 'none'  })






 /////////////////////////////////////

 //Movement Animation to happen
 const popout1 = document.querySelector(".popout1");
 const web1 = document.querySelector(".web1");
 const text1 = document.querySelector(".text1");
 //const description4 = document.querySelector(".price4");

 //Moving Animation Event
 web1.addEventListener("mousemove", (e) => {
   let xAxis = (window.innerWidth / 2 - e.pageX) / 160;
   let yAxis = (window.innerHeight / 2 - e.pageY) / 160;
   popout1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

 });
 //Animate In
 web1.addEventListener("mouseenter", (e) => {
   web1.style.transition = "none";

   //Popout
   web1.style.transform = "translateZ(200px)";
   text1.style.transform = "translateZ(200px)";
   text1.style.textShadow = "0px 3px 6px rgba(46, 196, 233, 0.4";
 });

 //Animate Out
 web1.addEventListener("mouseleave", (e) => {
   web1.style.transition = "all 1s ease";
   text1.style.transition = "all 1s ease";

   //Popback
   web1.style.transform = "translateZ(0px)";
   text1.style.transform = "translateZ(0px)";
   text1.style.textShadow = "0px 3px 6px rgba(154, 50, 146, 0.41)";
 });



////////////////
 const tlboxhover1 = gsap.timeline({ ease: 'none', paused:'true' });
   tlboxhover1.to("#box-grey-1",{duration: 1, opacity:"1"})
          //  .to("#okText", {duration: 1.5, textShadow: "0px 3px 6px rgba(46, 196, 233, 0.8"},"blechew")


 const box1Hover = document.querySelector('.web1');
        box1Hover.addEventListener("mouseenter", () => {
          tlboxhover1.play();
            });
        box1Hover.addEventListener("mouseleave", () => {
            tlboxhover1.timeScale(1.85).reverse();
            });
 /////////////////////////////////////
 /////////////////////////////////////

 //Movement Animation to happen
 const popout2 = document.querySelector(".popout2");
 const web2 = document.querySelector(".web2");
 const text2 = document.querySelector(".text2");

 //const description4 = document.querySelector(".price4");

 //Moving Animation Event
// web2.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 160;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 160;
//   popout2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

// });
 //Animate In
 web2.addEventListener("mouseenter", (e) => {
//   web2.style.transition = "none";

   //Popout
   web2.style.transform = "translateZ(50px)";
   text2.style.transform = "translateZ(30px)";
   text2.style.textShadow = "0px 3px 6px rgba(46, 196, 233, 0.4";
 });

 //Animate Out
 web2.addEventListener("mouseleave", (e) => {
   web2.style.transition = "all 1s ease";
   text2.style.transition = "all 1s ease";

   //Popback
   web2.style.transform = "translateZ(0px)";
   text2.style.transform = "translateZ(0px)";
   text2.style.textShadow = "0px 3px 6px rgba(154, 50, 146, 0.41)";
 });

 
