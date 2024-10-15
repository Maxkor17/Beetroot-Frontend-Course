const darkModeToggle = document.getElementById('darkmode-toggle');
const head = document.head;
let darkThemeLink = null;

darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    
    darkThemeLink = document.createElement('link');
    darkThemeLink.rel = 'stylesheet';
    darkThemeLink.href = '/styles/dark-theme/dark.css'; 
    darkThemeLink.id = 'dark-theme'; 
    head.appendChild(darkThemeLink);
  } else {
    
    if (darkThemeLink) {
      head.removeChild(darkThemeLink);
      darkThemeLink = null;
    }
  }
});
