import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAudioStateStore = defineStore('audioState', () => {
  

    interface Song {
        songId:number,
        songName:string,
        songSinger:string,
        songSignature:string,
        songSubmitTime:string,
        songImg:string,//url
        songImgLoad:boolean,
        songURL:string
    }

        // 播放状态类型
    interface playStateType  {

        // 当前播放歌曲位于播放列表的索引值
        index: number;
        // 播放 / 暂停
        play: boolean;
        
        // 歌曲时长
        duration: number;
        // 是否获取到时长
        isDuration: boolean;

        // 播放进度 0:0 
        progress: number;
        isDragProgress:false;

        // 音量
        volume: number;

        // 播放顺序
        playOrder: "along" | "random" | "loop";

        // 是否显示播放列表
        isShowList: boolean;
        //播放列表
        playList:Song[];

    };
  
    const playState = ref<playStateType>({
        index: 0,
        play: false,
        duration: 0,
        // 是否获取到时长
        isDuration: false,
        // 播放进度百分比 ( 0 - 1 )
        progress: 0,
        // 音量
        volume: 50,
        // 播放顺序
        playOrder: "loop",
        // 是否显示播放列表
        isShowList: false,
        //播放列表
        playList:[],
        isDragProgress:false
    });


    function test(){
        let song:Song={

            songId:1,
            songName:'花海',
            songSinger:'周杰伦',
            songSignature:'好听，温柔',
            songSubmitTime:'2024-9-30',
            songImg:`https://picsum.photos/420/360?random=${100}`,//url
            songImgLoad:false,
            songURL:'/src/assets/audio/周杰伦-花海.mp3'
        }
        playState.value.playList.push(song);
    }

  return { playState,test }
})