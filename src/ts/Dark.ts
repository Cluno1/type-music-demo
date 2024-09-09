
import { ref } from 'vue';
const isDarkMode = ref(false);
//切换黑暗模式
function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  const htmlElement = document.documentElement;
  if (isDarkMode.value) {
    htmlElement.classList.add('dark');
    htmlElement.setAttribute('data-theme', 'dark');
  } else {
    htmlElement.setAttribute('data-theme', '');
    htmlElement.classList.remove('dark');
  }
}
export {toggleDarkMode,isDarkMode}