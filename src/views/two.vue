<template>
    <div id="two">
      two
      <div v-for="item in list">{{item}}</div>
      {{msg}}
      <chil @send="change"></chil>
    </div>
</template>

<script>
  import chil from './chil'
  export default {
      name: "two",
      components:{
        chil,
      },
      data(){
          return{
            msg:'',
            list:[]
          }
      },
      methods:{
        change(msg,list){
          this.msg = msg;
          this.list = list;
        }
      },
      mounted(){
        //生命周期中的挂载中   就是真实的DOM结构已经存在，自动执行
      }
    }
</script>

<style lang="scss" scoped>

</style>
