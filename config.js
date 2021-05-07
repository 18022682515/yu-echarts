import * as echarts from 'echarts'

const line = {
  tooltip: {},
  grid: {},
  xAxis: {
    type: 'category',
    data: ['类目1', '类目2', '类目3']
    /* 系列的data[n][0]是索引值，当索引值是1时，对应类目2 */
  },
  yAxis: {},
  series: [{
    type: 'line',
    data: [
      [0, 2],
      [1, 4],
      [2, 3]
    ]
  }]
}

const bar = {
  tooltip: {},
  grid: {},
  xAxis: {
    type: 'category',
    data: ['类目1', '类目2', '类目3', '类目4']
    /* 系列的data[n][0]是索引值，当索引值是1时，对应类目2 */
  },
  yAxis: {},
  series: [{
    type: 'bar',
    data: [
      [0, 2],
      [1, 4],
      [2, 3],
			[3, 3]
    ]
  }]
}

const pie = {
  tooltip: {},
  series: [{
    type: 'pie',
    radius: '50%', // 饼图半径,值类型：150|'50%'|[150,'50%']
    center: ['10%', '50%'], // 饼图的中心坐标
    data: [{
      name: 'a',
      value: 5
    },
    {
      name: 'b',
      value: 15
    },
    {
      name: 'c',
      value: 7
    },
    {
      name: 'd',
      value: 25
    }
    ]
  }]
}

const scatterGrid = {
  tooltip: {},
  grid: {},
  xAxis: {},
  yAxis: {},
  series: [{
    type: 'scatter',
    symbolSize: 20, // 散点大小
    data: [
      /* [x轴,y轴] */
      [10.0, 8.04],
      [8.0, 6.95],
      [13.0, 7.58]
    ]
  }]
}

const scatterPolar = {
  polar: {},
  tooltip: {},
  angleAxis: { // 角度轴
    type: 'category',
    data: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
    boundaryGap: false,
    splitLine: {
      show: true,
      lineStyle: {
        color: '#999',
        type: 'dashed'
      }
    },
    axisLine: {
      show: false
    }
  },
  radiusAxis: { // 径向轴
    type: 'value',
    min: 0,
    max: 6,
    splitNumber: 6,
    axisLine: {
      show: false
    },
    axisTick: {
      alignWithLabel: true
    }
  },
  series: [{
    name: 'name',
    type: 'scatter',
    coordinateSystem: 'polar',
    /* data:[[径向轴,角度轴],……] */
    data: [
      [3, 0],
      [5, 1],
      [2, 2]
    ]
  }]
}

