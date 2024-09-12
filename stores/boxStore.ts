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
        click: number
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
    boxChange(changeType:'left'|'right'|'pointer'|null=null,changeIndex:number|null=null){
      
      switch(changeType){
        case null:
          if(!this.time.click){
            if(this.direction=='right')
              this.direction=this.boxAdd()
            else
              this.direction=this.boxDesc()

            this.boxContainer.style.left= (this.index)*(-100) +'%'
            setTimeout(() => {
                this.boxChange()
            }, this.time.routineTime);
          }else{
            this.time.click--
            if(!this.time.click)
              this.boxContainer.style.transition='all 0.5s'
          }
          break;
        case 'left':
            this.direction= this.boxDesc()
            if(!this.time.click)
              this.boxContainer.style.transition='all 0s'
            this.boxContainer.style.left= (this.index)*(-100) +'%'
            this.time.click++
            setTimeout(() => {
              this.boxChange()
            }, this.time.occurTime);
            break;
        case 'right':
            this.direction= this.boxAdd()
            if(!this.time.click)
              this.boxContainer.style.transition='all 0s'
            this.boxContainer.style.left= (this.index)*(-100) +'%'
            this.time.click++
            setTimeout(() => {
              this.boxChange()
            }, this.time.occurTime);
            break;
        case 'pointer':
            this.index=changeIndex
            if(!this.time.click)
              this.boxContainer.style.transition='all 0s'
            this.boxContainer.style.left= (this.index)*(-100) +'%'
            this.time.click++
            setTimeout(() => {
              this.boxChange()
            }, this.time.occurTime);
            break;


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
          click:0
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
          boxContainer.style.transition="all 0s"
          box1.boxChange('pointer',eleIndex)       
      })
    });

    boxLeft?.addEventListener('click',()=>{
      // if(!box1.time.click){
      //   // boxContainer.style.transition="all 0s"
      //   // box1.direction= box1.boxDesc()
      //   box1.boxChange(box1.index)
      // }
      box1.boxChange('left')
    })

    boxRight?.addEventListener('click',()=>{
        // if(!box1.time.isClick){
        //   boxContainer.style.transition="all 0s"
        //   box1.direction= box1.boxAdd()
        //   box1.boxChange(box1.index)
        // }
        box1.boxChange('right')
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