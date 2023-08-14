const body = document.querySelector("body")
const puntero = document.querySelector(".puntero")

puntero.style.opacity = "0"

body.addEventListener("mousemove", (e) => {
	puntero.style.opacity = "1"
	puntero.style.top = `${e.pageY - 10}px`
	puntero.style.left = `${e.pageX}px`
})
