<template>
    <div id="chilss">
      我是发送数据
      <el-button @click="sendData2" type="primary" plain >同级发送数据</el-button>
    </div>
</template>

<script>
  import eventBus from '../eventBus'
    export default {
        name: "chilss",
      data(){
          return{
            msg:'zxcvbnm'
          }
      },
      methods:{
        sendData2(){
          // console.log(this)
          eventBus.$emit('send',this.msg)
        }
      },
      mounted(){
          // this.sendData2();
      }
    }
</script>

<style scoped>

</style>
