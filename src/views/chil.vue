<template>
  <div id="chil">
    chil
    <el-button @click="sendData" type="primary" plain >发送数据</el-button>
  </div>
</template>

<script>
    export default {
        name: "chil",
      data(){
        return{
          message:'你好',
          list:['zxc','asd','qwe'],
        }
      },
      methods:{
        sendData(){
          this.$emit('send',this.message,this.list)
        }
      }
    }
</script>

<style lang="scss" scoped>

</style>
