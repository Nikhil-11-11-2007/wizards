function page1animation(){
    var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-40,
    opacity:0,
    delay:.5,
    duration:1,
    stagger:.13
})

tl.from(".cen-p1 h1",{
    x:-200,
    opacity:0,
    duration:.6,
},"-=.3")
tl.from(".cen-p1 p",{
    x:-100,
    opacity:0,
    duration:.4,
})
tl.from(".cen-p1 button",{
    opacity:0,
    duration:.5
})
tl.from(".cen-p2 img",{
    opacity:0,
    duration:.7,
    x:200
},"-=.7")

tl.from(".section1bottom img",{
    opacity:0,
    y:30,
    duration:.6,
    stagger:.13
})
}
page1animation()

function page2animation(){
    var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        start:"top 130%",
        end:"top 0",
        scrub:2,
    }
})
tl2.from(".services h3",{
    y:30,
    opacity:0,
    duration:.6,
})
tl2.from(".services p",{
    x:200,
    opacity:0,
    duration:.6
})
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1,
},"u")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1,
},"u")
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1,
},"q")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1,
},"q")
}
page2animation()

function page3animation(){
    var tl3 = gsap.timeline({
    scrollTrigger:{
        trigger:".section3",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
        scurb:2
    }
})
tl3.from(".intro h2",{
    x:-100,
    opacity:0,
    duration:.5
})
tl3.from(".intro p",{
    x:50,
    opacity:0,
    duration:.7
})
tl3.from(".intro button",{
    y:36,
    opacity:0,
    duration:.7
})
tl3.from(".ptt2 img",{
    y:10,
    opacity:0,
    duration:.8
})
}

page3animation()


function wheel(){
    window.addEventListener("wheel",function(det){
    if(det.deltaY>0){
    gsap.to(".M",{
    x:("-100%"),
    duration:2,
    repeat:-1,
    ease:"none"
})}else{
    gsap.to(".M",{
    x:("0%"),
    duration:2,
    repeat:-1,
    ease:"none"
})
  }
})
}

wheel()

function page4animation(){
    var tl4 = gsap.timeline({
    scrollTrigger:{
        trigger:".section4",
        scroller:"body",
        start:"top 50%",
        end:"top 0",
    }
})

tl4.from(".container1 .box",{
    y:40,
    opacity:0,
    duration:.6
})
tl4.from(".c-pt1 h3",{
    x:150,
    opacity:0,
    duration:.5
})
tl4.from(".c-pt1 p",{
    x:-70,
    opacity:0,
    duration:.5
})
tl4.from(".c-pt1 button",{
    y:40,
    opacity:0,
    duration:.5
})
tl4.from(".c-pt2 img",{
    x:200,
    opacity:0,
    duration:.7
})
tl4.from(".c-s h3",{
    x:-150,
    opacity:0,
    duration:.4
})
tl4.from(".c-s p",{
    x:150,
    opacity:0,
    duration:.4
})
tl4.from(".box2",{
    y:-50,
    opacity:0,
    duration:.5
})
tl4.from(".paragraph1 p,.paragraph1 h5",{
    y:50,
    opacity:0,
    duration:.4,
    stagger:.1
})
}

page4animation()