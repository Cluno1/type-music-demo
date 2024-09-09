import { ref } from 'vue';

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

//选中菜单触发的回调
const selected = (index, indexPath) => {
    alert(index+';'+indexPath)   // 1;1 拿到下标
    
    
    
}

export {isCollapse,handleClose,handleOpen,selected}