# yu-echarts

*vue版echarts*

### 安装
```
cnpm install yu-echarts --save
```

### 入口文件main.js引入插件
```javascript
import Vue from 'vue';
import yuEcharts from 'yu-echarts;   
Vue.use(yuEcharts);              //引入
```


### 各种图的使用：
```html
	<!-- 加type="xxx"属性,提供相应图表类型的基础配置 -->
	
	<!-- 折线图 -->
	<yu-echarts type="line" :option="option" @load="load"></yu-echarts> 
	
	<!-- 柱状图 -->
	<yu-echarts type="bar" :option="option" @load="load"></yu-echarts> 

	<!-- 饼图 -->
	<yu-echarts type="pie" :option="option" @load="load"></yu-echarts> 

	<!-- 散点图-直角坐标系 -->
	<yu-echarts type="scatterGrid" :option="option" @load="load"></yu-echarts> 
  
	<!-- 散点图-极坐标系 -->
	<yu-echarts type="scatterPolar" :option="option" @load="load"></yu-echarts>
  
	<!-- 散点图-地图坐标系 -->
	<yu-echarts type="scatterBmap" :option="option" @load="load"></yu-echarts>
	
  <!-- 涟漪散点图-地图坐标系 -->
  <yu-echarts type="effectScatter" :option="option" @load="load"></yu-echarts>
  
  <!-- 雷达图 -->
  <yu-echarts type="radar" :option="option" @load="load"></yu-echarts>
	
  <!-- 树状图 -->
  <yu-echarts type="tree" :option="option" @load="load"></yu-echarts>
  
	<!-- 矩形树状图 -->
	<yu-echarts type="treemap" :option="option" @load="load"></yu-echarts>
  
	<!-- 旭日图 -->
	<yu-echarts type="sunburst" :option="option" @load="load"></yu-echarts>
  
	<!-- 箱形图 -->
	<yu-echarts type="boxplot" :option="option" @load="load"></yu-echarts>
  
	<!-- k线图 -->
	<yu-echarts type="candlestick" :option="option" @load="load"></yu-echarts>
  
	<!-- 热力图 -->
	<yu-echarts type="heatmap" :option="option" @load="load"></yu-echarts>
  
	<!-- 地图 -->
	<yu-echarts type="map" :option="option" @load="load"></yu-echarts>
  
	<!-- 平行坐标系图 -->
	<yu-echarts type="parallel" :option="option" @load="load"></yu-echarts>
  
	<!-- 地图航线、路线图 -->
	<yu-echarts type="lines" :option="option" @load="load"></yu-echarts>
  
	<!-- 关系图 -->
	<yu-echarts type="graph" :option="option" @load="load"></yu-echarts>
  
	<!-- 桑基图 -->
	<yu-echarts type="sankey" :option="option" @load="load"></yu-echarts>
  
	<!-- 漏斗图 -->
	<yu-echarts type="funnel" :option="option" @load="load"></yu-echarts>
  
	<!-- 仪表盘图 -->
	<yu-echarts type="gauge" :option="option" @load="load"></yu-echarts>
  
	<!-- 象形柱图 -->
	<yu-echarts type="pictorialBar" :option="option" @load="load"></yu-echarts>
  
	<!-- 河流图 -->
	<yu-echarts type="themeRiver" :option="option" @load="load"></yu-echarts>
  
	<!-- 自定义图 -->
	<yu-echarts type="custom" :option="option" @load="load"></yu-echarts>
	
	<!-- 如果不用提供图表的基础配置，去除type属性 -->
	<yu-echarts :option="option" @load="load"></yu-echarts>
	
	<!-- 其他属性 -->
	<yu-echarts 
		width="auto" 				//图表宽度："auto"||"300px"||"100%"
		height="300px" 			//图表高度："300px"||"100%"
		renderer="canvas"		//用"canvas"||"svg"渲染图表
		theme=""						//主题： ""||{}
		devicePixelRatio=1	//设备像素比：不设置，则默认是window.devicePixelRatio
	></yu-echarts>
	
export default {
	data(){
		return {
			option:{}				<!-- echarts图表的配置，如果有type属性，则会提供相应图表的基础配置，并将基础配置合并到option -->
		}
	},
	methods:{
		load(chart){			<!-- load函数,图表元素加载完成后触发 -->
			<!-- chart是echarts的实例 -->
			<!-- 如需要设置option的配置,用vue的set响应式函数,如下： -->
			<!-- this.$set(this.option.xxx,'属性','值') -->
			<!-- this.$set(this.option.xxx.xxx,'属性','值') -->
		}
	}
}

```