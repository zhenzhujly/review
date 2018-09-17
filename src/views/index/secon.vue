<template>
    <div id="secon">
      我是第二个页面
      {{ msgs}}
    </div>
</template>

<script>
  export default {
        name: "secon",
      data(){
          return{
            msgs:''
          }
      },
      methods:{
          // getData(){
          //   var that = this;
          //   eventBus.$on('send',function (msgs) {
          //     eventBus.msgs=msgs;
          //   })
          // }
      },
    created(){
      var that = this;
      this.$bus.$on('send',function (msgs) {
         that.msgs=msgs;
      })
    },
    }
</script>

<style scoped>

</style>
