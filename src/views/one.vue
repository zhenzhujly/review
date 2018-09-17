<template>
    <div id="one">
      <heade :msg="msg">123</heade>
      <heade :list="list"></heade>
      <section>
          one
          <div v-for="(item, index) in route">
            <div v-for="child in item.children">
            <!--{{ item.nm }}-->
              <router-link v-for="childs in child.children" :key="item.id" :to="{path:childs.path}">
                {{childs.nm}}
              </router-link>
            </div>
          </div>
        <div class="content">
          <router-view></router-view>
          <!--123-->
        </div>
      </section>
    </div>
</template>

<script>
  import heade from '../components/heade'
    export default {
        name: "one",
      components:{
        heade
      },
      data(){
        return{
          route: this.$router.options.routes,
          msg:'父级',
          list:['zxc','asd','qwe'],
        }
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