const scatterBmap = {
  title: {
    text: '地图',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  bmap: {
    center: [121.15, 31.89], // 当前的地图中心点
    zoom: 5,
    roam: true,
    mapStyle: { // 设置地图样式
      styleJson: [{
        featureType: 'water', // 设置海水的样式
        elementType: 'all',
        stylers: {
          color: '#d1d1d1'
        }
      }]
    }
  },
  series: [{
    name: 'pm2.5',
    type: 'scatter',
    coordinateSystem: 'bmap',
    data: [{
      name: '海门',
      value: [121.15, 31.89]
    },
    {
      name: '鄂尔多斯',
      value: [109.781327, 39.608266]
    },
    {
      name: '招远',
      value: [120.38, 37.35]
    }
    ],
    label: {
      formatter: '{b}',
      position: 'right',
      show: true
    }
  }]
}

const effectScatter = {
  title: {
    text: '地图',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  bmap: {
    center: [121.15, 31.89],
    zoom: 5,
    roam: true,
    mapStyle: {
      styleJson: [{
        featureType: 'water',
        elementType: 'all',
        stylers: {
          color: '#d1d1d1'
        }
      }]
    }
  },
  series: [{
    name: 'Top 5',
    type: 'effectScatter',
    coordinateSystem: 'bmap',
    data: [{
      name: '海门',
      value: [121.15, 31.89]
    },
    {
      name: '鄂尔多斯',
      value: [109.781327, 39.608266]
    },
    {
      name: '招远',
      value: [120.38, 37.35]
    }
    ],
    hoverAnimation: true,
    label: {
      formatter: '{b}',
      position: 'right',
      show: true
    },
    itemStyle: {
      color: 'purple',
      shadowBlur: 10,
      shadowColor: '#333'
    },
    zlevel: 1
  }]
}

const radar = {
  backgroundColor: '#161627',
  title: {
    text: 'AQI - 雷达图',
    left: 'center',
    textStyle: {
      color: '#eee'
    }
  },
  tooltip: {},
  radar: {
    indicator: [{
      name: 'a',
      max: 100
    },
    {
      name: 'b',
      max: 200
    },
    {
      name: 'c',
      max: 300
    },
    {
      name: 'd',
      max: 400
    },
    {
      name: 'e',
      max: 500
    },
    {
      name: 'f',
      max: 600
    }
    ],
    shape: 'circle',
    splitNumber: 5
  },
  visualMap: {
    type: 'piecewise',
    show: true,
    min: 0,
    max: 3,
    splitNumber: 3,
    dimension: 6,
    inRange: {
      color: '#F9713C',
      colorLightness: [0.2, 0.8]
    }
  },
  series: [{
    name: '广州',
    type: 'radar',
    lineStyle: {
      normal: {
        width: 1,
        opacity: 0.5
      }
    },
    data: [
      /* value:[ 'a','b','c','d','e','f' ] 对应indicator的item */
      {
        name: '7月',
        value: [100, 55, 55, 55, 55, 55, 1]
      },
      {
        name: '8月',
        value: [55, 200, 55, 55, 55, 55, 2]
      },
      {
        name: '9月',
        value: [55, 55, 300, 55, 55, 55, 3]
      }
    ],
    symbol: 'none',

    areaStyle: {
      opacity: 0.5
    },
    itemStyle: {
      color: '#F9713C'
    }
  }]
}

const tree = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [{
    type: 'tree',
    orient: 'vertical',
    expandAndCollapse: true,
    animationDurationUpdate: 750,
    label: {
      position: 'top',
      rotate: -90,
      verticalAlign: 'middle',
      align: 'right',
      fontSize: 9
    },
    leaves: {
      label: {
        position: 'bottom',
        rotate: -90,
        verticalAlign: 'middle',
        align: 'left'
      }
    },
    data: [{ // 注意，最外层是一个对象，代表树的根节点
      name: '树根', // 节点的名称，当前节点 label 对应的文本
      children: [{
        name: '树枝',
        value: 2116, // value 值，只在 tooltip 中显示
        collapsed: null, // 如果为 true，表示此节点默认折叠。
        children: [ // children不为空数组，称为树枝
          {
            name: '树叶',
            value: 1116, // value 值，只在 tooltip 中显示
            collapsed: null, // 如果为 true，表示此节点默认折叠。
            children: [] // //children为空数组，称为树叶
          },
          {
            name: '树叶',
            value: 2116, // value 值，只在 tooltip 中显示
            collapsed: null, // 如果为 true，表示此节点默认折叠。
            children: []
          }
        ]
      },
      {
        name: '树叶',
        value: 1116, // value 值，只在 tooltip 中显示
        collapsed: null, // 如果为 true，表示此节点默认折叠。
        children: []
      }
      ]
    }]
  }]
}

const treemap = {
  title: {
    text: '楼盘布局',
    subtext: '2019/04',
    left: 'leafDepth'
  },
  tooltip: {},
  series: [{
    name: '楼盘整体',
    type: 'treemap',
    visibleMin: 300,
    data: [{
      name: '一期',
      value: 5000,
      children: [{
        name: 'A座', // 显示在矩形中的描述文字。
        value: 2500, // value字段的值，对应到面积大小。
        children: [{
          name: 'A座一栋',
          value: 1200,
          children: [{
            name: 'A座一栋一单元',
            value: 1200,
            children: []
          }]
        },
        {
          name: 'A座二栋',
          value: 1300,
          children: []
        }
        ]
      },
      {
        name: 'B座',
        value: 2500,
        children: [{
          name: 'B座一栋',
          value: 1300,
          children: [{
            name: 'B座一栋一单元',
            value: 1300,
            children: []
          }]
        },
        {
          name: 'B座二栋',
          value: 1200,
          children: []
        }
        ]
      }
      ]
    },
    {
      name: '二期规划中',
      value: 5000
    }
    ],
    leafDepth: 3,
    levels: [{
      itemStyle: {
        borderColor: '#555',
        borderWidth: 4,
        gapWidth: 4
      }
    },
    {
      colorSaturation: [0.3, 0.6],
      itemStyle: {
        borderColorSaturation: 0.7,
        gapWidth: 2,
        borderWidth: 2
      }
    },
    {
      colorSaturation: [0.3, 0.5],
      itemStyle: {
        borderColorSaturation: 0.6,
        gapWidth: 1
      }
    },
    {
      colorSaturation: [0.3, 0.5]
    }
    ]
  }]
}

const sunburst = {
  tooltip: {},
  series: {
    radius: ['15%', '80%'],
    type: 'sunburst',
    sort: null,
    highlightPolicy: 'ancestor',
    data: [{
      name: 'parent1',
      children: [{
        value: 5,
        name: 'child1',
        itemStyle: {
          color: '#F54F4A'
        },
        children: [{
          value: 2,
          name: 'grandchild1',
          itemStyle: {
            color: '#FF8C75'
          }
        }]
      },
      {
        value: 3,
        name: 'child2',
        itemStyle: {
          color: '#FFB499'
        }
      }
      ]
    },
    {
      name: 'parent2',
      value: 4
    }
    ],
    label: {
      rotate: 'radial'
    },
    levels: [],
    itemStyle: {
      color: '#ddd',
      borderWidth: 2
    }
  }
}

const boxplot = {
  title: [{
    text: 'Michelson-Morley Experiment',
    left: 'center'
  }],
  tooltip: {},
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    data: ['a', 'b', 'c']
    /* a对应系列的data[0]的数据,b对应系列的data[1]的数据,…… */
  },
  yAxis: {
    type: 'value',
    name: 'y轴name'
  },
  series: [{
    name: 'boxplot',
    type: 'boxplot',
    tooltip: {
      formatter: function (param) {
        const arr = Array.from(param.data).sort((a, b) => b - a)
        return [
          'name ' + param.name + ': ',
          'max: ' + arr[0],
          'Q3: ' + arr[1],
          'median: ' + arr[2],
          'Q1: ' + arr[3],
          'min: ' + arr[4]
        ].join('<br/>')
      }
    },
    data: [
      /* ['min','Q1','median','Q3','max']数组的length不能小于5 */
      [850, 740, 900, 1070, 930],
      [960, 940, 960, 940, 880],
      [880, 880, 880, 860, 720]
    ]
  }]
}

