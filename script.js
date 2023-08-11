const body = document.querySelector("body")
const puntero = document.querySelector(".puntero")

body.addEventListener("mousemove", (e) => {
	puntero.style.top = `${e.pageY - 10}px`
	puntero.style.left = `${e.pageX}px`
})
