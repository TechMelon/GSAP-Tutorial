var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var image = document.querySelector("#image")

main.addEventListener("mousemove", function(dets) {
   gsap.to(cursor, {
    duration: 0.2,
     x: dets.x,
     y: dets.y})
    // ease:"back.out"
})

image.addEventListener("mouseenter", function() {
    cursor.innerHTML = "view image"
    gsap.to(cursor,{
        scale: 2,
        backgroundColor: "#ffffff8a",
    })
    
})
image.addEventListener("mouseleave", function() {
    cursor.innerHTML = ""
    gsap.to(cursor,{
        scale: 1,
        backgroundColor: "#fff",
    })
    
})