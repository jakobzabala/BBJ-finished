

const animationEnter = (container) => {
  return gsap.from(container, {autoAlpha:0, duration:2, clearProps:"all", ease:"none"})
};

const animationLeave = (container) => {
  return gsap.to(container, {autoAlpha:0, duration:2, clearProps:"all", ease:"none" })
};




 const navigation1 = (container) => {

   const setlaunch = gsap.timeline( );
   setlaunch.set("#linepathC", { y: 65, x: 0 },0)
            .set("#linepath2C", { y: 65, x: 0 },0)
            .set(".glowboxxC", { y: 0, x:378 },0)
            .set(".bottomm", { y: 0, x:72 },0)

return setlaunch
};


const navin2 = (container) => {

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
return tlll
};


const navin3 = (container) => {

  gsap.to(".shape1", 60, { type:"rotational", ease:"none", rotation:"1600",repeat: -1, yoyo: true });

  const  tlShapeSpin = gsap.timeline({ delay:1.5,  ease: "power4.InOut", repeat: -1, yoyo: true})
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


  return tlShapeSpin
  };








barba.init({

  views:[
      {
        namespace: 'detail',
        beforeEnter(){

        }
      }
  ],

  transitions: [{
    sync: true,
          name: 'general-transition-opacityfade',
          once({next}){
            animationEnter(next.container)
          },
          leave: ({current}) => animationLeave(current.container),
          enter({next}){
            animationEnter(next.container);

          }
        }, {
          name: 'detail',
          to:{
            namespace:['detail']
          },
          once({next}){
            navigation1(next.container)
          },
          leave: ({current}) => animationLeave(current.container),
          enter({next}){
            navigation1(next.container);
            navin2(next.container);
            navin3(next.container);

          }

        }

  ]
})














/*
{
  name: 'detail',
  to:{
    namespace:['detail']
  },
  once({next}){
    animationEnter(next.container)
  },
  leave: ({current}) => animationLeave(current.container),
  enter({next}){
    animationEnter(next.container)
  }

},




     {
      name: 'from-detail',
      from: {
        namespace:['detail']
      },
      leave: ({current}) => animationLeave(current.container),
      enter({next})
    //  animationEnter(next.container)
    }





*/
