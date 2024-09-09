
import { ref } from 'vue';



//切换黑暗模式
function toggleDarkMode(store) {
  
  store.dark=!store.dark
  const htmlElement = document.documentElement;
  if (store.dark) {
    htmlElement.classList.add('dark');
    htmlElement.setAttribute('data-theme', 'dark');
  } else {
    htmlElement.setAttribute('data-theme', '');
    htmlElement.classList.remove('dark');
  }
}


export {toggleDarkMode,isDarkMode}