const candlestick = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {
    data: ['日K']
  },
  grid: {
    left: '10%',
    right: '10%',
    bottom: '15%'
  },
  xAxis: {
    type: 'category',
    data: ['2013/1/26', '2013/1/27', '2013/1/28', '2013/1/29', '2013/1/30', '2013/1/31', '2013/2/1', '2013/2/2',
      '2013/2/3', '2013/2/4', '2013/2/4', '2013/2/5', '2013/2/6', '2013/2/7', '2013/2/8', '2013/2/9', '2013/2/10',
      '2013/2/11', '2013/2/12', '2013/2/13', '2013/2/14', '2013/2/15', '2013/2/16', '2013/2/17', '2013/2/18',
      '2013/2/19', '2013/2/20', '2013/2/21', '2013/2/22', '2013/2/23'
    ],
    scale: true
  },
  yAxis: {
    scale: true,
    splitArea: {
      show: true
    }
  },
  dataZoom: [{
    type: 'inside',
    start: 50,
    end: 100
  },
  {
    show: true,
    type: 'slider',
    top: '90%',
    start: 50,
    end: 100
  }
  ],
  series: [{
    name: '日K',
    type: 'candlestick',
    data: [
      [2179.05, 2205.5, 2179.05, 2222.81],
      [2212.5, 2231.17, 2212.5, 2236.07],
      [2227.86, 2235.57, 2219.44, 2240.26],
      [2242.39, 2246.3, 2235.42, 2255.21],
      [2246.96, 2232.97, 2221.38, 2247.86],
      [2179.05, 2205.5, 2179.05, 2222.81],
      [2212.5, 2231.17, 2212.5, 2236.07],
      [2227.86, 2235.57, 2219.44, 2240.26],
      [2242.39, 2246.3, 2235.42, 2255.21],
      [2246.96, 2232.97, 2221.38, 2247.86],
      [2179.05, 2205.5, 2179.05, 2222.81],
      [2212.5, 2231.17, 2212.5, 2236.07],
      [2227.86, 2235.57, 2219.44, 2240.26],
      [2242.39, 2246.3, 2235.42, 2255.21],
      [2228.82, 2246.83, 2225.81, 2247.67],
      [2247.68, 2241.92, 2231.36, 2250.85],
      [2238.9, 2217.01, 2205.87, 2239.93],
      [2217.09, 2224.8, 2213.58, 2225.19],
      [2221.34, 2251.81, 2210.77, 2252.87],
      [2249.81, 2282.87, 2248.41, 2288.09],
      [2286.33, 2299.99, 2281.9, 2309.39],
      [2297.11, 2305.11, 2290.12, 2305.3],
      [2303.75, 2302.4, 2292.43, 2314.18],
      [2293.81, 2275.67, 2274.1, 2304.95],
      [2281.45, 2288.53, 2270.25, 2292.59],
      [2286.66, 2293.08, 2283.94, 2301.7],
      [2293.4, 2321.32, 2281.47, 2322.1],
      [2323.54, 2324.02, 2321.17, 2334.33],
      [2316.25, 2317.75, 2310.49, 2325.72],
      [2320.74, 2300.59, 2299.37, 2325.53]
    ],
    itemStyle: {
      color: '#ec0000',
      color0: '#00da3c',
      borderColor: '#8A0000',
      borderColor0: '#008F28'
    },
    markPoint: {
      data: [{
        name: 'XX标点',
        coord: ['2013/2/23', 2320],
        value: 2320,
        itemStyle: {
          color: 'rgb(41,60,85)'
        }
      },
      {
        name: '最大值标记',
        type: 'max'
      },
      {
        name: '最小值标记',
        type: 'min'
      },
      {
        name: '平均值标记',
        type: 'average'
      }
      ],
      tooltip: {}
    },
    markLine: {
      symbol: ['none', 'none'],
      data: [
        [{
          name: '最小值标记线(斜线)',
          type: 'min',
          label: {
            show: false
          }
        },
        {
          name: '最大值标记线(斜线)',
          type: 'max'
        }
        ],
        {
          name: '最小值标记线(横线)',
          type: 'min'
        },
        {
          name: '最大值标记线(横线)',
          type: 'max'
        }
      ]
    }
  }]
}

