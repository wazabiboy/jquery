
let  monTitre = document.getElementsByTagName("h1")[0];
let  maDiv = document.getElementsByTagName("div")[0];
monTitre.addEventListener("click", () => {
if(maDiv.style.visibility === "hidden"){
maDiv.style.visibility = "visible";
} else {
	maDiv.style.visibility = "hidden";
}
});
