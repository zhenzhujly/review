<template>
    <div id="heade">
      <div>{{ msg }}</div>
      <div v-if="item != ''" v-for="item in list">{{item}}</div>
    </div>
</template>

<script>
export default {
  name: 'heade',
  //父传子
  props:['msg','list'],
  data(){
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
  #heade{
    width:100%;
    height:100px;
    background:cadetblue;
  }
</style>
