<template>
    <div id="index">
      <header>头部</header>
      <section>内容:
        Vue.use 会自动阻止多次注册相同插件，届时只会注册一次该插件。

        Vue.js 官方提供的一些插件 (例如 vue-router) 在检测到 Vue 是可访问的全局变量时会自动调用 Vue.use()。然而在例如 CommonJS 的模块环境中，你应该始终显式地调用 Vue.use()：

        // 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
        var Vue = require('vue')
        var VueRouter = require('vue-router')

        // 不要忘了调用此方法
        Vue.use(VueRouter)
        awesome-vue 集合了来自社区贡献的数以千计的插件和库。

        ← 渲染函数 & JSX 过滤器 →
        发现错误？想参与编辑？ 在 GitHub 上编辑此页！Vue.use 会自动阻止多次注册相同插件，届时只会注册一次该插件。

        Vue.js 官方提供的一些插件 (例如 vue-router) 在检测到 Vue 是可访问的全局变量时会自动调用 Vue.use()。然而在例如 CommonJS 的模块环境中，你应该始终显式地调用 Vue.use()：

        // 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
        var Vue = require('vue')
        var VueRouter = require('vue-router')

        // 不要忘了调用此方法
        Vue.use(VueRouter)
        awesome-vue 集合了来自社区贡献的数以千计的插件和库。

        ← 渲染函数 & JSX 过滤器 →
        发现错误？想参与编辑？ 在 GitHub 上编辑此页！Vue.use 会自动阻止多次注册相同插件，届时只会注册一次该插件。

        Vue.js 官方提供的一些插件 (例如 vue-router) 在检测到 Vue 是可访问的全局变量时会自动调用 Vue.use()。然而在例如 CommonJS 的模块环境中，你应该始终显式地调用 Vue.use()：

        // 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
        var Vue = require('vue')
        var VueRouter = require('vue-router')

        // 不要忘了调用此方法
        Vue.use(VueRouter)
        awesome-vue 集合了来自社区贡献的数以千计的插件和库。

        ← 渲染函数 & JSX 过滤器 →
        发现错误？想参与编辑？ 在 GitHub 上编辑此页！
        Vue.use 会自动阻止多次注册相同插件，届时只会注册一次该插件。

        Vue.js 官方提供的一些插件 (例如 vue-router) 在检测到 Vue 是可访问的全局变量时会自动调用 Vue.use()。然而在例如 CommonJS 的模块环境中，你应该始终显式地调用 Vue.use()：

        // 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
        var Vue = require('vue')
        var VueRouter = require('vue-router')

        // 不要忘了调用此方法
        Vue.use(VueRouter)
        awesome-vue 集合了来自社区贡献的数以千计的插件和库。

        ← 渲染函数 & JSX 过滤器 →
        发现错误？想参与编辑？ 在 GitHub 上编辑此页！
      </section>
      <footer>尾部</footer>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style lang="scss" scoped>
  $fontSize:37.5;
  @function px2Rem ($px){
    @return $px/$fontSize + rem;
  }

  #index{
    width:100%;
    /*height: 100%;*/
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    overflow: hidden;
    header{
      width:100%;
      font-size: 20px;
      height: px2Rem(60);
      background: aqua;
    }
    section{
      width:100%;
      flex: 1;
      overflow-y: auto;
      background: coral;
    }
    .content::-webkit-scrollbar{
      display: none;
    }
    footer{
      background: chartreuse;
      height: px2Rem(80);
      font-size: 20px;
    }
  }
</style>
