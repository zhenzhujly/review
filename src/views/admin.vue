<template>
    <div id="admin">
      <heade :msg="msg"></heade>
      <heade :list="list"></heade>
      <router-link to="/index">index</router-link>
      <section>
        <nav>
          <div v-for="(item, index) in route" class="left">
            <!--{{ item.nm }}-->
            <router-link v-for="child in item.children" :key="item.id" :to="{path:child.path}">
              {{child.nm}}
            </router-link>
          </div>
        </nav>
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
  name: 'admin',
  data(){
    return{
      route: this.$router.options.routes,
      msg:'我是第一个头部',
      list:['第二','第三','第四']
    }
  },
  components:{
    heade
  }
}
</script>

<style lang="scss" scope="scope">


  wh{
    width:100%;
    height: 100%;
  }
  section{
    background: coral;
    display: flex;
    /*justify-content: flex-start;*/
      nav{
       width:20%;
       height: 500px;
       background: chartreuse;
        .left {
          display: flex;
          flex-flow: column;
          align-items: center;
        }
     }
     .content{
       width:80%;
       /*flex:1;*/
       height: 100%;
       background: aquamarine;
     }
  }
</style>
