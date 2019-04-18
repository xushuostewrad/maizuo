<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active"
    active-color="#ff5f16">
      <van-tabbar-item icon="home-o" :to="{ name:'films'}">电影</van-tabbar-item>
      <van-tabbar-item icon="search" :to="{ name:'cinemas'}">电影院</van-tabbar-item>
      <van-tabbar-item icon="friends-o" :to="{ name:'sales'}">特惠</van-tabbar-item>
      <van-tabbar-item icon="setting-o" :to="{ name:'center'}">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  data () {
    let active = this.$route.tabNumber
    return {
      active: active
    }
  }
}
</script>
