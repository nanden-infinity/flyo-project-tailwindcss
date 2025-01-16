const themeToggleBtn = document.getElementById("theme-toggle");

const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  // SHOW LIGHT ICON

  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");

}

// Listen for toggle button click


const toggleMode = function (){
  themeToggleLightIcon.classList.toggle("hidden");
  themeToggleDarkIcon.classList.toggle("hidden");

  // If is set in localstorage
  if(localStorage.getItem('color-theme')){
    if(localStorage.getItem('color-theme') === 'light'){
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    } else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    }
    
  } else{
    if(document.documentElement.classList.contains('dark')){
      document.documentElement.classList.remove('dark')
      localStorage.setItem('color-theme', 'light')
    } else{
      document.documentElement.classList.add('dark')
      localStorage.setItem('color-theme', 'dark')
    }
  }
}
themeToggleBtn.onclick = toggleMode
