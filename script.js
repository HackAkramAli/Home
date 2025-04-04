gsap.from("nav .navbar-brand",{
  y:100,
  duration:1,
  delay:0.5,
  scrub:0.5
})

gsap.from("nav ul li",{
  y:100,
  duration:0.5,
  delay:0.2,
  scrub:0.2,
  stagger:0.3
})

// gsap.from("#res_txt1 p",{
//   y:310,
//   duration:1,
//   delay:2,
//   scrub:0.2
// })

// gsap.from(".hero_txt",{
//   y:310,
//   duration:1,
//   delay:2,
//   scrub:0.2
// })
gsap.from("#res_txt1 p",{
  y:450,
  delay:1,
  duration:1,
  scrub:0.5,
  scrollTrigger:{
    trigger:"#carouselExampleCaptions",
    scroll:"body",
    // markers:true,
    start:"top 50%",
    end:"end 20%"
  }
})

gsap.from(".hero_txt",{
  y:450,
  delay:1,
  duration:1,
  scrub:0.5,
  scrollTrigger:{
    trigger:"#carouselExampleCaptions",
    scroll:"body",
    // markers:true,
    start:"top 50%",
    end:"end 20%"
  }
})
// about
gsap.from("#about_card",{
  y:450,
  // delay:1,
  duration:1,
  scrub:0.5,
  scrollTrigger:{
    trigger:".about_section",
    scroll:"body",
    // markers:true,
    start:"top 50%",
    end:"end 20%"
  }
})

// projects
gsap.from(".projects_card",{
  y:450,
  // delay:1,
  duration:1,
  scrub:0.5,
  scrollTrigger:{
    trigger:".myprojects",
    scroll:"body",
    // markers:true,
    start:"top 50%",
    end:"end 20%"
  }
})