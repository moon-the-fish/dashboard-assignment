const sideButtons = document.querySelectorAll(".side-btn-div");
const mainIcon = document.querySelector("#icon");
mainIcon.addEventListener("click",()=>{
    window.open("index.html","_self")
})
sideButtons.forEach(
    (btn)=>btn.addEventListener("click",()=>{
        sideDivClicked()
        btn.classList.add("clicked-side")
    }
)

)
function sideDivClicked(e){
    sideButtons.forEach(b => b.classList.remove("clicked-side"))
   

   

}