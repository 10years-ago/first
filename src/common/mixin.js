import {debouce} from 'common/utils'
export const itemListenerMinxin = {
  data(){
    return{
      ImgListener: null
    }
  },
  mounted(){
    const refresh = debouce(this.$refs.scroll.refresh, 300)
    this.ImgListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.ImgListener)
  }
}