const heatmap = {
  tooltip: {
    position: 'bottom'
  },
  animation: false,
  grid: {
    height: '50%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: ['1a', '2a', '3a', '4a', '5a', '6a', '7a'],
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: ['Saturday', 'Friday', 'Thursday',
      'Wednesday', 'Tuesday', 'Monday', 'Sunday'
    ],
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 50,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '15%'
  },
  series: [{
    name: 'Punch Card',
    type: 'heatmap',
    data: [
      /* [x轴,y轴,value] */
      [0, 0, 5],
      [1, 2, 10],
      [2, 4, 1],
      [3, 1, 20],
      [4, 3, 30],
      [5, 6, 40],
      [6, 5, 30]
    ],
    label: {
      show: true
    }
  }]
}

const map = {
  title: {
    text: '香港18区人口密度 （2011）',
    subtext: '人口密度数据来自Wikipedia',
    sublink: 'http://zh.wikipedia.org/wiki/%E9%A6%99%E6%B8%AF%E8%A1%8C%E6%94%BF%E5%8D%80%E5%8A%83#cite_note-12'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{b}<br/>{c} (p / km2)'
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      dataView: {
        readOnly: false
      },
      restore: {},
      saveAsImage: {}
    }
  },
  visualMap: {
    min: 800,
    max: 50000,
    text: ['High', 'Low'],
    realtime: false,
    calculable: true,
    inRange: {
      color: ['lightskyblue', 'yellow', 'orangered']
    }
  },
  series: [{
    name: '香港18区人口密度',
    type: 'map',
    mapType: 'HK', // 自定义扩展图表类型
    label: {
      show: true
    },
    data: [{
      name: '中西区',
      value: 20057.34
    },
    {
      name: '湾仔',
      value: 15477.48
    },
    {
      name: '东区',
      value: 31686.1
    },
    {
      name: '南区',
      value: 6992.6
    },
    {
      name: '油尖旺',
      value: 44045.49
    },
    {
      name: '深水埗',
      value: 40689.64
    },
    {
      name: '九龙城',
      value: 37659.78
    },
    {
      name: '黄大仙',
      value: 45180.97
    },
    {
      name: '观塘',
      value: 55204.26
    },
    {
      name: '葵青',
      value: 21900.9
    },
    {
      name: '荃湾',
      value: 4918.26
    },
    {
      name: '屯门',
      value: 5881.84
    },
    {
      name: '元朗',
      value: 4178.01
    },
    {
      name: '北区',
      value: 2227.92
    },
    {
      name: '大埔',
      value: 2180.98
    },
    {
      name: '沙田',
      value: 9172.94
    },
    {
      name: '西贡',
      value: 3368
    },
    {
      name: '离岛',
      value: 806.98
    }
    ],
    // 自定义名称映射
    nameMap: {
      'Central and Western': '中西区',
      Eastern: '东区',
      Islands: '离岛',
      'Kowloon City': '九龙城',
      'Kwai Tsing': '葵青',
      'Kwun Tong': '观塘',
      North: '北区',
      'Sai Kung': '西贡',
      'Sha Tin': '沙田',
      'Sham Shui Po': '深水埗',
      Southern: '南区',
      'Tai Po': '大埔',
      'Tsuen Wan': '荃湾',
      'Tuen Mun': '屯门',
      'Wan Chai': '湾仔',
      'Wong Tai Sin': '黄大仙',
      'Yau Tsim Mong': '油尖旺',
      'Yuen Long': '元朗'
    }
  }]
}

