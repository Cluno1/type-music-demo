<script setup lang="ts">
import { onMounted, ref } from 'vue';
import fabric from "fabric"

let test= async () => {
 
  const canvas = document.getElementById('canvas');
  const canvasCtx = canvas.getContext('2d');

  let stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });

  // 创建 AudioContext
  var audioCtx = new AudioContext();
  var source = audioCtx.createMediaStreamSource(stream);
  //分析结点
  var analyser = audioCtx.createAnalyser();
  //gainNode
  var gainNode=audioCtx.createGain()
  

  source.connect(gainNode)
  gainNode.connect(analyser)

  //smoothingTimeConstantg
  analyser.smoothingTimeConstant = 1;
  analyser.fftSize = 2048;
  //点 数量
  var bufferLength = analyser.frequencyBinCount;
  //所有点数字
  var dataArray = new Uint8Array(bufferLength);

  // 设置Canvas的宽度和高度
  canvas.width = 400;
  canvas.height = 400; // 假设波形高度为200px

  // 绘制函数
function draw() {
  gainNode.gain.setValueAtTime(10, audioCtx.currentTime);
  // 获取当前音频时间域数据，并将其存储在dataArray中
  // dataArray是一个Uint8Array，其值范围从0到255
  analyser.getByteTimeDomainData(dataArray);

  // // 设置画布背景颜色为白色，并填充整个画布
  // canvasCtx.fillStyle = 'rgb(255, 255, 255)';
  // canvasCtx.fillRect(0, 0, canvas.width, canvas.height);
  canvasCtx.clearRect(0, 0, canvas.width, canvas.height);


  // 设置线条宽度为2像素
  canvasCtx.lineWidth = 2;
  // 设置线条颜色为黑色
  canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

  // 开始一个新的路径，用于绘制波形
  canvasCtx.beginPath();

  // 计算每个数据点在画布上的宽度
  var sliceWidth = canvas.width * 1.0 / bufferLength;
  // 初始化x坐标，用于绘制波形
  var x = 0;

  // 遍历dataArray中的每个数据点
  for (var i = 0; i < bufferLength; i++) {
    // 将dataArray中的数据标准化到-1到1的范围内
    var v = dataArray[i] / 128.0 - 1;

    // //自己实现的滤波
    // if(v>-0.01&&v<0.01){
    //   v=0
    // }else if(v>0.9||v<-0.9){
    //   v=0
    // }

    // v=v*3
    // 将标准化后的数据映射到画布的高度上，并放大到画布高度的一半
    var y = (v * canvas.height/2) + canvas.height/2;

    // 对于第一个数据点，使用moveTo方法开始路径
    if (i === 0) {
      canvasCtx.moveTo(x, y);
    } else {
      // 对于后续的数据点，使用lineTo方法继续路径
      canvasCtx.lineTo(x, y);
    }
    // 更新x坐标，为下一个数据点做准备
    x += sliceWidth;
  }

  // 从最后一个数据点绘制一条线到画布的右侧中央
  canvasCtx.lineTo(canvas.width, canvas.height / 2);
  // 绘制线条，完成波形的绘制
  canvasCtx.stroke();

  // 使用requestAnimationFrame递归调用draw函数，创建一个动画循环
  requestAnimationFrame(draw);
};


  // 开始绘制
  draw();
}


const recorderBlob=ref([] as Blob[])

let audio={
  stream:null,
  audioCtx:null,
  source:null,
  analyserNode:null,
  gainNode:null,
  destinationNode:null,
  mediaRecorder:null,
  chunks:[],
  
  clear(){
    this.stream=null
    this.audioCtx=null
    this.source=null
    this.analyserNode=null
    this.gainNode=null
    this.destinationNode=null
    this.mediaRecorder=null
    this.chunks=[]
    
  },
  async recordStart(){
    
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    this.audioCtx= new AudioContext();
    this.source = this.audioCtx.createMediaStreamSource(this.stream);
    
    //gainNode
    this.gainNode=this.audioCtx.createGain()
    this.source.connect(this.gainNode)
    //分析结点
    this.analyserNode = this.audioCtx.createAnalyser();
    this.gainNode.connect(this.analyserNode)
    
    //destination
    this.destinationNode=this.audioCtx.createMediaStreamDestination();
    this.analyserNode.connect(this.destinationNode);
    //recoder
    this.mediaRecorder=new MediaRecorder(this.destinationNode.stream)
    
    
    this.mediaRecorder.ondataavailable=(event)=>{
      this.chunks.push(event.data)
    }
    this.mediaRecorder.onstop=()=>{
      
      const blob=new Blob(this.chunks,{type:'audio/ogg;codecs=opus'})
      recorderBlob.value.push(blob)
      // //创建链接并模拟点击下载
      // const audioURL=window.URL.createObjectURL(blob);
      // const link=document.createElement('a');
      // link.href=audioURL;
      // link.download='title'//title
      // document.body.appendChild(link);
      // link.click()
      // document.body.removeChild(link);
      // window.URL.revokeObjectURL(audioURL)
    }
    this.mediaRecorder.start()

  },

  recordStop(){
    //source disconnection

    //stop media
    this.stream.getAudioTracks().forEach(track=>track.stop());

    //close context
    this.audioCtx.close()
    this.mediaRecorder.stop()
    this.clear()
    
  }, 
  audioPlay(audioBlob,index){
  const canvas=document.querySelector('.recorder-item-'+index+' #canvas')
  const canvasCtx = canvas.getContext('2d');

  }
}



</script>

<template>
  <div class="create-layout">
    <h2>a cappella Create</h2>
    <div class="create-button"> 
      <el-button @click="()=>audio.recordStart()">添加 </el-button>
      <el-button @click="()=>audio.recordStop()">停止</el-button>
      <el-button @click="console.log('yet to write something')">导出</el-button>
    </div>

    <div class="record">
      <div 
      v-for="(audioBlob,index) in recorderBlob"
      :key="index"
      class=" record-item "
      :id="'record-item-'+index"
      >
        <div class="item-title"> 
          <h4> title </h4>
          <el-button @click="audioPlay(audioBlob,index)">播放</el-button>
          <el-button>音量</el-button>
          <el-button>删除</el-button>
        </div>
        <canvas id="canvas" width="200" height="100"></canvas>
      </div>
    </div>
    
    
  </div>
</template>

<style lang="scss" scoped>
.create-layout{
  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 1rem;
}
.create-button{
  display: flex;
  gap: 1rem;
}
.record{
  padding: 1rem;
  background-color: #d75e5e8b;
  min-height: 40rem;
  min-width: 40rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  .record-item{
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #84b0e370;
    .item-title{
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
  }

}
  
</style>
