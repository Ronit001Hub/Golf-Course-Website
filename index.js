//Scroll Karne Par Div Element ke saath Kya ho .. Usse GSAP sambhalta h
// BEST TOOL TO USE IT

//Scrub ka matlab kitni tezi se cheeze work kar rhi h scroll karne par

// Scrolling of NAVBAR you can do it on other Websites
// This is Written code

gsap.to("#nav", {
  backgroundColor: "#000",
  duration: 0.5,
  height: "130px",
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top -10%",
    end: "top -11%",
    scrub: 1.2, //Work on Scrolling
  },
});

// Scrolling of DIV TAG (#MAIN) you can do it on other Websites
// This is Written code

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    // markers: true,
    start: "top -50%",
    end: "top -80%",
    scrub: 2.2, //When you Scroll it will become darker in background
  },
});

// Custom Cursor Code  .. Use In Other Project Also

var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

var cursor_blur = document.getElementById("cursor-blur");
document.addEventListener("mousemove", function (dets) {
  cursor_blur.style.left = dets.x - 200 + "px";
  cursor_blur.style.top = dets.y - 200 + "px";
});

// yeh -200 aapke cursor-blur ke div ke height width ke hisaab se lagenge  uska aadha ho jayega
// div agar 500 ka h toh yah par -250 go jayega..

//Cursor Blinkness on Click On the Navbar
// var h4all = document.querySelector("#nav h4")
// h4all.forEach(function (elem){
//   elem.addEventListener("mouseenter",function(){
//     cursor.style.scale =3
//     cursor.style.border = "1px solid #fff"
//     cursor.style.backgroundColor = "transparent"
//   })

//   elem.addEventListener("mouseleave",function(){
//     cursor.style.scale =1
//     cursor.style.border = "0px solid #95C11E"
//     cursor.style.backgroundColor = "#95C11E"
//   })
// })

// Scrolling of COLON(#page3) you can do it on other Websites
// This is Written code

gsap.to("#colon1", {
  x: 70,
  y: 70,
  scrollTrigger: {
    trigger: "#page3 #colon1",
    scroller: "body",
    // markers: true,
    start: "top 50%",
    end: "top 47%",
    scrub: 3,
  },
});

gsap.to("#page3 #colon2", {
  x: -130,
  y: -55,
  scrollTrigger: {
    trigger: "#colon2",
    scroller: "body",
    // markers: true,
    start: "top 200%",
    end: "top 50%",
    scrub: 3,
  },
});

// Scrolling of Cards(.cards) you can do it on other Websites
// This is Written code


gsap.to(".cards", {
  scale: 1.075,
  opacity: 1,
  duration: 1,
  scrollTrigger: {
    trigger: ".cards",
    scroller: "body",
    // markers: true,
    start: "top 60%",
    end: "top 58%",
    scrub: 3,
  },
});



//page 4 H1 Customization
gsap.to("#page4 h1", {
  y:-17,
  duration:0.5,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    // markers: true,
    start: "top 75%",
    end: "top 70%",
    scrub:3,
  },
});