import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useBoxStore = defineStore('box', () => {
  
  type box={
    length:number,
    index:number,
    direction:'left'|'right',
    time:{
        routineTime:number,
        occurTime:number,
        isClick:boolean
    },
    boxItems:Array<HTMLElement>,
    boxContainer:HTMLElement,
    boxPointers:Array<HTMLElement>,
    boxRight:HTMLElement,
    boxLeft:HTMLElement
  }

  //盒子原型-仅仅提供函数
  let boxBase={
    boxStart(box:box){
      setTimeout(() => {
        box.boxChange()
      }, box.time.routineTime);
    },
    boxAdd(){
      if(this.index<this.length-1){
        this.index++
        return 'right'
      }else{
        this.index--
          return 'left'
      }
    },
    boxDesc(){
      if(this.index>0){
        this.index--
        return 'left'
      }else{
        this.index++
          return 'right'
      }
    },
    boxChange(changeIndex:number|null=null){
      if(this.time.isClick)
        this.time.isClick=false
      else{
        if(changeIndex===null){
           if(this.direction=='right')
              this.direction=this.boxAdd()
            else
              this.direction=this.boxDesc()
           setTimeout(() => {
               this.boxChange()
           }, this.time.routineTime);
        }else{
          this.index=changeIndex
          this.time.isClick=true;
          
            setTimeout(() => {
              this.boxChange()
              }, this.time.occurTime
            );
        }
        this.boxContainer.style.left= (this.index)*(-100) +'%';
      }
    },
    addUrl(array:Array<String>){
      
        let length=array.length
        let arrayIndex=0
        this.boxItems.forEach((element,index) => {
            if(arrayIndex<length){
              element.style.backgroundImage=`url(${array[arrayIndex]})`
              
            }else{
              element.style.backgroundImage=`url('/src/assets/pictureHolder/${arrayIndex%3}.png')`

            }
              arrayIndex++
              


        });

    }
  }



  //添加监听和创建盒子
  function initBox(routineTime,occurTime,boxItems,boxContainer,boxPointers,boxLeft,boxRight):box{
    let box1:box= {
      length:boxItems.length,
      index:0,
      time:{
          routineTime:routineTime,
          occurTime,
          isClick:false
      },
      boxItems,
      boxContainer,
      boxPointers,
      boxRight,
      boxLeft,
      direction:'right',
      __proto__:boxBase
    }
    



    boxPointers.forEach((element,eleIndex) => {
      element.addEventListener('click',()=>{
          box1.boxChange(eleIndex)       
      })
    });

    boxLeft?.addEventListener('click',()=>{
      if(!box1.time.isClick){
        box1.direction= box1.boxDesc()
        box1.boxChange(box1.index)
      }
         
    })

    boxRight?.addEventListener('click',()=>{
        if(!box1.time.isClick){
          box1.direction= box1.boxAdd()
          box1.boxChange(box1.index)
        }
    })

    boxes.data.push(box1);
    boxes.length++;
    return box1;

  }
  
  const boxes = reactive({
    length:0,
    data:[] as Array<box>
  })

  return { boxes,initBox }
})