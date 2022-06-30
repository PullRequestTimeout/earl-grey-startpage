// Dark Mode

const darkModeSwitch = document.getElementById("darkModeToggle");

darkModeSwitch.addEventListener('change', toggleDarkStyles);

function toggleDarkStyles(){
    if(document.getElementById("darkmode").href == "light.css"){
        document.getElementById("darkmode").setAttribute("href", "dark.css");
    }

    
}