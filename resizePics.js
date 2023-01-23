//Creation fonction permet de modifier taille image//
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')

function resize1(){
    window = window.open(src="files/vimg1.jpg", "", "width=700px,height=500px")
}
img1.addEventListener("click", resize1)

function resize2(){
    window.open(src="files/vimg2.jpg", "", "width=700px,height=500px")
 }
 img2.addEventListener("click", resize2)
 
function resize3(){
    window.open(src="files/vimg3.jpg", "", "width=700px,height=500px")
 }
 img3.addEventListener("click", resize3)
 
function resize4(){
    window.open(src="files/vimg4.jpg", "", "width=700px,height=500px")
 }
 img4.addEventListener("click", resize4)