const parallel = {
  legend: {
    top: 10,
    data: ['北京']
  },
  parallelAxis: [{
    dim: 0,
    name: '日期',
    inverse: true,
    max: 31,
    nameLocation: 'start'
  },
  {
    dim: 1,
    name: 'AQI'
  },
  {
    dim: 2,
    name: 'PM2.5'
  },
  {
    dim: 3,
    name: 'PM10'
  },
  {
    dim: 4,
    name: ' CO'
  },
  {
    dim: 5,
    name: 'NO2'
  },
  {
    dim: 6,
    name: 'SO2'
  },
  {
    dim: 7,
    name: '等级',
    type: 'category',
    data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
  }
  ],
  series: [{
    name: '北京',
    type: 'parallel',
    lineStyle: {
      normal: {
        width: 1,
        opacity: 0.5
      }
    },
    data: [
      [1, 55, 9, 56, 0.46, 18, 6, '良'],
      [2, 25, 11, 21, 0.65, 34, 9, '优'],
      [3, 56, 7, 63, 0.3, 14, 5, '良'],
      [4, 33, 7, 29, 0.33, 16, 6, '优'],
      [5, 42, 24, 44, 0.76, 40, 16, '优']
    ]
  }]
}

const lines = {
  backgroundColor: '#404a59',
  title: {
    text: '航线',
    subtext: '数据纯属虚构',
    left: 'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item'
  },
  geo: {
    map: 'china',
    roam: true,
    itemStyle: {
      areaColor: '#323c48',
      borderColor: '#404a59'
    }
  },
  series: [{ // 北京到广州的连线
    name: '北京 Top10',
    type: 'lines',
    zlevel: 2,
    symbol: ['none', 'arrow'],
    symbolSize: 10,
    effect: {
      show: true,
      period: 6,
      trailLength: 0,
      symbol: 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z', // 飞机符号
      symbolSize: 15
    },
    lineStyle: {
      color: '#0F0',
      width: 1,
      opacity: 0.6,
      curveness: 0.2
    },
    data: [{
      coords: [
        [116.4551, 40.2539], // 北京
        [113.5107, 23.2196] // 广州
      ]
    }]
  },
  { // 涟漪散点图
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: {
      brushType: 'stroke'
    },
    label: {
      show: true,
      position: 'right',
      formatter: '{b}'
    },
    color: '#0F0',
    symbolSize: 11,
    data: [{
      name: '北京',
      value: [116.4551, 40.2539]
    },
    {
      name: '广州',
      value: [113.5107, 23.2196]
    }
    ]
  }
  ]
}

