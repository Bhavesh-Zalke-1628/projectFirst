gsap.to("#nav",{
    // y:30,
    backgroundColor: "#000",
    height :"100px",
    duration :1,
    delay : 1, 
    scrollTrigger : {
        trigger : "#nav",
        scroller : "body",
        // markers : true,
        start : "top - -10%",
        scrub : 3
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller : "body",
        // markers :true,
        start :"top -25%",
        end:"top -75%",
        scrub : 3
    }
})
var crsr  = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    // console.log(dets.y);
    crsr.style.left =dets.x+10+"px"
    crsr.style.top = dets.y +"px"
    blur.style.left =dets.x-200 +"px"
    blur.style.top = dets.y-150+"px"
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    // console.log(elem);
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3
        crsr.style.border= "1px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border= "1px solid #95c11e"
        crsr.style.backgroundColor="#95c11e"
        crsr.style.backgroundColor = "95c11e"
    })
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opactity:0,
    duaration:1,
    delay:2,
    // stagger :0.4, 
    scrollTrigger:{
        trigger : "#about-us",
        scroller :"body",
        // markers : true,
        start :"top 70%",
        end:"top 65%",
        scrub : 3
    }
})

gsap.from(".card",{
    scale : 0.8,
    opactity:0,
    duaration:1,
    // delay:1,
    stagger :0.1, 
    scrollTrigger:{
        trigger : ".card",
        scroller :"body",
        start :"top 70%",
        end:"top 65%",
        scrub : 2
    }
})

gsap.from("#colon1",{
    x:-70,
    y:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers : true,
        start : "top 60%",
        end :"end 45%",
        scrub :3 
    }
})
gsap.from("#colon2",{
    x:70,
    y:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers : true,
        start : "top 60%",
        end :"end 45%",
        scrub :3 
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers : true,
        start : "top 75%",
        end :"end 80%",
        scrub :3
    }
})