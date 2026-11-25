const sideButtons = document.querySelectorAll(".side-btn-div");
const mainIcon = document.querySelector("#icon");
mainIcon.addEventListener("click",()=>{
    window.open("https://moon-the-fish.github.io/dashboard-assignment/","_self")
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