const graph = {
  title: {
    text: 'Les Miserables',
    subtext: 'Default layout',
    top: 'bottom',
    left: 'right'
  },
  tooltip: {},
  animationDuration: 1500,
  animationEasingUpdate: 'quinticInOut',
  series: [{
    name: 'Les Miserables',
    type: 'graph',
    layout: 'none',
    data: [{
      name: '1',
      x: 10,
      y: 10,
      value: 10
    }, {
      name: '2',
      x: 100,
      y: 100,
      value: 20,
      symbolSize: 20
    }, {
      name: '3',
      x: 50,
      y: 50,
      value: 30,
      symbolSize: 15
    }],
    /* links:[name为1的item连接name为2的item,name为2的item连接name为3的item] */
    links: [{
      source: '1',
      target: '2'
    }, {
      source: '2',
      target: '3'
    }],
    roam: true,
    focusNodeAdjacency: true,
    itemStyle: {
      borderColor: '#fff',
      borderWidth: 1,
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, 0.3)'
    },
    label: {
      position: 'right',
      formatter: '{b}'
    },
    lineStyle: {
      color: 'source',
      curveness: 0.3
    },
    emphasis: {
      lineStyle: {
        width: 10
      }
    }
  }]
}

const sankey = {
  title: {
    text: 'Sankey Diagram'
  },
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
  series: [{
    type: 'sankey',
    data: [{
      name: 'a'
    },
    {
      name: 'b'
    },
    {
      name: 'c'
    },
    {
      name: 'd'
    },
    {
      name: 'e'
    }
    ],
    links: [{
      source: 'a',
      target: 'b',
      value: 11
    },
    {
      source: 'b',
      target: 'c',
      value: 22
    },
    {
      source: 'b',
      target: 'd',
      value: 33
    },
    {
      source: 'b',
      target: 'e',
      value: 11
    }
    ],
    focusNodeAdjacency: 'allEdges',
    itemStyle: {
      borderWidth: 1,
      borderColor: '#aaa'
    },
    lineStyle: {
      color: 'source',
      curveness: 0.5
    }
  }]
}

const funnel = {
  title: {
    text: '漏斗图',
    subtext: '纯属虚构'
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c}%'
  },
  toolbox: {
    feature: {
      dataView: {
        readOnly: false
      },
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    data: ['展现', '点击', '访问', '咨询', '订单']
  },

  series: [{
    name: '漏斗图',
    type: 'funnel',
    sort: 'descending',
    label: {
      show: true,
      position: 'inside'
    },
    emphasis: {
      label: {
        fontSize: 20
      }
    },
    data: [{
      value: 60,
      name: '访问'
    },
    {
      value: 40,
      name: '咨询'
    },
    {
      value: 20,
      name: '订单'
    },
    {
      value: 80,
      name: '点击'
    },
    {
      value: 100,
      name: '展现'
    }
    ]
  }]
}

const gauge = {
  tooltip: {
    formatter: '{a} <br/>{c} {b}'
  },
  toolbox: {
    show: true,
    feature: {
      restore: {
        show: true
      },
      saveAsImage: {
        show: true
      }
    }
  },
  series: [{
    name: '速度',
    type: 'gauge',
    min: 0,
    max: 320,
    splitNumber: 16,
    radius: '100%',
    axisLine: { // 坐标轴线
      lineStyle: { // 属性lineStyle控制线条样式
        width: 10
      }
    },
    axisTick: { // 坐标轴小标记
      length: 15, // 属性length控制线长
      lineStyle: { // 属性lineStyle控制线条样式
        color: 'auto'
      }
    },
    splitLine: { // 分隔线
      length: 20, // 属性length控制线长
      lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
        color: 'auto'
      }
    },
    title: {
      // 其余属性默认使用全局文本样式，详见TEXTSTYLE
      fontWeight: 'bolder',
      fontSize: 20,
      fontStyle: 'italic'
    },
    detail: {
      // 其余属性默认使用全局文本样式，详见TEXTSTYLE
      formatter: function (value) {
        value = (value + '').split('.')
        value.length < 2 && (value.push('00'))
        return ('00' + value[0]).slice(-2) +
						'.' + (value[1] + '00').slice(0, 2)
      },
      fontWeight: 'bolder',
      borderRadius: 3,
      backgroundColor: '#444',
      borderColor: '#aaa',
      shadowBlur: 5,
      shadowColor: '#333',
      shadowOffsetX: 0,
      shadowOffsetY: 3,
      borderWidth: 2,
      textBorderColor: '#000',
      textBorderWidth: 2,
      textShadowBlur: 2,
      textShadowColor: '#fff',
      textShadowOffsetX: 0,
      textShadowOffsetY: 0,
      fontFamily: 'Arial',
      width: 100,
      color: '#eee',
      rich: {}
    },
    data: [{
      value: 40,
      name: 'km/h'
    }]
  }

  ]
}

