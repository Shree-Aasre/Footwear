function frameanimation() {
    var tl = gsap.timeline()

    tl.from("#oframe", {
        scale:0.5,
        stagger: -0.15,
        opacity: 0,
        duration: 2
    })

    tl.from("#outerVisibleFrame nav", {
        y: -30,
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        stagger: 0.15
    })
    tl.from("main #iframe #page1 h1,main #iframe #page1 h3", {
        y: -30,
        opacity: 0,
        delay: 0.0,
        duration: 0.6,
        stagger: 0.15
    })
    tl.from("main #iframe #page1 #contactWithMe", {
        y: 30,
        opacity: 0,
        delay: 0.0,
        duration: 0.6,
        stagger: 0.15,
        ease: "elastic.out(9,1)",
    })

    
 
    // tl.from(".center-part2 img",{
    //     x:200,
    //      opacity:0,
    //      duration:0.5
    //  },"-=0.7")

   
}
frameanimation()

