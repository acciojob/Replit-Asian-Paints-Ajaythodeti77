
		const form = document.getElementById("form")
		const Boxes = document.querySelectorAll(".grid-items")
		form.addEventListener("submit",(e)=>{
			BgColor();
    e.preventDefault();   
    const selectBox = document.getElementById("selectBox").value;
    const entercolor = document.getElementById("entercolor").value;
    const box = document.getElementById(selectBox);
    if(box){
        box.style.backgroundColor = entercolor;
    }else{
        alert("Please enter a valid box number between 1 to 9")
    }
})
function BgColor(){
for(box of Boxes){
    box.style.backgroundColor = "Transparent"
}
}