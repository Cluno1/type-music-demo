import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useGridBoxStore = defineStore('gridBox', () => {

    let gridBoxBase={
        gridBoxAddMessage(
            songNames:Array<string>,
            songSingers:Array<string>,
            songSignatures:Array<string>,
            songSubmitTimes:Array<string>,
            songImgs:Array<string>|null=null){
                
                    this.songNames.forEach((element,index) => {
                        if(songNames.length>=index+1)
                        element.innerText=songNames[index]
                    });
                    this.songSingers?.forEach((element,index) => {
                        if(songSingers.length>=index+1)
                        element.innerText=songSingers[index]
                    });
                    this.songSignatures?.forEach((element,index) => {
                        if(songSignatures.length>=index+1)
                        element.innerText=songSignatures[index]
                    });
                    
                    this.songSubmitTimes?.forEach((element,index) => {
                        if(songSubmitTimes.length>=index+1)
                        element.innerText=songSubmitTimes[index]
                    });
                    
                    
                    if(songImgs){
                        let length=songImgs.length //传入的图片数量
                        this.songImgs?.forEach((element,index) => {
                            if(index<length)
                                element.src=`${songImgs[index]}`
                            else
                                element.src=`/src/assets/pictureHolder/${index%4}.png`
                        });
                    }
                    return true
                

                
        },
        gridBoxAddImg(songImgs=null){
            if(songImgs){
                let length=songImgs.length //传入的图片数量
                this.songImgs?.forEach((element,index) => {
                    if(index<length)
                        element.src=`url('${songSignatures[index]}')`
                    else
                        element.src=`url('/src/assets/pictureHolder/${index%4}.png')`
                });
            }
        }
    }
    type gridBox={
        boxName:string,
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
        boxName:string,        
        songNames:Array<HTMLElement>,
        songSingers:Array<HTMLElement>,
        songSignatures:Array<HTMLElement>,
        songSubmitTimes:Array<HTMLElement>,
        songImgs:Array<HTMLElement>,
    ):gridBox|null
    {
        let rGridBox:gridBox=null;
        
            rGridBox={
                boxName,
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
            songImgs.push(`https://picsum.photos/420/360?random=${i}`)
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