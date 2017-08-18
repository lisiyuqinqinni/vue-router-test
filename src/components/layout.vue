<template>
  <div class="layout">
    <header-nav></header-nav>
    <div class="brean">
      <router-link to="/" tag="span">首页</router-link>
      /
      <span :style="{color:'#97a8be'}">{{flag}}</span>
    </div>
    <transition mode="out-in">
      <router-view class="daxue"></router-view>
    </transition>
  </div>
</template>

<script>
import headerNav from '@/components/header'
let flags = {
  project: '我的项目',
  doc: '文档',
  workbench: '工作台'
}
export default {
  name: 'layout',
  data () {
    return {
      flag: ''
    }
  },
  watch: {
    $route () {
      this.flag = flags[this.$route.path.slice(1)]
    }
  },
  created () {
    this.flag = flags[this.$route.path.slice(1)]
  },
  // beforeRouteEnter (to, form, next) {
  //   next((vm) => {
  //     vm.flag = flags[to.path.slice(1)]
  //   })
  // },
  methods: {
  },
  components: {
    headerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.daxue{
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 50px;
}
.v-enter{
  opacity: 0;
}
.v-enter-to{
  opacity: 1;
}
.v-enter-active{
  transition: 1s;
}
.v-leave{
  opacity: 1;
}
.v-leave-to{
  opacity: 0;
}
.v-leave-active{
  transition: 1s;
}
</style>
