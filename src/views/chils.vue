<template>
    <div id="chils">
      接收数据 :{{msg}}
    </div>
</template>

<script>
  import eventBus from '../eventBus'
    export default {
        name: "chils",
      data(){
          return{
            msg:''
          }
      },
      methods:{
          change(){
            var that = this;
            eventBus.$on('send',function (msg) {
              that.msg = msg;
              // console.log(that.msg);
            })
          }
      },
      mounted(){
        this.change();
      }
    }
</script>

<style  scoped>

</style>
