let body=document.body;
let themeToggler=document.getElementById("theme-toggle");
let themeTogglerIcon=document.getElementById("theme-icon");
let theme=localStorage.getItem("theme");
body.classList.remove("light");
body.classList.remove("dark");
if(theme==null){
    localStorage.setItem("theme","light");
    theme="light";
}
if(theme=="light"){
    body.classList.add("light");
    themeTogglerIcon.data="/icons/light.svg";
}
else{
    body.classList.add("dark");
    themeTogglerIcon.data="/icons/dark.svg";
}
const toggle_theme=()=>{
    if(body.classList.contains("light")){
        body.classList.remove("light");
        body.classList.add("dark");
        themeTogglerIcon.data="/icons/dark.svg";
        localStorage.setItem("theme","dark");
    } else{
        body.classList.remove("dark");
        body.classList.add("light");
        themeTogglerIcon.data="/icons/light.svg";
        localStorage.setItem("theme","light");
    }
    
}
themeToggler.addEventListener("click",toggle_theme);

