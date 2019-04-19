<template>
  <div class="home-film">
    <van-swipe :autoplay="3000" indicator-color="white" :height="210">
      <van-swipe-item
        v-for="banner in bannerList"
        :key="banner.bannerId"
      ><img :src="banner.imgUrl" alt="" /></van-swipe-item>

   </van-swipe>
    <van-tabs v-model="curTab" @click ="onTabClick" sticky>
      <van-tab title="正在热映">
        <NowPlaying />
      </van-tab>
      <van-tab title="即将上映">内容 2</van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import NowPlaying from '@/components/NowPlaying.vue'
export default {
  components:{
    NowPlaying
  },
  data(){
    let curTab = this.$route.params.filmType === "nowPlaying"?0:1
    return{
      curTab:curTab
    }
  },
  computed: {
    ...mapState('film', [
      'bannerList'
    ])
  },
  methods: {
    ...mapActions('film', [
      'getBannerList'
    ]),
    onTabClick(index, title) {
     let filmType = index ===0 ? 'nowPlaying' : 'comingSoon';
     this.$router.replace({
       name: 'films',
       params: {
         filmType: filmType
       }
     })
    }
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
