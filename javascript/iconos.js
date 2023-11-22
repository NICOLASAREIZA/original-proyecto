var btn = document.getElementById("dropMenu");
var sidebar = document.querySelector('.lateral');

window.addEventListener("DOMContentLoaded", (event) => {
    sidebar.classList.add("close")
    
    function toggleMenu() {
        sidebar.classList.toggle("close")
        btn.addEventListener("click", toggleMenu)
    }
    
    
})
