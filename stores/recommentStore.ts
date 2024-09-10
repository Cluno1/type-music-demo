import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useRecommentStore = defineStore('recommentStore', () => {
  const recomment = reactive({
    song:[{
        songName:'',
        songAuthor:['',''],
        songSinger:'',
        songPicture:'',
        songMessage:'',
        songTags:['']
        },
    ],
    singer:[
        {
            singerName:'',
            singerPicture:'',
            singerMessage:'',
            singerSongs:[],
            singerTags:[]

        },
    ],
    radio:[
        {
            radioId:'',
            radioMessage:'',
            radioPicture:'',
            radioNumber:1,
            radioRooter:'',
            radioTags:[]

        }
    ],
    songList:[{
        songListName:'',
        songListAuthor:'',
        songListPicture:'',
        songListMessage:'',
        songListNumber:10,
        songListTags:[]
    }]
  })

  const refleshSong=()=>{
    //axios
    recomment.song=[{
        songName:'我好像在哪里见过你',
        songAuthor:['薛之谦','薛之谦'],
        songSinger:'Aber',
        songPicture:'/src/assets/temp/moonNight.png',
        songMessage:'超级喜欢哒哒哒哒哒哒',
        songTags:['温柔','安静']
        },
        {
            songName:'花海',
            songAuthor:['方文山','周杰伦'],
            songSinger:'周杰伦',
            songPicture:'/src/assets/temp/xiao.png',
            songMessage:'这是一首我的高四起床歌',
            songTags:['告白','灿烂']
        },
            {
                songName:'小情歌',
                songAuthor:['undefined','undefined'],
                songSinger:'吴青峰',
                songPicture:'/src/assets/temp/spring.jpg',
                songMessage:'very a  man ',
                songTags:['man','2019']
            },
    ]
  }

  return { recomment,refleshSong }
})