// gsap.to("#box",{
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     borderRadius:"50%",
//     scale:2,
//     repeat:-1,
//     yoyo:true,
// })
// gsap.from("#box2",{
//     x:1000,
//     duration:2,
//     delay:1,
// })
// gsap.from("h1",{
//     opacity:0,
//     duration:1,
//     delay:1,
//     y:30,
//     stagger:1,
// })
// gsap.to("#box3",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
//     delay:1,
// })
// gsap.to("#box4",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
//     delay:2.5,
// })
// gsap.to("#box5",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
//     delay:4,
// })
// const tl = gsap.timeline();
// tl.to("#box3",{
//     x:1500,
//     rotate:360,
//     duration:1.5,
// })
// tl.to("#box4",{
//     x:1500,
//     backgroundColor:"yellow",
//     duration:1.5,
// })
// tl.to("#box5",{
//     x:1500,
//     scale:0.5,
//     borderRadius:"50%",
//     duration:1.5,
// })
const tl2 = gsap.timeline();
tl2.from("h2",{
    y:-20,
    opacity:0,
    duration:1,
    delay:1,
})
tl2.from("h3",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3,
})
tl2.from("#text",{
    y:20,
    opacity:0,
    duration:1,
    scale:0.2,
})