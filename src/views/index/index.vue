<template>
  <div id="index">
      我是第一个页面
      {{msgs}}
      <router-link to="secon">去第二个页面</router-link>
  </div>
</template>

<script>
  export default {
    name: "index",
    data(){
      return{
        msgs:'传值'
      }
    },
    destroyed(){
      this.$bus.$emit('send',this.msgs)
      //发送完成数据就销毁了发送数据的监听方法
      this.$bus.$off('send')
    }
  }
</script>

<style lang="scss" scoped>
  section{
    background: coral;
    display: flex;
    flex-flow: column;
    .left {
      display: flex;
      flex-flow: column;
      align-items: center;
    }
    .content{
      width:80%;
      /*flex:1;*/
      height: 100%;
      background: aquamarine;
    }
  }
  .box{
    width:100%;
    height: 100px;
    background: blue;
    color:#fff;
    a{
      color:#fff;
    }
  }
</style>
