const shareBu = document.querySelector(".iconoshare");
const shareBar=document.querySelector(".share")
shareBu.addEventListener("click",()=>{
    if(shareBar.classList.contains("invisicle")){
        shareBar.classList.remove("invisicle")
    }else{
        shareBar.classList.add("invisicle")
    }
})