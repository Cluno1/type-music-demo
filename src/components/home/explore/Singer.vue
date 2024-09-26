<script setup lang="ts">

interface song {
                songName:string,
                songSinger:string,
                songSignatures:string,
                songSubmitTimes:string,
                songImgs:string//url
            }

function testSongs(){
    for()
}


</script>

<template>
    <div class="test-layout">
        <div> 无限下拉歌曲库</div>
        <div class="abc"> 


            <div 
                class="abc-item grid-layout-item"
                   
            >
                    <img class="abc-item-img">
                    <div class="abc-item-songMessage"> 
                            <div class="song-name"></div> 
                            <div class="song-singer"> </div>
                            <div class="song-signature"> </div>
                            <div class="song-submit-time"> </div>
                            
                    </div>
                    
                </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .abc{
        width: 45rem;
        min-height: 90vh;
        background-color: #c6a2a258;
    }

</style>
