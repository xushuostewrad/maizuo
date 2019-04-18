<template>
  <div class="home-film">
    <van-swipe :autoplay="3000" indicator-color="white" :height="210">
      <van-swipe-item
        v-for="banner in bannerList"
        :key="banner.bannerId"
      ><img :src="banner.imgUrl" alt="" /></van-swipe-item>

   </van-swipe>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState('film', [
      'bannerList'
    ])
  },
  methods: {
    ...mapActions('film', [
      'getBannerList'
    ])
  },
  created () {
    this.$toast(' 提示内容 ')
    this.getBannerList()
  }
}
</script>

<style lang="less">
  .van-swipe{
    img {
      height:100%;
    }
  }
</style>
