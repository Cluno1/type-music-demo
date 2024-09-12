import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useGridBoxStore = defineStore('gridBox', () => {

    let gridBoxBase={
        gridBoxAddMessage(
            songNames,
            songSingers,
            songSignatures,
            songSubmitTimes,
            songImgs=null){
                if(this.length==songNames.length){
                    this.songNames.forEach((element,index) => {
                        element.innerText=songNames[index]
                    });
                    this.songSingers.forEach((element,index) => {
                        element.innerText=songSingers[index]
                    });
                    this.songSignatures.forEach((element,index) => {
                        element.innerText=songSignatures[index]
                    });
                    this.songSubmitTimes.forEach((element,index) => {
                        element.innerText=songSubmitTimes[index]
                    });
                    if(songImgs){
                        let length=songImgs.length //传入的图片数量
                        this.songImgs.forEach((element,index) => {
                            if(index<length)
                                element.src=`${songImgs[index]}`
                            else
                                element.src=`/src/assets/pictureHolder/${index%3}.png`
                        });
                    }
                    return true
                }

                
        },
        gridBoxAddImg(songImgs=null){
            if(songImgs){
                let length=songImgs.length //传入的图片数量
                this.songImgs.forEach((element,index) => {
                    if(index<length)
                        element.src=`url('${songSignatures[index]}')`
                    else
                        element.src=`url('/src/assets/pictureHolder/${index%3}.png')`
                });
            }
        }

    }
  
    type gridBox={
        length:number,
        songImgs:Array<HTMLElement>,
        songNames:Array<HTMLElement>,
        songSingers:Array<HTMLElement>,
        songSignatures:Array<HTMLElement>,
        songSubmitTimes:Array<HTMLElement>,
        __proto__:{}
    }
        //创建实例对象
    function initBox(
        songNames,
        songSingers,
        songSignatures,
        songSubmitTimes,
        songImgs
    ):gridBox|null
    {
        let rGridBox:gridBox=null;
        if(songNames.length==songSingers.length&&songSignatures.length==songSubmitTimes.length&&songImgs.length==songNames.length){
            rGridBox={
                length:songNames.length,
                songImgs,
                songNames,
                songSingers,
                songSignatures,
                songSubmitTimes,
                __proto__:gridBoxBase
            }
            gridBoxes.data.push(rGridBox);
            gridBoxes.length++;
            return rGridBox;
        }
        return null
        
    }

    function test(length:number){

        let songNames=[];
        let songSingers=[];
        let songSignatures=[];
        let songSubmitTimes=[];
        let songImgs=[];
        for(let i=0;i<length;i++){
            songNames.push('月球上的人')
            songSingers.push('陈奕迅')
            songSignatures.push('人生一世，不如听歌')
            songSubmitTimes.push('2024/9/11')
            songImgs.push('https://picsum.photos/420/360')
        }

        return {
            songNames,
            songSingers,
            songSignatures,
            songSubmitTimes,
            songImgs
        }
    }
    
  
  const gridBoxes = reactive({
    length:0,
    data:[] as Array<{}>
  })

  return { gridBoxes,initBox,test}
})