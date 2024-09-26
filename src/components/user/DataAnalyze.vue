<script setup lang="ts">

import { onMounted } from 'vue';
import { useUSerStore } from '../../../stores/userStore';
import * as echarts from 'echarts';

const userStore=useUSerStore()
userStore.initUserMessage()

onMounted(()=>{
    const listenWeek = echarts.init(document.getElementById('echarts-listenWeek'));
    const listenRank = echarts.init(document.getElementById('echarts-listenRank'));
    // 指定图表的配置项和数据
    let optionWeek = {
        title: {
          text: '听歌时长'
        },
        tooltip: {},
        legend: {
          data: ['时长/min']
        },
        xAxis: {
            
            data: [
            userStore.listenTimeWeek[0].day,
            userStore.listenTimeWeek[1].day,
            userStore.listenTimeWeek[2].day,
            userStore.listenTimeWeek[3].day,
            userStore.listenTimeWeek[4].day,
            userStore.listenTimeWeek[5].day,
            userStore.listenTimeWeek[6].day,

            ]
        },
        yAxis: {},
        series: [
          {
            name: '时长/min',
            type: 'line',
            data: [
                userStore.listenTimeWeek[0].listenTime,
                userStore.listenTimeWeek[1].listenTime,
                userStore.listenTimeWeek[2].listenTime,
                userStore.listenTimeWeek[3].listenTime,
                userStore.listenTimeWeek[4].listenTime,
                userStore.listenTimeWeek[5].listenTime,
                userStore.listenTimeWeek[6].listenTime,
            ]
          }
        ]
    };

    let rankValue:Array<{}>=[]
    let rankName:string[]=[]
    userStore.listenRank.forEach((rank)=>{
        rankValue.push({
            value:rank.time,
            name:rank.songMessage.songName
        });
        rankName.push(rank.songMessage.songName)
    })
    let optionRank = {
      legend: {
        orient: 'vertical',
        x: 'left',
        data: rankName,
      },
      series: [
        {
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '30',
              fontWeight: 'bold'
            }
          },
          data: rankValue
        }
      ]
    };

      // 使用刚指定的配置项和数据显示图表。
      listenWeek.setOption(optionWeek);
      listenRank.setOption(optionRank);
})

</script>

<template>
    <div class="analyse-layout">
        
        <div id="echarts-listenRank" style="width: 600px;height:400px;"></div>
        <div id="echarts-listenWeek" style="width: 600px;height:400px;"></div>
    </div>
    
 
</template>

<style scoped>

</style>
