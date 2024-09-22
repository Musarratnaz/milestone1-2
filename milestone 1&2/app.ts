let toggleButton =document.getElementById("btn") as HTMLButtonElement;
let skills=document.getElementById("mahart") as HTMLElement;

toggleButton.addEventListener("click", ()=> {
    if(skills.style.display ==="none"){
        skills.style.display ="block"  
    }else{
        skills.style.display ="none"
    }

});