const pictorialBar = {
  backgroundColor: '#0f375f',
  tooltip: {},
  legend: {
    data: ['all'],
    textStyle: {
      color: '#ddd'
    }
  },
  xAxis: [{
    data: ['圣诞节儿童愿望清单', '', '珠穆朗玛\nQomolangma', '乞力马扎罗\nKilimanjaro'],
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      margin: 20,
      textStyle: {
        color: '#ddd',
        fontSize: 14
      }
    }
  }],
  yAxis: {
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  animationEasing: 'elasticOut',
  series: [{
    type: 'pictorialBar',
    name: 'all',
    hoverAnimation: true,
    label: {
      show: true,
      position: 'top',
      formatter: '{c} m',
      fontSize: 16,
      color: '#e54035'
    },
    data: [{
      value: 3000,
      symbol: 'image://data:image/png;base64,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',
      symbolRepeat: true,
      symbolSize: ['130%', '20%'],
      symbolOffset: [0, 10],
      symbolMargin: '-30%',
      animationDelay: function (dataIndex, params) {
        return params.index * 30
      }
    }]
  }]
}

const themeRiver = {
  tooltip: {
    trigger: 'axis'
  },
  singleAxis: {
    bottom: '10%'
  },
  legend: {},
  series: [{
    type: 'themeRiver',
    data: [
      [0, 0, 'a'],
      [1, 4, 'a'],
      [2, 0, 'a'],
      [3, 8, 'a'],
      [4, 4, 'a'],
      [5, 0, 'a'],
      [0, 0, 'b'],
      [1, 9, 'b'],
      [2, 0, 'b'],
      [3, 0, 'b'],
      [4, 9, 'b'],
      [5, 0, 'b'],
      [0, 0, 'c'],
      [1, 6, 'c'],
      [2, 0, 'c'],
      [3, 0, 'c'],
      [4, 6, 'c'],
      [5, 0, 'c']
    ],
    label: {
      show: false
    }
  }]
}

const custom = {
  tooltip: {
    formatter: function (params) {
      return params.name + '：' + params.value[2] + '-' + params.value[1]
    }
  },
  title: {
    text: 'Profile',
    left: 'center'
  },
  grid: {
    height: 150
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['a', 'b', 'c']
  },
  series: [{
    type: 'custom',
    renderItem: function (params, api) {
      var categoryIndex = api.value(0)
      var start = api.coord([api.value(2), categoryIndex])
      var end = api.coord([api.value(1), categoryIndex])
      var height = api.size([0, 1])[1] * 0.6

      var rectShape = echarts.graphic.clipRectByRect({
        x: start[0],
        y: start[1] - height / 2,		// 数据项在y轴居中
        width: end[0] - start[0],
        height: height
      }, {
        x: params.coordSys.x,
        y: params.coordSys.y,
        width: params.coordSys.width,
        height: params.coordSys.height
      })

      return rectShape && {
        type: 'rect',
        shape: rectShape,
        style: api.style()
      }
    },
    itemStyle: {
      opacity: 0.8
    },
    encode: {
      y: 0
    },
    data: [
      /* [y类目轴,x轴,其他纬度] */
      [0, 300, 100],
      [1, 550, 400],
      [2, 900, 800]
    ]
  }]
}

export default {
  line, // 折线
  bar, // 柱状
  pie, // 饼图
  scatterGrid, // 散点图-直角坐标系
  scatterPolar, // 散点图-极坐标系
  scatterBmap, // 散点图-地图坐标系
  effectScatter, // 涟漪散点图-地图坐标系
  radar, // 雷达
  tree, // 树状
  treemap, // 矩形树状
  sunburst, // 旭日图
  boxplot, // 箱形图
  candlestick, // k线图
  heatmap, // 热力图
  map, // 地图
  parallel, // 平行坐标系
  lines, // 地图航线、路线
  graph, // 关系图
  sankey, // 桑基图
  funnel, // 漏斗图
  gauge, // 仪表盘
  pictorialBar, // 象形柱图
  themeRiver, // 主题河流
  custom		// 自定义系列
}
