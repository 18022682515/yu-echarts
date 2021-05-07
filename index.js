/**
 * index.html的head增加script元素请求百度地图的api：
 * <script src="http://api.map.baidu.com/api?v=2.0&ak=9ML0NAxvQGKxiynyYHLDXyHWyZdhL9s2"></script>
 */

const chart = {
  install (Vue, options) {
    Vue.component('yuEcharts', res => require(['./echarts.vue'], res))
  }
}

export default chart
