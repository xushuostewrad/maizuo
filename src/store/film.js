import axios from 'axios'
import { Toast } from 'vant'
const state = {
  bannerList: [], // 录播图数据|
  filmList:[]
}
const mutations = {
  setBannerList (state, list) {
    state.bannerList = list
  },
  setFilmList (state, list){
    state.filmList = list
  }

}
const actions = {
/*
*/
  getBannerList ({ commit }) {
    axios.get('https://m.maizuo.com/gateway', {
      params: {
        type: 2,
        cityId: 440300,
        k: 9812406
      },
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1554878923115964117060"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
      Toast.loading({
        loadingType: 'spinner',
        duration: 0,
        message: ' 弟弟救我',
        forbidClick: true
      })
      let result = res.data
      if (result.status === 0) {
        commit('setBannerList', result.data)
      } else {
        Toast(result.msg)
      }
      Toast.clear()
    }).catch(error => {
      Toast.clear()
      Toast(error.message)
    })
  },
  getFilmList({ commit }){
    Toast.loading({
      loadingType: 'spinner',
      duration: 0,
      forbidClick: true
    })
    axios.get('https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=5024645',
    {
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1554878923115964117060"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      let result = res.data
      if (result.status === 0) {
        commit('setFilmList',result.data.films)
      }else{
        Toast(result.msg)
      }
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
