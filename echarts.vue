<template>
<div class="echarts" :style="{ width,height }"></div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts/extension/bmap/bmap.js'
import config from './config.js'

export default {
  name: 'echarts',
  props: {
    type: {
      type: String,
      default: ''
    },
    theme: {
      type: [String, Object],
      default: ''
    },
    devicePixelRatio: {
      type: Number
    },
    renderer: {
      type: String
    },
    width: {
		  type: String,
		  default: 'auto'
    },
    height: {
		  type: String,
		  default: '300px'
    },
    option: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      baseOption: config[this.type] || {},
      chart: null
    }
  },
  watch: {
    option: {
		  handler (n) {
		    this.baseOption = Object.assign({}, this.baseOption, n)
		  },
		  deep: true
    },
	  baseOption (n) {
	    this.chart.setOption(n)
	  }
  },
  mounted () {
    new Promise(resolve => {
      const o = {}
      this.devicePixelRatio && (o.devicePixelRatio = this.devicePixelRatio)
      this.renderer && (o.renderer = this.renderer)
      this.chart = echarts.init(this.$el, this.theme, o)
      if (this.option.geo) {
			  import('./map/china.json').then(geoJson => {
			    echarts.registerMap('china', geoJson)
			    resolve()
			  })
      } else if (this.type === 'map') {
			  import('./map/HK.json').then(geoJson => {
			    echarts.registerMap('HK', geoJson)
          resolve()
			  })
      } else {
        resolve()
      }
    }).then(() => {
      this.baseOption = Object.assign({}, this.baseOption, this.option)
      this.$emit('load', this.chart)
      window.addEventListener('resize', this.chart.resize)
    })
  }
}
</script>

<style scoped lang="less">

</style>
